import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DriftPage } from "./pages/DriftPage";
import { TimeAttackPage } from "./pages/TimeAttackPage";
import { ForzaPage } from "./pages/ForzaPage";
import { Layout } from "./layouts/Layout";
import "./styles/racing-taxi.css";

export const SiteRacingTaxi: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home"  element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Route>
    </Routes>
  );
};
