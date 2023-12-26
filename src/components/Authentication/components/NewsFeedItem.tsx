import React from "react";
import { NewsFeedItemProps } from "../interfaces/InterfaceNews";

export const NewsFeedItem: React.FC<NewsFeedItemProps> = ({ id, image, title, content, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <li className="main__neto-newsfeed-item" onClick={handleClick}>
      <img className="main__neto-newsfeed-item-img" src={image} alt={title} />
      <div className="main__neto-newsfeed-item-text">
        <h3 className="main__neto-newsfeed-item-title">{title}</h3>
        <p className="main__neto-newsfeed-item-paragraph">{content}</p>
      </div>
    </li>
  );
};
