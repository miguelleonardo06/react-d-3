import { useState } from "react";
import css from "./AddComment.module.css";
export function AddComment({ setComments, commentsLength, postOwnerId }) {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!newComment) {
      return setError("PLease enter a new comment before submitting.");
    }

    const payload = [
      {
        postId: postOwnerId,
        id: commentsLength + 1,
        email: "Miguel Leonardo",
        body: newComment,
      },
    ];
    setComments((prev) => [...prev, ...payload]);
    setNewComment("");
  }

  function handleNewComment(newCommentValue) {
    setNewComment(newCommentValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.container}>
        <textarea
          className={css.areaWidth}
          type="text"
          value={newComment}
          onChange={(e) => handleNewComment(e.target.value)}
        />
        <button type="submit" className={css.submitBtn}>
          Add comment
        </button>
      </div>
      {error && <p className={css.error}>{error}</p>}
    </form>
  );
}
