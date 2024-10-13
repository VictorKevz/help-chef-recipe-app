import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function FormToast({ showToast, setShowToast }) {
  const handleClose = (_,reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowToast(false);
  };

  return (
    <div className="toast-wrapper">
      <Snackbar
        showToast={showToast}
        autoHideDuration={60000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Thank You! Your message has been sent!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default FormToast;
