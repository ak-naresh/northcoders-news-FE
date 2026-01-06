import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <h1>Articles </h1>
        <p>(click title to view Article)</p>

        {articles.map((article) => {
          return (
            <ul key={article.article_id}>
              <img src={article.article_img_url} alt={article.title} />
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <p>Author: {article.author}</p>
              <p>
                Published on:
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
              <hr />
            </ul>
          );
        })}
      </div>
    );
}

export default ArticlesList;
