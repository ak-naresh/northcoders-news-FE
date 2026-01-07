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

export { getArticles, getArticle, getComments };
