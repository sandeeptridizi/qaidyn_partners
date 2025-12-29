import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-inner">
        {/* HEADER */}
        <header className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Book an Appointment to treat your teeth right now.
          </p>
        </header>

        {/* FORM CARD */}
        <div className="contact-form-card">
          <form className="contact-form">
            {/* FIRST NAME */}
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                className="form-input"
                placeholder="First name"
              />
            </div>

            {/* LAST NAME */}
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                className="form-input"
                placeholder="Last name"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="you@company.com"
              />
            </div>

            {/* PHONE – single full-width field like design */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <div className="phone-wrapper">
                <div className="phone-country">
                  <select className="phone-country-select" defaultValue="au">
                    <option value="au">AU</option>
                    <option value="us">US</option>
                    <option value="in">IN</option>
                  </select>
                </div>
                <div className="phone-divider" />
                <input
                  id="phone"
                  type="tel"
                  className="phone-number-input"
                  placeholder="+61 (555) 000-0000"
                />
              </div>
            </div>

            {/* DATE */}
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Select date
              </label>
              <input id="date" type="date" className="form-input" />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-input form-textarea"
                placeholder="Write your message"
              />
            </div>

            {/* BUTTON */}
            <div className="form-actions">
              <button type="submit" className="primary-btn">
                Get Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
