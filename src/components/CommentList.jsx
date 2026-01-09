import { useState, useEffect } from "react";

import { getComments } from "../api";
import CommentCard from "./CommentCard";
import CommentInsert from "./CommentInsert";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComments(article_id)
      .then((CommentList) => {
        setComments(CommentList);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Comments could not be loaded. Please try again!");
        setIsLoading(false);
      });
  }, [article_id]);

  const handleDeleteComment = (comment_id) => {
    setComments((currentComments) => {
      return currentComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
  };

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  return (
    <div>
      <h2 className="comments-header"> Comments ({comments.length}):</h2>
      <CommentInsert article_id={article_id} setComments={setComments} />
      <ol>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          );
        })}
      </ol>
      <hr />
    </div>
  );
}

export default CommentList;
