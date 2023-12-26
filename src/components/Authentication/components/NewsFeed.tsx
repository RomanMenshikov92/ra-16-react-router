import { useContext, useState, useEffect } from "react";
import { News } from "../interfaces/InterfaceNews";
import { AuthContext } from "../contexts/AuthContent";
import { useNavigate } from "react-router-dom";
import { NewsFeedItem } from "./NewsFeedItem";

export const NewsFeed: React.FC = () => {
  const { token, logout } = useContext(AuthContext);
  const [news, setNews] = useState<News[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:7080/private/news", {
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
  }, [logout, token]);
  return (
    <ul className="main__neto-newsfeed-list list-reset">
      {news.length > 0 ? (
        news.map((item) => (
          <NewsFeedItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            content={item.content}
            onClick={(id: string) => navigate(`/ra-16-react-router/auth/neto/news/${id}`)}
          />
        ))
      ) : (
        <p className="main__neto-loader">Loading...</p>
      )}
    </ul>
  );
};
