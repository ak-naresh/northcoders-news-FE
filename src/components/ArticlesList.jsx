import { useState, useEffect } from "react";
import { getArticles } from "../api";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading === false)
    return (
      <div>
        <h2>All Articles</h2>
        {articles.map((article) => {
          return (
            <div>
              <img src={article.article_img_url} alt={article.title} />
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>
                Published on:
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
              <p>_______________________</p>
            </div>
          );
        })}
      </div>
    );
}

export default ArticlesList;
