import CommentDelete from "./CommentDelete";

function CommentCard({ comment, onDelete }) {
  const currentUser = "grumpy19"; //hardcoded username for testing

  return (
    <li className="comment">
      <h3>{comment.body} </h3>
      <h5>
        Published on: {new Date(comment.created_at).toLocaleDateString()} ||
        Author: {comment.author} || Votes: {comment.votes}
        <br />
        <br />
      </h5>
      {comment.author === currentUser && (
        <CommentDelete comment_id={comment.comment_id} onDelete={onDelete} />
      )}
    </li>
  );
}

export default CommentCard;
