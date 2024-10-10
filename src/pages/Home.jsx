import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

import "../css/home.css";

function Home() {
  return (
    <section className="home-wrapper">
      <div className="home-text-container">
        <h1 className="home-title">Now You Can Cook!</h1>
        <p className="home-parag">
          Explore a variety of recipes from categories like Beef, Chicken, and
          Desserts. Find detailed instructions and ingredients for each meal.
          Start cooking with ease and discover new dishes to try!
        </p>
      </div>

      <NavLink className="home-cta" to="/recipes">
        Explore Recipes
        <ArrowForwardIcon fontSize="large" className="home-icon" />
      </NavLink>
      <div className="overlay"></div>
    </section>
  );
}

export default Home;
