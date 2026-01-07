import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { displayArticle } from "../api";

function IndividualArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Extracted URLarticle_id to fetch article data
  useEffect(() => {
    displayArticle(article_id).then((article) => {
      setArticle(article);
      return setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  if (isLoading === false)
    return (
      <div>
        <h2>{article.title}</h2>
        <hr></hr>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>
          Topic: {article.topic} - Author: {article.author} - Published on:{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>
      </div>
    );
}

export default IndividualArticle;
