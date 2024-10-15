import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { mealCardVariants } from "../variants";
import { motion } from "framer-motion";
import "../css/meals.css";
function Meals({ selectedCategory, meals, setMeals, query,currentPageNumber,setCurrentPageNumber }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  

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
  //Pagination Logic
  const pageItems = 6; //Fixed Number of items per page
  const indexOfLastMeal = currentPageNumber * pageItems; // for that specific current page
  const indexOfFirstMeal = indexOfLastMeal - pageItems; // first meal for the current page
  const currentMeals = filteredData.slice(indexOfFirstMeal, indexOfLastMeal); //array with items for the current page
  const totalPages = Math.ceil(filteredData.length / pageItems); //Total num of pages as per array size
  return (
    <article className="meals-wrapper">
      {loading && <p>Fetching data...</p>}
      {error && <p>An error: {error}</p>}
      {currentMeals &&
        currentMeals.map((meal, i) => {
          return (
            <motion.div
              key={meal?.idMeal}
              variants={mealCardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              className="meal-card"
            >
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
      <div className="page-num-wrapper">
        {Array.from({ length: totalPages }, (_, i) => {
          const isActive = currentPageNumber === i + 1;
          return (
            <button
              type="button"
              className={`page-num-btn ${isActive && "current"}`}
              onClick={() => setCurrentPageNumber(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default Meals;
