import { useState } from "react";

import { postArticleComment } from "../api";

function CommentInsert({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const username = "grumpy19";
  //delete above line later

  const handleSubmit = (event) => {
    event.preventDefault();

    //Input-validation
    if (newComment === "") {
      return;
    }

    console.log(newComment);
    //delete above line later

    //Error-handler
    setError(null);
    setIsLoading(true);

    postArticleComment(article_id, username, newComment)
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
        return;
      });
  };

  return (
    <form onSubmit={handleSubmit} className="commentInsertTextbox">
      <input
        type="text"
        placeholder="Type here"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button className="commentSubmitButton" type="commentSubmit">
        Post
      </button>
    </form>
  );
}
export default CommentInsert;
