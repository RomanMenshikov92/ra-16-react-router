import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaPhotoVideo, FaUserPlus } from "react-icons/fa";
import moment from "moment";
import "moment/locale/ru";
import { IoMdClose } from "react-icons/io";
import { PiGifBold } from "react-icons/pi";
import { FaLocationDot, FaRegFaceSmileBeam } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export const EditPost: React.FC = () => {
  const location = useLocation();
  const { post, created } = location.state;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState(post.content);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<String>("");

  const formatTimeFromNow = (time: number): string => {
    return moment(time).fromNow();
  };

  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const handleSave = () => {
    const updatedPost = { ...post, content: content };
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/ra-16-react-router/crud/posts/${id}`, {
            state: { post: updatedPost, created },
          });
        } else {
          throw new Error("Error updating post");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancel = () => {
    navigate(`/ra-16-react-router/crud/posts/${id}`, { state: { post, created } });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="crud__title">Редактирование поста</h2>
      <div className="crud__edit">
        <button type="button" className="crud__create-btn-close btn-reset" onClick={handleCancel}>
          <IoMdClose />
        </button>
        <div className="crud__date-full">{post.date}</div>
        <div className="crud__user">
          <img className="crud__avatar" src={post.avatar} alt={post.author} />
          <div className="crud__info">
            <h3 className="crud__fullname">{post.author}</h3>
            <span className="crud__position">{post.position}</span>
            <span className="crud__date">{formatTimeFromNow(created)}</span>
          </div>
        </div>
        <div className="crud__edit-window">
          <label className="crud__edit-label-text" htmlFor="text"></label>
          <textarea
            id="text"
            ref={textareaRef}
            className="crud__edit-textarea-text"
            value={content}
            onChange={(e) => {
              textAreaChange(e);
              setContent(e.target.value);
            }}
          />
          <button className="crud__edit-btn-emoji btn-reset">
            <MdOutlineEmojiEmotions />
          </button>
        </div>

        <ul className="crud__edit-list list-reset">
          <li className="crud__edit-item">
            <FaPhotoVideo /> Фото/видео
          </li>
          <li className="crud__edit-item">
            <FaRegFaceSmileBeam /> Чувства/действия
          </li>
          <li className="crud__edit-item">
            <PiGifBold /> GIF
          </li>
          <li className="crud__edit-item">
            <FaUserPlus /> Отметить друзей
          </li>
          <li className="crud__edit-item">
            <FaLocationDot /> Отметить посещение
          </li>
        </ul>
        <div className="crud__wrapper-btn-bottom">
          <button className="crud__edit-btn-save btn-reset" onClick={handleSave}>
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPost;
