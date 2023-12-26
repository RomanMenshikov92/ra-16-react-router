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
          <Route path="/ra-16-react-router/" element={<LayoutApp />}>
            <Route index element={<Home />} />
            <Route path="/ra-16-react-router/menu/*" element={<SiteRacingTaxi />} />
            <Route path="/ra-16-react-router/crud/*" element={<CRUD />} />
            <Route path="/ra-16-react-router/auth/*" element={<AuthenticationPage />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
