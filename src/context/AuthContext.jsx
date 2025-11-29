import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Keep access token in memory only
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount: fetch CSRF token then try to refresh (if refresh cookie present, server will rotate)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // 1) call sanctum csrf endpoint -> sets XSRF-TOKEN cookie
        await authService.getCsrfTokenOnce();

        // 2) try refresh (may 401 if not logged in)
        try {
          const data = await authService.refreshOnce();
          console.log("AuthContext refreshOnce data:", data);
          if (!mounted) return;

          // restore user and access token
          if (data?.accessToken) {
            console.log("\nAuth refresh success:", data);
            setAccessToken(data.accessToken);
            setUser(data.user);
          } else {
            setAccessToken(null);
            setUser(null);
          }
        } catch (e) {
          // Refresh failed → user is logged out automatically
          setAccessToken(null);
          setUser(null);
        }
      } catch (err) {
        console.error("Auth init error", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  async function login({ email, password }) {
    try {
      const response = await authService.login({ email, password });
      setAccessToken(response.data.token);
      console.log("\nAuth Context login response:", response);
      setUser(response.data.user);
      return response;
    } catch (error) {
      setAccessToken("");
      setUser(null);
      throw error;
    }
  }

  async function logout() {
    try {
      await authService.logout();
    } finally {
      setAccessToken(null);
      setUser(null);
    }
  }

  async function register({ username, email, password, confirmPassword }) {
    const data = await authService.register({
      username,
      email,
      password,
      confirmPassword,
    });
    if (data?.accessToken) {
      setAccessToken(data.accessToken);
      setUser(data.user || null);
    }
    return data;
  }

  // Expose a small well-defined API (Interface Segregation)
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
    accessToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
