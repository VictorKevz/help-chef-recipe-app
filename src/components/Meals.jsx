import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "../css/meals.css";
function Meals({ selectedCategory, meals, setMeals, query }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAllMeals, setShowAllMeals] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch meals data");
        }
        const data = await res.json();
        setMeals(data.meals);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMeals();
  }, [selectedCategory]);
  const filteredData = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(query)
  );
  const dataToShow = showAllMeals ? filteredData : filteredData.slice(0, 8);
  return (
    <article className="meals-wrapper">
      {loading && <p>Fetching data...</p>}
      {error && <p>An error: {error}</p>}
      {meals &&
        dataToShow.map((meal) => {
          return (
            <div key={meal?.idMeal} className="meal-card">
              <div className="meals-image-wrapper">
                <img
                  src={meal.strMealThumb}
                  className="meals-img"
                  alt={meal?.strMeal}
                />
              </div>

              <h3 className="meal-title">{meal?.strMeal}</h3>

              <div className="meal-like-link-wrapper">
                <button
                  type="button"
                  className={`meal-like-btn`}
                >
                  <FavoriteBorderIcon
                    fontSize="large"
                    className={`meal-like-icon`}
                  />
                </button>
                <NavLink className="meal-link" to={`/meal/${meal?.strMeal}`}>
                  <LaunchIcon fontSize="large" />
                </NavLink>
              </div>
            </div>
          );
        })}
      <button
        type="button"
        className="toggle-meals-btn"
        onClick={() => setShowAllMeals(!showAllMeals)}
      >
        {showAllMeals ? "Collapse Meals" : "Show All Meals"}
      </button>
    </article>
  );
}

export default Meals;
