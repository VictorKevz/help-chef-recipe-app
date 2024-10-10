import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import DropDown from "../components/DropDown";
import "../css/recipes.css";
import Categories from "../components/Categories";
import Meals from "../components/Meals";

function Recipes() {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const updateCategory = (e) => {
    const { checked, value } = e.target;
    setSelectedCategory(checked ? value : selectedCategory);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch categories data");
        }
        const data = await res.json();
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return (
    <section className="recipe-wrapper">
      <div className="filters-wrapper">
        <Search query={query} setQuery={setQuery} />
        <DropDown sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <section className="categories-meals-wrapper">
        {loading && <p>Fetching data...</p>}
        {error && <p>An error: {error}</p>}
        <Categories
          categories={categories}
          onUpdate={updateCategory}
          selectedCategory={selectedCategory}
        />
        <Meals
          selectedCategory={selectedCategory}
          meals={meals}
          setMeals={setMeals}
          query={query}
        />
      </section>
    </section>
  );
}

export default Recipes;
