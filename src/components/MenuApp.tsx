import { NavLink } from "react-router-dom";
import { AuthContext } from "./Authentication/contexts/AuthContent";

export const MenuApp: React.FC = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? "menu-app__item menu-app__item-active" : "menu-app__item");
  return (
    <nav className="menu-app">
      <NavLink className={activeLink} to="/ra-16-react-router/" end>
        Главная
      </NavLink>
      <NavLink className={activeLink} to="/ra-16-react-router/menu/home/">
        Задание №1 - Меню
      </NavLink>
      <NavLink className={activeLink} to="/ra-16-react-router/crud/posts/">
        Задание №2 - CRUD
      </NavLink>
      <AuthContext.Consumer>
        {({ token }) => (
          <NavLink className={activeLink} to={token ? "/ra-16-react-router/auth/neto/news/" : "/ra-16-react-router/auth/neto/"}>
            Задание №3 - Authentication
          </NavLink>
        )}
      </AuthContext.Consumer>
    </nav>
  );
};
