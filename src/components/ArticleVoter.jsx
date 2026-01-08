import { useState, useEffect } from "react";
import { getArticle, patchArticleVotes } from "../api";

function ArticleVoter({ article_id }) {
  const [votes, setVoteCount] = useState(0);
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
    patchArticleVotes(article_id, increment).catch((error) => {
      setVoteCount((currentVoteCount) => currentVoteCount - increment);
      setError("Vote was not received. Please try again!");
    });
  };

  return (
    <div>
      <button onClick={() => handleVote(1)}>⬆️ </button>
      <h4>Article Votes: {votes} (click arrow to vote)</h4>
      <button onClick={() => handleVote(-1)}>⬇️ </button>
    </div>
  );
}

export default ArticleVoter;
