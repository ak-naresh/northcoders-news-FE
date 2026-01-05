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

export { getArticles };
