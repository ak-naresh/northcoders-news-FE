//BE Render URL
const API_URL = "https://aknaresh-ncnews.onrender.com/api";

const getArticles = () => {
  return fetch(`${API_URL}/articles`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.articles;
    });
};

const getArticle = (article_id) => {
  return fetch(`${API_URL}/articles/${article_id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.article;
    });
};

const getComments = (article_id) => {
  return fetch(`${API_URL}/articles/${article_id}/comments`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.comments;
    });
};

const patchArticleVotes = (article_id, inc_votes) => {
  return fetch(`${API_URL}/articles/${article_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.article;
    });
};

const postArticleComment = (article_id, commentData) => {
  return fetch(`${API_URL}/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.comment;
    });
};

export {
  getArticles,
  getArticle,
  getComments,
  patchArticleVotes,
  postArticleComment,
};
