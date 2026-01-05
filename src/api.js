import axios from "axios";

//BE Render URL
const api = axios.create({
  baseURL: "https://aknaresh-ncnews.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export default api;
