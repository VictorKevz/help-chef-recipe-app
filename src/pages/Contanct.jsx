import { useState } from "react";
import "../css/contact.css";
import BackspaceIcon from '@mui/icons-material/Backspace';
import SendIcon from '@mui/icons-material/Send';
import Modal from "../components/Modal";
import { motion } from "framer-motion";
import { tabsVariants } from "../variants";


function Contact({isDark}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [formValid, setFormValid] = useState({
    fullName: true,
    email: true,
    message: true,
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clearForm = () => {
    setFormValid({
        fullName: true,
        email: true,
        message: true,
      })
      setFormData({
        fullName: "",
        email: "",
        message: "",
      })
      setShowToast(false)
}
const [showToast,setShowToast] = useState(false)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));

    setFormValid((prevVal) => ({
      ...prevVal,
      [name]: true,
    }));
  };
  const validate = () => {
    const newFormValid = { ...formValid };
    if (!formData.fullName) {
      newFormValid.fullName = false;
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newFormValid.email = false;
    }
    if (!formData.message || formData.message.length <= 6) {
      newFormValid.message = false;
    }
    setFormValid(newFormValid);
    const isValid = Object.values(newFormValid).every(Boolean);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      postData();
      setShowToast(true)
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    }
  };
  const postData = async () => {
    const payload = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_ID,
      template_params: {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
      },
    };
  
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (res.ok) {
        console.log("Feedback successfully sent!");
      } else {
        console.error("Failed to send feedback.");
      }
    } catch (err) {
      console.error("Error sending feedback: ", err);
    }
  };
  return (
    <motion.div 
    className="contact-container"
    variants={tabsVariants}
    initial="hidden"
    animate="visible"
    key={isDark}
    >
      <header className="form-header">
        <h1 className="contanct-title">Get in Touch!</h1>
        <p className="contanct-parag">
          We value your feedback! If you have any suggestions, questions, or
          comments about our recipes or the app, feel free to reach out to us.
          Your input helps us improve and provide a better experience.
        </p>
      </header>
      <form
        className={`form-container ${!isDark && "meal-cards-light"}`}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <fieldset className="field">
          <label htmlFor="fullName">Your Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
            id="fullName"
            placeholder="Victor Kevz"
            className={`form-input ${!formValid.fullName && "error-border"} ${!isDark && "fav-cards-light"}`}
          />
          {!formValid.fullName && (
            <span className="error-message">Can't be blank</span>
          )}
        </fieldset>
        <fieldset className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="abc@123.com"
            className={`form-input ${!formValid.email && "error-border"} ${!isDark && "fav-cards-light"}`}
          />
          {!formValid.email && (
            <span className="error-message">Can't be blank</span>
          )}
        </fieldset>
        <fieldset className="field">
          <label htmlFor="message">Your Message</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            id="message"
            className={`text-area ${!formValid.message && "error-border"} ${!isDark && "fav-cards-light"}`}
            rows={6}
          />
          {!formValid.message && (
            <span className="error-message">Can't be blank</span>
          )}
        </fieldset>
        <fieldset className="form-btn-field">
        <button type="button" className="submit-btn clear" onClick={clearForm}>
          Clear <BackspaceIcon fontSize="large" className="clear-icon"/>
        </button> 
        <button type="submit" className="submit-btn send">
          Send <SendIcon fontSize="large" className="send-icon"/>
        </button>
        </fieldset>
       
      </form>
      {showToast && <Modal showToast={showToast} setShowToast={setShowToast}/>}
    </motion.div>
  );
}

export default Contact;
