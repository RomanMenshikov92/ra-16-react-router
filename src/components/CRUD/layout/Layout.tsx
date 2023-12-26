import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <h2 className="wrapper-title">CRUD</h2>
      <div className="wrapper-crud">
        <main className="page-crud">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
