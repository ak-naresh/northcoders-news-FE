import { useState, useEffect } from "react";
import { displayArticle } from "../api";

function IndividualArticle({ article_id }) {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    displayArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading === false)
    return (
      <div>
        <h3>{article.title}</h3>
        <hr></hr>
        <p>Author: {article.author}</p>
        <p>
          Published on:
          {new Date(article.created_at).toLocaleDateString()}
        </p>
        <img src={article.article_img_url} alt={article.title} />
        <p>
          Topic: {article.topic} - Votes: {article.votes} - Comments:{" "}
          {article.comment_count}
        </p>
      </div>
    );
}

export default IndividualArticle;
