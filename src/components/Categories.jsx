import React from "react";
import "../css/recipes.css";

function Categories({ categories, onUpdate,selectedCategory }) {
  return (
    <article className="categories-wrapper">
      {categories &&
        categories.map((category) => {
          const isActive = category.strCategory === selectedCategory;
          return (
            <label
              key={category.idCategory}
              htmlFor={category.idCategory}
              className={`category-item ${isActive && "active-category"}`}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategoryDescription}
                className="category-img"
              />
              {category.strCategory}
              <input
                type="radio"
                name="category"
                value={category.strCategory}
                id={category.idCategory}
                checked={category.strCategory === selectedCategory}
                onChange={onUpdate}
                className="category-input"
              />
            </label>
          );
        })}
    </article>
  );
}

export default Categories;
