import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
