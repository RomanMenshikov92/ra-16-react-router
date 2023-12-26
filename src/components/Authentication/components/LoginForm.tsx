import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContent";

export const LoginForm: React.FC = () => {
  const { login } = useContext(AuthContext)!;
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(loginValue, passwordValue);
    console.log(loginValue, passwordValue);
  };

  return (
    <form className="header__neto-form-auth" onSubmit={handleSubmit}>
      <label htmlFor="login"></label>
      <input
        id="login"
        className="header__neto-input-login input-reset"
        type="text"
        placeholder="Login"
        value={loginValue}
        onChange={(event) => setLoginValue(event.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        id="password"
        className="header__neto-input-password input-reset"
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={(event) => setPasswordValue(event.target.value)}
      />
      <button className="header__neto-btn-login btn-reset" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
