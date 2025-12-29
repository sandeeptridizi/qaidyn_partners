import React, { useEffect } from "react";
import ContactForm from "../../pages/ContactForm/ContactForm.jsx";
import "./ContactModal.css";
const ContactModal = ({ open, onClose }) => {
    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";  
    } else {
      document.body.style.overflow = "auto";    
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="contact-modal-close" onClick={onClose}>
          ×
        </button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
