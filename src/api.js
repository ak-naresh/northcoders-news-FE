//BE Render URL
const API_URL = "https://aknaresh-ncnews.onrender.com/api";

const getArticles = () =>
  fetch(`${API_URL}/articles`)
    .then((response) => response.json())
    .then((data) => data.articles);

const getArticle = (article_id) =>
  fetch(`${API_URL}/articles/${article_id}`)
    .then((response) => response.json())
    .then((data) => data.article);

const getComments = (article_id) =>
  fetch(`${API_URL}/articles/${article_id}/comments`)
    .then((response) => response.json())
    .then((data) => data.comments);

const patchArticleVotes = (article_id, inc_votes) =>
  fetch(`${API_URL}/articles/${article_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes }),
  })
    .then((response) => response.json())
    .then((data) => data.article);

const postArticleComment = (article_id, commentData) =>
  fetch(`${API_URL}/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => response.json())
    .then((data) => data.comment);

const deleteArticleComment = (comment_id) =>
  fetch(`${API_URL}/comments/${comment_id}`, {
    method: "DELETE",
  });

export {
  getArticles,
  getArticle,
  getComments,
  patchArticleVotes,
  postArticleComment,
  deleteArticleComment,
};
