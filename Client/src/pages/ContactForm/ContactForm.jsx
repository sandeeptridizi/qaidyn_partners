import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-inner">
        <header className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Book an Appointment to treat your teeth right now.
          </p>
        </header>

        <div className="contact-form-card">
          <form className="contact-form">
<div className="form-group">
  <label htmlFor="firstName" className="form-label">
    First name
  </label>
  <input
    id="firstName"
    name="firstName"
    type="text"
    className="form-input"
    placeholder="First name"
    autoComplete="given-name"
    required
  />
</div>

<div className="form-group">
  <label htmlFor="lastName" className="form-label">
    Last name
  </label>
  <input
    id="lastName"
    name="lastName"
    type="text"
    className="form-input"
    placeholder="Last name"
    autoComplete="family-name"
    required
  />
</div>


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

            <div className="form-group">
                  <label>Phone number</label>
                  <div className="phone-input-wrapper">
                    <select className="country-code">
                      <option>AU</option>
                      <option>UK</option>
                      <option>US</option>
                      <option>IN</option>
                    </select>
                    <input type="tel" placeholder="+61 (555) 000-0000" />
                  </div>
                </div>

                <div className="form-group">
  <label>Select date</label>

  <div className="date-input-wrapper">
    <input
      type="text"
      className="date-display"
      placeholder="December - 02 - 2022"
      readOnly
    />

    <input
      type="date"
      className="date-picker"
      onChange={(e) => {
        const date = new Date(e.target.value);
        const formatted = date.toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric"
        }).replace(",", " -");
        e.target.previousSibling.value = formatted;
      }}
      required
    />
  </div>
</div>

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
