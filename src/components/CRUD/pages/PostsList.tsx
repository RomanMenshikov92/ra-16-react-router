import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import "moment/locale/ru";
import { Link, useNavigate } from "react-router-dom";
import { GrEmoji } from "react-icons/gr";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { PiGifDuotone } from "react-icons/pi";
import { RiEmojiStickerLine } from "react-icons/ri";
import { AiOutlineLike} from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { Post } from "../interfaces/InterfacePost";

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [commentInputs, setCommentInputs] = useState<{ [postId: number]: string }>({});
  const commentInputRefs = useRef<{ [postId: number]: HTMLInputElement | null }>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.reverse()));
  }, []);

  const formatTimeFromNow = (time: number): string => {
    return moment(time).fromNow();
  };

  const handlePostClick = (postId: number, post: Post) => {
    navigate(`/ra-16-react-router/crud/posts/${postId}`, {
      state: { post, created: post.created },
    });
  };

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(commentInputs);
    setCommentInputs({});
  };

  const handleFocusComment = (postId: number) => {
    console.log(commentInputRefs.current);
    if (commentInputRefs.current[postId]) {
      commentInputRefs.current[postId]?.focus();
    }
  };

  return (
    <>
      <h2 className="crud__title">Список постов</h2>
      <div className="crud__wrapper-add">
        <Link className="crud__link-add" to="/ra-16-react-router/crud/posts/new">
          Создать пост
        </Link>
      </div>
      <ul className="crud__list list-reset">
        {posts.map((post) => (
          <li className="crud__item" key={post.id}>
            <div className="crud__user">
              <img className="crud__avatar" src={post.avatar} alt="avatar" />
              <div className="crud__info">
                <h3 className="crud__fullname">{post.author}</h3>
                <span className="crud__position">{post.position}</span>
                <span className="crud__date">{formatTimeFromNow(post.created)}</span>
              </div>
            </div>
            <p className="crud__content" onClick={() => handlePostClick(post.id, post)}>
              {post.content}
              <span className="crud__span-click btn-reset">
                <TbHandClick />
              </span>
            </p>
            <div className="crud__wrapper-btn">
              <button className="crud__btn-like btn-reset">
                <AiOutlineLike /> Нравится
              </button>
              <button className="crud__btn-comment btn-reset" onClick={() => handleFocusComment(post.id)}>
                <FaRegCommentAlt /> Комментировать
              </button>
            </div>
            <form className="crud__comment-form" onSubmit={handleSubmitInput}>
              <img className="crud__comment-avatar" src={post.avatar} alt="avatar" />
              <label className="crud__comment-label" htmlFor={`comment-${post.id}`}></label>
              <input
                ref={(ref) => (commentInputRefs.current[post.id] = ref)}
                className="crud__comment-input input-reset"
                id={`comment-${post.id}`}
                type="text"
                value={commentInputs[post.id] || ""}
                onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                placeholder="Добавить комментарий"
              />
              <div className="crud__comment-wrapper-btn">
                <button className="crud__comment-btn-emoji btn-reset">
                  <GrEmoji />
                </button>
                <button className="crud__comment-btn-photo btn-reset">
                  <MdOutlineAddAPhoto />
                </button>
                <button className="crud__comment-btn-gif btn-reset">
                  <PiGifDuotone />
                </button>
                <button className="crud__comment-btn-sticker btn-reset">
                  <RiEmojiStickerLine />
                </button>
              </div>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
