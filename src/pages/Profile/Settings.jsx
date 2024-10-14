import React from "react";
import soon from "../../assets/images/custom.webp";

function Settings() {
  return (
    <article className="custom-meals">
      <div className="custom-text">
        <h2 className="custom-title">Manage Your Information</h2>
        <p className="custom-parag">
          Personalize your profile as you see fit!{" "}
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
  );
}

export default Settings;
