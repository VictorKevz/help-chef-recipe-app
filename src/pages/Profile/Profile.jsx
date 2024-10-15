import React, { useState } from "react";
import "../../css/favorites.css";
import chefImg from "../../assets/images/chef.webp";

import Favorites from "./Favorites";
import Personal from "./Personal";
import Settings from "./Settings";

function Profile({ favorites, setFavorites,isDark }) {
  const [selectedTab, setSelectedTab] = useState("favorites");
  const inputsData = [
    { id: 0, label: "Saved", value: "favorites" },
    { id: 1, label: "Personal", value: "personal" },
    { id: 2, label: "Settings", value: "settings" },
  ];
  const handleChange = (e) => {
    const { checked, value } = e.target;
    setSelectedTab(checked ? value : "favorites");
  };

  return (
    <main className="profile-container">
      <section className="profile-wrapper">
        <aside className={`profile-aside-wrapper ${!isDark && "meal-cards-light"}`}>
          <div className={`profile-details ${!isDark && "meal-cards-light"}`}>
            <div className="dots-wrapper fav">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <img
              src={chefImg}
              alt="An Image of a chef cartoon"
              className="profile-img"
            />
            <h1 className="profile-title">Hello! Foodie!</h1>
            <p className="favorites-parag">
              Browse your favorite recipes all in one place. Create and delete
              your own recipes and manage settings.
            </p>
          </div>
          <div className="aside-navigation-wrapper">
            <div className="inputs-wrapper">
              {inputsData.map((item) => {
                const isActive = selectedTab === item.value;
                return (
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className={`navigation-item ${isActive && "selected"} ${!isDark && "fav-cards-light"}`}
                  >
                    {item.label}
                    <input
                      type="radio"
                      value={item.value}
                      name="tab"
                      checked={selectedTab === item.value}
                      id={item.id}
                      onChange={handleChange}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </aside>
        {selectedTab == "favorites" && <Favorites favorites={favorites} setFavorites={setFavorites} isDark={isDark} />}
        {selectedTab == "personal" && <Personal />}
        {selectedTab == "settings" && <Settings />}
      </section>
      
    </main>
  );
}

export default Profile;
