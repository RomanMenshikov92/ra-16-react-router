import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContent";
import { News } from "../interfaces/InterfaceNews";
import { NotFoundPage } from "../pages/NotFoundPage";

export const SingleNews = () => {
  const { id } = useParams<{ id: string }>();
  const { token } = useContext(AuthContext)!;
  const [post, setNews] = useState<News | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`http://localhost:7080/private/news/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.log("Not data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [id, token]);

  const handleGoBack = () => navigate(`/ra-16-react-router/auth/neto/news/`, { replace: true, state: `/ra-16-react-router/auth/neto/news/${id}` });

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {post ? (
        <div className="main__neto-single-news">
          <img className="main__neto-single-news-img" src={post.image} alt={post.title} />
          <div className="main__neto-single-news-text">
            <h3 className="main__neto-single-news-title">{post.title}</h3>
            <p className="main__neto-single-news-paragraph">{post.content}</p>
          </div>
          <button className="main__neto-single-news-btn btn-reset" onClick={handleGoBack}>
            Go back
          </button>
        </div>
      ) : (
        <p className="main__neto-loader">Loading...</p>
      )}
    </div>
  );
};
