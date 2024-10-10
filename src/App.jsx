import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailedMeal from "./pages/DetailedMeal";

function App() {
  const [isDark, setDark] = useState(true);

  return (
    <main className={`outer-container ${!isDark && "main-bg-dark"}`}>
      <div className="inner-container">
        <Navbar isDark={isDark} setDark={setDark} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal/:mealName" element={<DetailedMeal />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;
