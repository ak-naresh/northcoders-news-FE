import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from ".Header";
import Footer from ".Footer";
import ArticlesList from ".ArticlesList";
import IndividualArticle from ".IndividualArticle";

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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
