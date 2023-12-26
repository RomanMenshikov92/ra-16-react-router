import "./App.css";
import { SiteRacingTaxi } from "./components/Menu/";
import { CRUD } from "./components/CRUD/";
import { AuthenticationPage } from "./components/Authentication";
import { Routes, Route } from "react-router-dom";
import LayoutApp from "./components/LayoutApp";
import Home from "./components/Home";
import { useAuth } from "./components/Authentication/hooks/useAuth";
import { AuthContext } from "./components/Authentication/contexts/AuthContent";

function App() {
  const auth = useAuth();
  return (
    <>
      <AuthContext.Provider value={auth}>
        <Routes>
          <Route path="/" element={<LayoutApp />}>
            <Route index element={<Home />} />
            <Route path="/menu/*" element={<SiteRacingTaxi />} />
            <Route path="/crud/*" element={<CRUD />} />
            <Route path="/auth/*" element={<AuthenticationPage />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
