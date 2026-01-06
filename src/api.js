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

const displayArticle = (article_id) => {
  return fetch(`${API_URL}/articles/${article_id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.article;
    });
};

export { getArticles, displayArticle };
