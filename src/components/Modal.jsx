import { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

function Modal({ setShowToast }) {
  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="check-wrapper">
          <CheckIcon fontSize="large" className="check-icon" />
        </div>
        <h2 className="modal-title">Thank you!</h2>
        <p className="modal-parag">Your message has been successfully sent!</p>
        <NavLink to="/recipes" onClick={handleClose} className="modal-link">
          Continue to Recipes
        </NavLink>
      </div>
    </div>
  );
}
export default Modal;
