import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailedMeal from "./pages/DetailedMeal";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contanct";

function App() {
  const [isDark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  const [favorites, setFavorites] = useState(() => {
    const savedItems = localStorage.getItem("favorites");
    return savedItems !== null ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [favorites,isDark]);
  return (
    <main className={`outer-container ${!isDark && "main-bg-dark"}`}>
      <div className="inner-container">
        <Navbar isDark={isDark} setDark={setDark} favorites={favorites} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes  />} />
          <Route
            path="/meal/:mealName"
            element={
              <DetailedMeal favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </main>
  );
}

export default App;
