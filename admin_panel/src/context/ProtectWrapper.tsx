/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

const ProtectWrapper: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) {
    return <div>Loading...</div>;
  }

  const { isAuthenticated, setIsAuthenticated } = auth;

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          navigate("/signin");
          throw new Error("Unauthorized");
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/signin");
      }
    };

    verifyUser();
  }, [setIsAuthenticated, navigate]);

  return <>{children}</>;
};

export default ProtectWrapper;
