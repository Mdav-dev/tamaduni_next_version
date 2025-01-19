import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url, user_url } from "@/hooks/urls";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Login function with API call and improved error handling
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(`${base_url}${user_url}/login`, { email, password });

      const { token } = response.data;
      Cookies.set("authToken", token, { secure: true, sameSite: "Strict" });

      await verifyToken(token);  // Verify token after login
      
      router.push("/dashboard");  // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  // Verify token and fetch user details
  const verifyToken = async (token) => {
    try {
      const response = await axios.get(`${base_url}user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (err) {
      logout();
    }
  };

  // Log out function
  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
    router.push("/auth/login");  // Redirect to login after logout
  };

  // Check for existing token when component mounts
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      verifyToken(token);
    }
  }, []);

  return { user, login, logout, loading, error };
};

export default useAuth;
