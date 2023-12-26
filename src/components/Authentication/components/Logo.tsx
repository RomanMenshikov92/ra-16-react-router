import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogoProps } from "../interfaces/InterfaceLogo";
import { AuthContext } from "../contexts/AuthContent";

export const Logo: React.FC<LogoProps> = ({ name }: LogoProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Link to="/ra-16-react-router/auth/neto/" onClick={logout} className="header__neto-logo">
        {name}
      </Link>
    </>
  );
};
