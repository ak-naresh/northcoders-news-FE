import { useState } from "react";

import { postArticleComment } from "../api";

function CommentInsert({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Input-validation
    if (newComment === "") {
      return;
    }

    //Error-handler
    setError(null);
    setIsLoading(true);

    const username = "grumpy19"; //hardcoded username for testing
    const commentData = { username, body: newComment };

    postArticleComment(article_id, commentData)
      .then((newComment) => {
        setComments((currentComments) => {
          return [newComment, ...currentComments];
        });

        setNewComment("");
        setIsLoading(false);
      })

      .catch((error) => {
        setError("Comment was not posted. Please try again!");
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="commentInsertTextbox">
      <label htmlFor="comment-input">
        <input
          id="comment-input"
          type="text"
          required
          placeholder="Type here"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
      </label>
      <button className="commentSubmitButton" type="submit">
        Post
      </button>
    </form>
  );
}

export default CommentInsert;
