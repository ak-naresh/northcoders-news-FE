import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li key={article.article_id} className="articlePreview">
      <img src={article.article_img_url} alt={article.title} />
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>Published on: {new Date(article.created_at).toLocaleDateString()}</p>
      <p>Author: {article.author}</p>
      <p>
        Topic: {article.topic} - Votes: {article.votes} - Comments:{" "}
        {article.comment_count}
      </p>
      <hr />
    </li>
  );
}

export default ArticleCard;
