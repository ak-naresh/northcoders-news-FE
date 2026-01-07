import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticle, patchArticleVotes } from "../api";
import CommentList from "./CommentList";

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Extracted URLs article_id to fetch article-data
  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      return setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  const handleVote = (increment) => {
    patchArticleVotes(article.article_id, increment).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };

  //console.log(article);
  //console.log(article.votes);

  return (
    <div>
      <h2>
        <u>{article.title}</u>
      </h2>
      <h4>
        Topic: {article.topic} - Author: {article.author} - Published on:{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </h4>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.body}</p>
      <hr />
      <div>
        <button onClick={() => handleVote(1)}>⬆️ </button>
        <h4>Article Votes: {article.votes} (click arrow to vote)</h4>
        <button onClick={() => handleVote(-1)}>⬇️ </button>
      </div>
      <div />
      <hr />
      <CommentList article_id={article.article_id} />
    </div>
  );
}

export default ArticlePage;
