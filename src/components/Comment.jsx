import { useState, useEffect } from "react";
import axios from "axios";
import { AddComment } from "./forms/AddComment";

export function Comment({ postOwnerId, comments, setComments }) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
    })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [setComments]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!isLoading && error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {comments
        .filter((comment) => comment.postId === postOwnerId)
        .map((comment) => (
          <main key={comment.id} className={css.container}>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </main>
        ))}
      <AddComment
        setComments={setComments}
        postOwnerId={postOwnerId}
        commentsLength={comments?.length}
      />
    </>
  );
}
