import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticle } from "../api";
import CommentList from "./CommentList";
import ArticleVoter from "./ArticleVoter";

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
      <ArticleVoter article_id={article.article_id} />
      <hr />
      <CommentList article_id={article.article_id} />
    </div>
  );
}

export default ArticlePage;
