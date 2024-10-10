import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        dataToShow.map((meal) => {
          return (
            <div key={meal?.idMeal} className="meal-card">
              <img
                src={meal.strMealThumb}
                className="meals-img"
                alt={meal?.strMeal}
              />

              <div className="meal-details-wrapper">
                <h3 className="meal-title">{meal?.strMeal}</h3>
                <NavLink className="meal-link" to={`/meal/${meal?.strMeal}`}>
                  View More Details
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
