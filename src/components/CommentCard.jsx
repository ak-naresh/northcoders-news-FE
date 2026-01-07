function CommentCard({ comment }) {
  return (
    <li className="comment">
      <p>{comment.body} </p>
      <h5>
        Published on: {new Date(comment.created_at).toLocaleDateString()} ||
        Author: {comment.author} || Votes: {comment.votes}
        <br />
        <br />
      </h5>
    </li>
  );
}

export default CommentCard;
