//BE Render URL
const BASE_URL = "https://aknaresh-ncnews.onrender.com/api";

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.articles;
    });
};
