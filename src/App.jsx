import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import IndividualArticle from "./components/IndividualArticle";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
