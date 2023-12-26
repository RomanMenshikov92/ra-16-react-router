import { useEffect, useState } from "react";
import { useStorage } from "./useStorage";
import { User } from "../interfaces/InterfaceUser";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { setStorageValue, removeStorageValue } = useStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (login: string, password: string) => {
    try {
      const response = await fetch("http://localhost:7080/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const profileResponse = await fetch("http://localhost:7080/private/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/auth/neto/news/");
        if (profileResponse.ok) {
          const user = await profileResponse.json();
          setToken(token);
          setUser(user);
          setStorageValue("token", token);
          setStorageValue("user", JSON.stringify(user));
          navigate("/auth/neto/news/");
        } else if (profileResponse.status === 401) {
          logout();
        }
      } else if (response.status === 401) {
        logout();
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeStorageValue("token");
    removeStorageValue("user");
    navigate("/auth/neto/");
  };

  return { user, token, login, logout };
};
