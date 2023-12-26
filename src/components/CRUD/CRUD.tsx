import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { PostsList } from "./pages/PostsList";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { ViewPost } from "./pages/ViewPost";
import  "./styles/crud.css";

export const CRUD: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id" element={<ViewPost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Route>
    </Routes>
  );
};
