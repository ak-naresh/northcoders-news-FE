import { useState } from "react";
import { deleteArticleComment } from "../api";

function CommentDelete({ comment_id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    setError(null);

    deleteArticleComment(comment_id)
      .then(() => {
        onDelete(comment_id);
      })
      .catch((error) => {
        setError("Failed to delete comment. Please try again.");
        setIsDeleting(false);
      });
  };

  return (
    <div className="comment-delete">
      <button
        onClick={handleDelete}
        className="commentDeleteButton"
        type="delete"
      >
        {"Delete"}
      </button>
    </div>
  );
}

export default CommentDelete;
