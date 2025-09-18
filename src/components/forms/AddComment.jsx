import { useState } from "react";
import css from "./AddComment.module.css";
export function AddComment({ setComments, commentsLength, postOwnerId }) {
  const [newComment, setNewComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.container}>
        <textarea
          className={css.areaWidth}
          type="text"
          onChange={(e) =>
            setNewComment({
              postId: postOwnerId,
              id: commentsLength + 1,
              email: "Miguel Leonardo",
              body: e.target.value,
            })
          }
        />
        <button className={css.submitBtn}>Add comment</button>
      </div>
    </form>
  );
}
