import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { base_url, user_url } from "@/hooks/urls";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Log out function
  const logout = useCallback(() => {
    Cookies.remove("authToken");
    setUser(null);
    router.push("/auth/login");
  }, [router]);

  // Function to check if token exists
  const checkToken = useCallback(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setUser({ token });  // Set user state if token exists
    } else {
      logout();
    }
  }, [logout]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${base_url}${user_url}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      Cookies.set("authToken", data.token, { secure: true, sameSite: "Strict" });

      setUser({ token: data.token });
      router.push("/");
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Check for token when component mounts
  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return { user, login, logout, loading, error };
};

export default useAuth;
