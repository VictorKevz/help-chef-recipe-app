import React from "react";
import "../css/favorites.css";
import chefImg from "../assets/images/chef.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import empty from "../assets/images/empty.webp";
import soon from "../assets/images/custom.webp";

function Favorites({ favorites, setFavorites }) {
  const deleteMeal = (currentID) => {
    setFavorites((prevFavs) => {
      return prevFavs.filter((item) => item.idMeal !== currentID);
    });
  };
  return (
    <section className="favorites-container">
      <section className="favorites-wrapper">
        <header className="favorites-header">
          <img
            src={chefImg}
            alt="An Image of a chef cartoon"
            className="profile-img"
          />
          <h1 className="favorites-title">Hello! Foodie!</h1>
          <p className="favorites-parag">
            Browse your favorite recipes all in one place. Click on a meal to
            view its details, or remove it from your favorites.
          </p>
          <div className="dots-wrapper fav">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="hearts-wrapper">
            <FavoriteIcon className="heart-icon" />
            <FavoriteIcon className="heart-icon" />
            <FavoriteIcon className="heart-icon" />
          </div>
        </header>
        <article className="favorite-items-wrapper">
          {favorites.map((item) => (
            <div key={item?.idMeal} className="favorite-item-card">
              <h2 className="favorite-item-title">{item?.strMeal}</h2>
              <ul className="favorite-labels">
                <li className="favorite-item">{item?.strCategory}</li>
                <li className="favorite-item">{item?.strArea}</li>
              </ul>
              <div className="favorite-image-wrapper">
                <img
                  src={item?.strMealThumb}
                  className="favorite-img"
                  alt={item?.strMeal}
                />
              </div>
              <div className="favorite-link-delete-wrapper">
                <NavLink to={`/meal/${item?.strMeal}`}>
                  <LaunchIcon fontSize="large" className="launch-icon" />
                </NavLink>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteMeal(item?.idMeal)}
                >
                  <DeleteIcon fontSize="large" className="delete-icon" />
                </button>
              </div>
            </div>
          ))}
        </article>
        {favorites.length <= 0 && (
          <article className="empty-favorties">
            <div className="empty-card">
            <h2 className="empty-title">You haven't liked any recipes yet!</h2>
            <p className="empty-parag">
              All the recipes you like will appear here!
            </p>
            <img src={empty} alt="Empty illustration" className="empty-img" />
            <NavLink to={`/recipes`} className="empty-cta">Explore Recipes </NavLink>
            </div>
          </article>
        )}
      </section>
      <article className="custom-meals">
        <div className="custom-text">
          <h2 className="custom-title">Create Your Own Recipes</h2>
          <p className="custom-parag">
            Create, view and edit your own recipes in one place!
          </p>
        </div>

        <div className="custom-image-wrapper">
          <img
            src={soon}
            alt="Comming soon illustration"
            className="custom-img"
          />
        </div>
      </article>
    </section>
  );
}

export default Favorites;
