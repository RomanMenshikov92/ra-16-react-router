import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaPencilAlt, FaPhotoVideo, FaVideo } from "react-icons/fa";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";

export const CreatePost: React.FC = () => {
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState("publication");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<String>("");
  const navigate = useNavigate();

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = moment().format("HH:mm - DD.MM.YYYY");
    const author = "Иванов Иван Иванович";
    const position = "Основатель группы";
    const avatar = "https://i.pravatar.cc/100";
    const like = false;

    fetch("http://localhost:7070/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 0, content, date, author, position, avatar, like }),
    })
      .then(() => {
        navigate("/ra-16-react-router/crud/posts/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCancel = () => {
    navigate("/ra-16-react-router/crud/posts/");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getActiveTabClassName = (tab: string) => {
    return tab === activeTab ? "crud__create-item crud__create-item-active" : "crud__create-item";
  };

  return (
    <>
      <h2 className="crud__title">Создание поста</h2>
      <form className="crud__create-form" onSubmit={handleSubmit}>
        <button type="button" className="crud__create-btn-close btn-reset" onClick={handleCancel}>
          <IoMdClose />
        </button>
        <div className="crud__create-wrapper">
          <ul className="crud__create-list">
            <li className={getActiveTabClassName("publication")} onClick={() => handleTabChange("publication")}>
              <FaPencilAlt /> Публикация
            </li>
            <li className={getActiveTabClassName("photoVideo")} onClick={() => handleTabChange("photoVideo")}>
              <FaPhotoVideo /> Фото/видео
            </li>
            <li className={getActiveTabClassName("live")} onClick={() => handleTabChange("live")}>
              <FaVideo /> Прямой эфир
            </li>
            <li className={getActiveTabClassName("more")} onClick={() => handleTabChange("more")}>
              <IoEllipsisHorizontalCircleSharp /> Ещё
            </li>
          </ul>
          <div className="crud__create-post">
            <img className="crud__create-avatar" src={"https://i.pravatar.cc/100"} alt="avatar" />
            {activeTab === "publication" && (
              <div className="crud__create-post">
                <div className="crud__create-content">
                  <label className="crud__create-label-text" htmlFor="text"></label>
                  <textarea
                    ref={textareaRef}
                    className="crud__create-textarea-text input-reset"
                    id="text"
                    value={content}
                    onChange={(event) => {
                      textAreaChange(event);
                      setContent(event.target.value);
                    }}
                    placeholder="Введите контент"
                  ></textarea>
                </div>
                <button className="crud__create-btn-emoji btn-reset">
                  <MdOutlineEmojiEmotions />
                </button>
              </div>
            )}
            {activeTab === "photoVideo" && <div className="crud__create-post">Photo/video</div>}
            {activeTab === "live" && <div className="crud__create-post">Live broadcast</div>}
            {activeTab === "more" && <div className="crud__create-post">More</div>}
          </div>
        </div>
        <button className="crud__create-btn-submit btn-reset" type="submit">
          Опубликовать
        </button>
      </form>
    </>
  );
};

export default CreatePost;
