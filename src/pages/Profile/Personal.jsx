import React from 'react'
import soon from "../../assets/images/custom.webp";

function Personal() {
  return (
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
  )
}

export default Personal