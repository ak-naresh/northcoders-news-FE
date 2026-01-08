import { useState, useEffect } from "react";
import { getArticle, patchArticleVotes } from "../api";

function ArticleVoter({ article_id }) {
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setVoteCount(article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  //Count Modifier
  const handleVote = (increment) => {
    setVoteCount((currentVoteCount) => currentVoteCount + increment);

    //Error-handler
    setError(null);
    setIsLoading(true);

    patchArticleVotes(article_id, increment).catch((error) => {
      setVoteCount((currentVoteCount) => currentVoteCount - increment);
      setError("Vote was not received. Please try again!");
    });
  };

  console.log("VoteCount:", voteCount);

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
