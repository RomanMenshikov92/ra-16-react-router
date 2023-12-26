import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout: React.FC = () => {
  return (
    <>
      <h2 className="wrapper-title">Аутентификация</h2>
      <div className="wrapper-neto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  );
};
