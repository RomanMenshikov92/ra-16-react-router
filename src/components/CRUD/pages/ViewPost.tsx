import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import moment from "moment";
import "moment/locale/ru";
import { IoMdClose } from "react-icons/io";

export const ViewPost: React.FC = () => {
  const location = useLocation();
  const { post, created } = location.state;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const formatTimeFromNow = (time: number): string => {
    return moment(time).fromNow();
  };

  const handleDelete = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/crud/posts/");
        } else {
          throw new Error("Error updating post");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEdit = () => {
    navigate(`/crud/posts/${id}/edit`, {
      state: { post, created: post.created },
    });
  };

  const handleCancel = () => {
    navigate(`/crud/posts/`, { state: { post, created: post.created, } });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="crud__title">Просмотр одного поста</h2>
      <div className="crud__view">
        <button type="button" className="crud__create-btn-close btn-reset" onClick={handleCancel}>
          <IoMdClose />
        </button>
        <div className="crud__date-full">{post.date}</div>
        <div className="crud__user">
          <img className="crud__avatar" src={post.avatar} alt="avatar" />
          <div className="crud__info">
            <h3 className="crud__fullname">{post.author}</h3>
            <span className="crud__position">{post.position}</span>
            <span className="crud__date">{formatTimeFromNow(created)}</span>
          </div>
        </div>
        <p className="crud__content-view">{post.content}</p>
        <div className="crud__wrapper-btn">
          <button className="crud__btn-like btn-reset">
            <AiOutlineLike /> Нравится
          </button>
          <button className="crud__btn-comment btn-reset">
            <FaRegCommentAlt /> Комментировать
          </button>
        </div>
        <div className="crud__wrapper-btn-bottom">
          <button className="crud__btn-edit btn-reset" onClick={handleEdit}>
            Редактировать
          </button>
          <button className="crud__btn-delete btn-reset" onClick={handleDelete}>
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewPost;
