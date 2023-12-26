import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/InterfaceUser";

interface AuthContextValue {
  user: User | null;
  token: string | null;
  login: (login: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({ user: null, token: null, login: () => {}, logout: () => {} });
