import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { mealCardVariants } from "../variants";
import { motion } from "framer-motion";
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
  const dataToShow = showAllMeals ? filteredData : filteredData.slice(0, 9);

  return (
    <article className="meals-wrapper">
      {loading && <p>Fetching data...</p>}
      {error && <p>An error: {error}</p>}
      {meals &&
        dataToShow.map((meal,i) => {
          return (
            <motion.div 
            key={meal?.idMeal} 
            variants={mealCardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            className="meal-card">
              <div className="meals-image-wrapper">
                <img
                  src={meal.strMealThumb}
                  className="meals-img"
                  alt={meal?.strMeal}
                />
              </div>

              <h3 className="meal-title">{meal?.strMeal}</h3>

              <div className="meal-like-link-wrapper">
                <NavLink className="meal-link" to={`/meal/${meal?.strMeal}`}>
                  Learn More <LaunchIcon fontSize="large" />
                </NavLink>
              </div>
            </motion.div>
          );
        })}
      {dataToShow?.length > 7 && (
        <button
          type="button"
          className="toggle-meals-btn"
          onClick={() => setShowAllMeals(!showAllMeals)}
        >
          {showAllMeals ? "Collapse Meals" : "Show All Meals"}
        </button>
      )}
    </article>
  );
}

export default Meals;
