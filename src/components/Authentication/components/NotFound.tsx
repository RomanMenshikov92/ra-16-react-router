import { AuthContext } from "../contexts/AuthContent";
import { Link } from "react-router-dom";

export const NotFound = () => {
  // const { logout } = useContext(AuthContext);
  return (
    <div className="main__notfound">
      <span className="main__notfound-num">404</span>The page was not found
      <AuthContext.Consumer>
        {({ token }) => (
          <Link className="main__neto-notfound-btn" to={token ? "/auth/neto/news/" : "/auth/neto/"}>
            Go back
          </Link>
        )}
      </AuthContext.Consumer>
    </div>
  );
};
