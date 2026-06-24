import React from "react";

import LandPage from "./LandPage/LandPage";
import Products from "./Products/Products";
import Scroller from "./Scroller/Scroller";
import Ingred from "./Ingredients/Ingred";
import Contact from "./Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="web_container">
      <LandPage />
      <Products />
      <Scroller />
      <Ingred />
      <Contact />
    </div>
  );
};

export default App;
