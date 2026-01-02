import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import HomeFooter from "../../components/Footer1/footerHome.jsx";

import timeIcon from "../../assets/time 1.png";
import phoneIcon from "../../assets/live-chat 1.png";
import emailIcon from "../../assets/group.png";
import pinIcon from "../../assets/pin 1.png";


const ContactPage = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  const faqs = [
    {
      question: "What services does Qaidyn provide?",
      answer:
        "We offer a full range of IT solutions including Managed IT Services, Managed Security Services, Cloud & Infrastructure Support, Data Protection, Recovery Services, and Security Assessments & Compliance."
    },
    {
      question: "How do Managed IT Services benefit my business?",
      answer:
        "We provide 24/7 support with fast response times, ensuring minimal downtime and smooth operations."
    },
    {
      question: "Do you provide customized IT solutions?",
      answer:
        "Yes, we design tailored IT solutions based on your business goals, budget, and technical needs."
    },
    {
      question: "How secure is my company’s data?",
      answer:
        "We follow industry standards and compliance requirements to ensure maximum data security."
    }
  ];

  return (
    <div className="contact-page-container">
      <header className="header">
        <Navbar />
      </header>
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <span className="contact-hero-line"></span>
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Have a question or need support? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container-full">
          <div className="contact-grid">

            <div className="contact-info-column">

              <div className="contact-map-card">
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835608409145!2d144.95373531550444!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c3a64c207%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635745994419"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Office Location"
  />
                <div className="contact-map-address">
                  <div className="contact-map-icon">
  <img src={pinIcon} alt="Location pin" />
</div>

                  <div className="contact-map-text">
                    <h4>Office Address</h4>
                    <p>470 St Kilda Road, Melbourne, Vic 3004</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon timing-icon">
                  <img src={timeIcon} alt="Office Timings" />
                </div>
                <div className="contact-info-text">
                  <h3>Office Timings</h3>
                  <p>Monday - Friday (9:00am to 5pm)</p>
                  <p>Saturday & Sunday (Closed)</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon phone-icon">
                  <img src={emailIcon} alt="Phone Number" />
                </div>
                <div className="contact-info-text">
                  <h3>Phone Number</h3>
                  <p>0900-78601</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon email-icon">
                  <img src={phoneIcon} alt="Email" />
                </div>
                <div className="contact-info-text">
                  <h3>Email</h3>
                  <p>info@qaidyn.com</p>
                </div>
              </div>

            </div>

            <div className="contact-form-column">
              <form className="contact-form-wrapper" onSubmit={handleSubmit}>

                <div className="form-row">
                  <div className="form-group-half">
                    <label>First name</label>
                    <input type="text" placeholder="First name" required />
                  </div>
                  <div className="form-group-half">
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@company.com" required />
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
                  <label>Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..." />
                </div>

                <button type="submit" className="btn-submit">
                  Book an appointment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-full">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Everything you need to know—clear, simple, and helpful.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <div className="faq-toggle">
                    {openFAQ === index ? '−' : '+'}
                  </div>
                </div>
                <div className={`faq-answer ${openFAQ === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default ContactPage;
