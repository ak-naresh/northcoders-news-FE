import { useState, useEffect } from "react";

import { getComments } from "../api";
import CommentCard from "./CommentCard";
import CommentInsert from "./CommentInsert";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((CommentList) => {
      setComments(CommentList);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  return (
    <div>
      <h2> Comments ({comments.length}):</h2>
      <CommentInsert article_id={article_id} setComments={setComments} />
      <ol>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ol>
      <hr />
    </div>
  );
}

export default CommentList;
