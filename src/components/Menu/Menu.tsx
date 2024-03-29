import { NavLink } from "react-router-dom";

export const Menu: React.FC = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? "menu__item menu__item-active" : "menu__item");
  return (
    <nav className="menu">
      <NavLink className={activeLink} to="/ra-16-react-router/menu/home/">
        Главная
      </NavLink>
      <NavLink className={activeLink} to="/ra-16-react-router/menu/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={activeLink} to="/ra-16-react-router/menu/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={activeLink} to="/ra-16-react-router/menu/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
};
