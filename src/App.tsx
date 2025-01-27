import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Favorites from "./component/Favorites/Favorites.jsx";
import Blogs from "./component/Blog/Blogs.jsx";
import Store from "./component/Store/Store.js";
import AboutusPage from "./component/AboutusPage/AboutusPage.jsx";
import Services from "./component/Services/Services.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
};

export default App;
