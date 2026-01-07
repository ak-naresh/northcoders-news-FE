import { useState, useEffect } from "react";

import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      return setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2 className="loader">Loading… </h2>;
  }

  return (
    <div>
      <h1>Articles </h1>
      <p>(click title to view Article)</p>

      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
