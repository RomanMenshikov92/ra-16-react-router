import { Outlet } from "react-router-dom";
import { MenuApp } from "./MenuApp";

export const LayoutApp: React.FC = () => {
  return (
    <div className="container-app">
      <MenuApp></MenuApp>
      <main className="page-app">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LayoutApp;
