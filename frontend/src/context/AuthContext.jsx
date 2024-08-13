import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Create a Context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Initialize authentication state from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
    setIsLoading(false); // Set loading to false once check is done
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("Users", JSON.stringify(userData));
    // <Navigate to="/" />
  };

  const logout = () => {
    setTimeout(() => {
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("Users");
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
