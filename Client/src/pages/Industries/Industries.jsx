import React from "react";
import "./Industries.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";  

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      icon: icon1,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Finance and Professional Services",
      icon: icon2,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Education",
      icon: icon3,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Manufacturing",
      icon: icon4,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Logistics",
      icon: icon5,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Retail",
      icon: icon6,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "Software Companies",
      icon: icon7,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
    {
      title: "E-Commerce",
      icon: icon8,
      description:
        "Lorem ipsum content is the dummy text which appears for the website site formation purpose.",
    },
  ];

  const coreServices = [
    {
      title: "Managed IT Services",
      icon: service1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida.",
    },
    {
      title: "Managed Security Services",
      icon: service2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida.",
    },
    {
      title: "Cloud and Infrastructure services",
      icon: service3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida.",
    },
    {
      title: "Security Assessments and compliance",
      icon: service4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar, sapien ac facilisis gravida.",
    },
  ];

  return (
    <div className="industries-page">
      <header className="industries-header">
        <Navbar />
      </header>

      <main className="industries-main">
        {/* Hero */}
        <section className="industries-hero">
          <h1 className="industries-title">Serving Industries</h1>
          <p className="industries-subtitle">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </section>

        {/* 8 industry cards */}
        <section className="industries-section">
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article className="industries-card" key={index}>
                <div className="industries-icon-wrap">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className="industries-icon"
                  />
                </div>
                <h3 className="industries-card-title">{industry.title}</h3>
                <p className="industries-card-text">{industry.description}</p>
                <button className="industries-link">
                  <span>See Explained</span>
                  <span className="industries-link-arrow">→</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* core services */}
        <section className="core-services-section">
  <h2 className="core-services-title">Our Core services</h2>

  <div className="core-services-grid">
    {coreServices.map((service, index) => (
      <article className="core-service-card" key={index}>
        <div className="core-service-header">
          <div className="core-service-icon-wrap">
            <img
              src={service.icon}
              alt={service.title}
              className="core-service-icon"
            />
          </div>
          <h3 className="core-service-name">{service.title}</h3>
        </div>

        <p className="core-service-text">{service.description}</p>

        <button className="core-service-link">
          <span>Learn More</span>
          <span className="core-service-link-arrow">→</span>
        </button>
      </article>
    ))}
  </div>
</section>


        {/* text + consultation */}
        <section className="content-consult-section">
          <div className="content-consult-left">
            <h2 className="content-title">
              Lorem Ipsum Content Is The Dummy Text
            </h2>
            <p className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pulvinar, sapien ac facilisis gravida, velit arcu consequat.
            </p>
            <button className="content-btn">
              <span>Learn More</span>
              <span className="content-btn-arrow">→</span>
            </button>
          </div>
          <div className="content-consult-right">
            <div className="consult-card">
              <h3 className="consult-title">Get Consultation</h3>
              <form className="consult-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="consult-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="consult-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="consult-input"
                />
                <button type="submit" className="consult-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* bottom CTA */}
        <section className="industries-cta">
          <div className="industries-cta-inner">
            <div className="industries-cta-text">
              <h3 className="industries-cta-title">
                Lorem Ipsum content is dummy text
              </h3>
              <p className="industries-cta-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                consectetur adipiscing elit. Fusce.
              </p>
            </div>
            <div className="industries-cta-actions">
              <button className="cta-primary">Get Started</button>
              <button className="cta-secondary">Learn more</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
