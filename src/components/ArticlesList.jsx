import { useState, useEffect } from "react";

import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Articles could not be loaded. Please try again!");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  return (
    <div>
      <h1>Articles </h1> <h4>(click title to view Article)</h4>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
