import { useState, useEffect } from "react";
import axios from "axios";

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

  return comments.map((comment) => {
    const isPostMatchUserId = comment.postId == postOwnerId ? true : false;

    return (
      <main key={comment.id}>
        <h6>{isPostMatchUserId && comment.email}</h6>
        <p>{isPostMatchUserId && comment.body}</p>
      </main>
    );
  });
}
