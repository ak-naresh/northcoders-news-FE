import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li key={article.article_id} className="articlePreview">
      <img src={article.article_img_url} alt={article.title} />
      <Link to={`/articles/${article.article_id}`}>
        <h2>
          <u>{article.title}</u>
        </h2>
      </Link>

      <p>Author: {article.author}</p>
      <p>Topic: {article.topic} </p>
      <p>
        Published on: {new Date(article.created_at).toLocaleDateString()} -
        Votes: {article.votes} - Comments: {article.comment_count}
      </p>
      <hr />
    </li>
  );
}

export default ArticleCard;
