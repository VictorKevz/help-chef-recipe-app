import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import empty from "../../assets/images/empty.webp";
import { mealCardVariants } from "../../variants";
import { motion } from "framer-motion";

function Favorites({ favorites, setFavorites,isDark }) {
  const deleteMeal = (currentID) => {
    setFavorites((prevFavs) => {
      return prevFavs.filter((item) => item.idMeal !== currentID);
    });
  };
  return (
    <section className="favorite-items-wrapper">
      {favorites.map((item) => (
        <motion.div
          key={item?.idMeal}
          className={`favorite-item-card ${!isDark && "fav-cards-light"}`}
          variants={mealCardVariants}
          initial="hidden"
          animate="visible"
        >
          <article className="favorite-image-details">
            <figure>
              <img
                src={item?.strMealThumb}
                className="favorite-img"
                alt={item?.strMeal}
              />
            </figure>
            <div className="text">
              <h2 className="favorite-item-title">{item?.strMeal}</h2>
              <ul className="favorite-labels">
                <li className={`favorite-item ${!isDark && "meal-cards-light"}`}>{item?.strCategory}</li>
                <li className={`favorite-item ${!isDark && "meal-cards-light"}`}>{item?.strArea}</li>
              </ul>
            </div>
          </article>

          <div className="favorite-link-delete-wrapper">
            <NavLink to={`/meal/${item?.strMeal}`} className="fav-link">
              View <LaunchIcon fontSize="large" className="launch-icon" />
            </NavLink>
            <button
              type="button"
              className="delete-btn"
              onClick={() => deleteMeal(item?.idMeal)}
            >
              Remove <DeleteIcon fontSize="large" className="delete-icon" />
            </button>
          </div>
        </motion.div>
      ))}
      {favorites.length <= 0 && (
        <article className="empty-favorite-wrapper">
          <div className="empty-card">
            <h2 className="empty-title">You haven't liked any recipes yet!</h2>
            <p className="empty-parag">
              All the recipes you like will appear here!
            </p>
            <img src={empty} alt="Empty illustration" className="empty-img" />
            <NavLink to={`/recipes`} className="empty-cta">
              Explore Recipes{" "}
            </NavLink>
          </div>
        </article>
      )}
    </section>
  );
}

export default Favorites;
