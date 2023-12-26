import LoginForm from "./LoginForm";
import { Logo } from "./Logo";
import { Toolbar } from "./Toolbar";
import { AuthContext } from "../contexts/AuthContent";

export const Header = () => {
  return (
    <AuthContext.Consumer>
      {({ user, token }) => (
        <header className="header__neto">
            <Logo name="Neto Social"  />
          {user && token ? <Toolbar /> : <LoginForm />}
        </header>
      )}
    </AuthContext.Consumer>
  );
};
