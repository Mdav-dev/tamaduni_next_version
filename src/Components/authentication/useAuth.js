import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url, user_url } from "@/hooks/urls";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Log out function with memoization
  const logout = useCallback(() => {
    Cookies.remove("authToken");
    setUser(null);
    router.push("/auth/login");
  }, [router]);

  // Verify token function
  const verifyToken = useCallback(async (token) => {
    try {
      const response = await axios.get(`${base_url}user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (err) {
      logout();
    }
  }, [logout]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${base_url}${user_url}/login`, {
        email,
        password,
      });

      const { token } = response.data;
      Cookies.set("authToken", token, { secure: true, sameSite: "Strict" });

      await verifyToken(token);
      router.push("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  // Check for existing token when component mounts
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      verifyToken(token);
    }
  }, [verifyToken]);

  return { user, login, logout, loading, error };
};

export default useAuth;
