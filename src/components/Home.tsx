import { NavLink } from "react-router-dom";
import { AuthContext } from "./Authentication/contexts/AuthContent";

export const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Меню</h2>
        <NavLink className="link" to="/ra-16-react-router/menu/home/" >
          Перейти к странице
        </NavLink>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - CRUD</h2>
        <NavLink className="link" to="/ra-16-react-router/crud/posts/">
          Перейти к странице
        </NavLink>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Аутентификация</h2>
        <AuthContext.Consumer>
          {({ token }) => (
            <NavLink className="link" to={token ? "/ra-16-react-router/auth/neto/news/" : "/ra-16-react-router/auth/neto/"}>
              Задание №3 - Authentication
            </NavLink>
          )}
        </AuthContext.Consumer>
      </div>
    </>
  );
};
export default Home;
