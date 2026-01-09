import { useState } from "react";
import { patchArticleVotes } from "../api";

function ArticleVoter({ article_id, initialVotes }) {
  const [voteCount, setVoteCount] = useState(initialVotes);
  const [error, setError] = useState(null);

  //Count Modifier
  const handleVote = (increment) => {
    setVoteCount((currentVoteCount) => currentVoteCount + increment);

    //Error-handler
    patchArticleVotes(article_id, increment).catch((error) => {
      setVoteCount((currentVoteCount) => currentVoteCount - increment);
      setError("Vote was not received. Please try again!");
    });
  };

  return (
    <div>
      <button onClick={() => handleVote(1)} className="commentUpVoteButton">
        ⬆️
      </button>
      <h4>Article Votes: {voteCount} (click arrow to vote)</h4>
      <button onClick={() => handleVote(-1)} className="commentDownVoteButton">
        ⬇️
      </button>
    </div>
  );
}

export default ArticleVoter;
