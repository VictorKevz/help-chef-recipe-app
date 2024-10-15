import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Instructions({ meal,isDark }) {
  const [indexes, setIndexes] = useState({ 0: true });
  const [showAllSteps, setAllSteps] = useState(false);

  const handleClick = (currentIndex) => {
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [currentIndex]: !prevIndexes[currentIndex],
    }));
  };
  const instructions = meal.strInstructions || "";

  const steps = instructions
    .split(/[\.\r\n]+/)
    .map((step) => step.trim())
    .filter((step) => step);
  const dataToshow = showAllSteps ? steps : steps.slice(0, 4);
  return (
    <div className={`instructions-wrapper ${!isDark && "meal-cards-light"}`}>
      <h2 className="steps-title">Instructions</h2>
      <div className="steps-wrapper">
        {dataToshow.map((step, index) => {
          const isActive = indexes[index];
          return (
            <ul key={index} className={`step-items ${!isDark && "items-light"}`}>
              <li className="step-item" onClick={() => handleClick(index)}>
                <h3 className="step-heading">Step {index + 1}</h3>
                <button className="step-btn">
                  {isActive ? (
                    <RemoveIcon fontSize="large" className="steps-icon" />
                  ) : (
                    <AddIcon fontSize="large" className="steps-icon" />
                  )}
                </button>
              </li>
              {isActive && <li className="step-instruction">{step}</li>}
            </ul>
          );
        })}
        <button
          className="instruction-btn"
          type="button"
          onClick={() => setAllSteps(!showAllSteps)}
        >
          {showAllSteps ? "Collapse Steps" : "Show All Steps"}
        </button>
      </div>
    </div>
  );
}

export default Instructions;
