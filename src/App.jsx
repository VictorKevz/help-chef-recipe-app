import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailedMeal from "./pages/DetailedMeal";
import Contact from "./pages/Contanct";
import Profile from "./pages/Profile/Profile";

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
    <main className={`outer-container ${!isDark && "main-bg-light"}`}>
      <div className="inner-container">
        <Navbar isDark={isDark} setDark={setDark} favorites={favorites} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes isDark={isDark} />} />
          <Route
            path="/meal/:mealName"
            element={
              <DetailedMeal favorites={favorites} setFavorites={setFavorites} isDark={isDark} />
            }
          />
          <Route
            path="/profile"
            element={<Profile favorites={favorites} setFavorites={setFavorites} isDark={isDark}/>}
          />
          <Route
            path="/contact"
            element={<Contact isDark={isDark}/>}
          />
        </Routes>
      </div>
    </main>
  );
}

export default App;
