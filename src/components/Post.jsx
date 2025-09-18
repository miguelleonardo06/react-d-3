import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Post.module.css";
import { Comment } from "./Comment";
import { AddComment } from "./forms/AddComment";
export function Post() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => setPosts(res.data.slice(0, 10)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {isLoading && <h1>Loudeng Loudeng.....</h1>}
      {!isLoading && error && error}
      {posts?.map((post) => (
        <div className={style.container} key={post.id}>
          <h4>{post.title}</h4>
          <p className={style.postBody}>{post.body}</p>
          <h3>Comments:</h3>
          <Comment
            postOwnerId={post.id}
            setComments={setComments}
            comments={comments}
          />
        </div>
      ))}
    </main>
  );
}
