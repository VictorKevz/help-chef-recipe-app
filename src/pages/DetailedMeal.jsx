import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CategoryIcon from "@mui/icons-material/Category";
import StyleIcon from "@mui/icons-material/Style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../css/detailedMeal.css";
import Instructions from "../components/Instructions";

function DetailedMeal({ setFavorites, favorites }) {
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { mealName } = useParams();
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch a specific meal");
        }
        const data = await res.json();
        setMeal(data.meals[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMeal();
  }, [mealName]);

  const addToFavorites = (currentID) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.idMeal === currentID);
      if (isFavorite) {
        return prevFavorites.filter((meal) => meal.idMeal !== currentID);
      } else {
        return [...prevFavorites, meal];
      }
    });
    console.log(favorites);
  };
  const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);

  const ingredients = [];
  const measures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
    if (measure !== "" && measure !== " " && ingredient && ingredient.trim() !== "") {
      measures.push(`${measure} ${ingredient}`);
    }
  }
  return (
    <section className="meal-wrapper">
      <article className="meal-container">
        {loading && <p>Fetching data...</p>}
        {error && <p>An error: {error}</p>}

        <div className="meal-hero-wrapper">
          <div className="detailed-meal-image-wrapper">
            <img
              src={meal.strMealThumb}
              className="meal-img"
              alt={meal.strMeal}
            />
            <div className="overlay meal"></div>
          </div>
          <div className="meal-hero-text">
            <p className="meal-caption">
              Time to <span className="caption-style">Cook</span>{" "}
            </p>
            <h1 className="meal-detailed-title">{meal.strMeal}</h1>
          </div>
          <NavLink to="/recipes" className="meal-back-btn">
            Go Back
          </NavLink>
          <div className="dots-wrapper">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button
            type="button"
            className={`like-btn`}
            onClick={() => addToFavorites(meal?.idMeal)}
          >
            {isFavorite ? (
              <FavoriteIcon fontSize="large" className={`like-icon`} />
            ) : (
              <FavoriteBorderIcon fontSize="large" className={`like-icon`} />
            )}
          </button>
        </div>
        <ul className="meal-labels">
          <li className="label">
            <TravelExploreIcon fontSize="large" className="tag-icon" />
            {meal?.strArea}
          </li>
          <li className="label">
            <CategoryIcon fontSize="large" className="tag-icon" />
            {meal?.strCategory}
          </li>
          {meal?.strTags && (
            <li className="label">
            <StyleIcon fontSize="large" className="tag-icon" />
            {meal?.strTags}
          </li>
          )}
        </ul>
        <div className="instructions-ingridients-measures-wrapper">
          <Instructions meal={meal} />
          <div className="ingridients-measures-wrapper">
            <div className="ingridients-wrapper">
              <h2 className="ingridient-title">Ingridients</h2>
              <ul className="ingridient-items">
                {ingredients.map((item, i) => (
                  <li key={i} className="ingridient-item">
                    {item}
                  </li>
                ))}
              </ul>
              
            </div>
            <div className="measures-wrapper">
              <h2 className="measures-title">Measures</h2>
              <ul className="measures-items">
                {measures.map((item, i) => (
                  <li key={i} className="measures-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default DetailedMeal;
