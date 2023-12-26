import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/authentication.css";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NewsSinglePage } from "./pages/NewsSinglePage";

export const AuthenticationPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/neto/" element={<HomePage />} />
        <Route path="/neto/news/" element={<NewsPage />} />
        <Route path="/neto/news/:id/" element={<NewsSinglePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AuthenticationPage;
