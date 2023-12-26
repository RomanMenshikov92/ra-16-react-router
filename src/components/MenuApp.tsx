import { NavLink } from "react-router-dom";
import { AuthContext } from "./Authentication/contexts/AuthContent";

export const MenuApp: React.FC = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? "menu-app__item menu-app__item-active" : "menu-app__item");
  return (
    <nav className="menu-app">
      <NavLink className={activeLink} to="/">
        Главная
      </NavLink>
      <NavLink className={activeLink} to="/menu/home/">
        Задание №1 - Меню
      </NavLink>
      <NavLink className={activeLink} to="/crud/posts/">
        Задание №2 - CRUD
      </NavLink>
      <AuthContext.Consumer>
        {({ token }) => (
          <NavLink className={activeLink} to={token ? "/auth/neto/news/" : "/auth/neto/"}>
            Задание №3 - Authentication
          </NavLink>
        )}
      </AuthContext.Consumer>
    </nav>
  );
};
