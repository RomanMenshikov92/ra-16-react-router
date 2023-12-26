import { Outlet } from "react-router-dom";
import { Menu } from "../Menu";

export const Layout: React.FC = () => {
  return (
    <>
      <h2 className="wrapper-title">Меню</h2>
      <div className="wrapper-menu">
        <Menu></Menu>
        <main className="page">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
