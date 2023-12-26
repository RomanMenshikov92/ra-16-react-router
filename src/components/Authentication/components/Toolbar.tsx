import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContent";

export const Toolbar: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="header__neto-toolbar">
      <div className="header__neto-wrapper-img">
        <img className="header__neto-img" src={user?.avatar} alt={user?.name} />
        <span className="header__neto-name">Hello, {user?.name}!</span>
      </div>
      <button className="header__neto-btn-logout btn-reset" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
