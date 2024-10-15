import React from "react";
import "../css/categories.css";
import { categoriesVariants, mealCardVariants } from "../variants";
import { motion } from "framer-motion";

function Categories({ categories, onUpdate, selectedCategory,isDark }) {
  return (
    <motion.article 
    className={`categories-wrapper ${!isDark && "meal-cards-light"}`}
    variants={categoriesVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
    >
      {categories &&
        categories.map((category, i) => {
          const isActive = category.strCategory === selectedCategory;
          return (
            <motion.label
              key={category.idCategory}
              htmlFor={category.idCategory}
              
              className={`category-item ${isActive && "active-category"} `}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategoryDescription}
                className={`category-img ${!isDark && "item-light"}`}
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
            </motion.label>
          );
        })}
    </motion.article>
  );
}

export default Categories;
