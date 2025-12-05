import React from "react";
import "./Promotions.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";  

// PROMOTIONS IMAGES
import heroImg from "../../assets/promotions/image 3.png";
import featureImg from "../../assets/promotions/Group 1304.png";
import australiaImg from "../../assets/promotions/Australia.png";
import australiaFlag from "../../assets/promotions/Australiaflag.png";
import ctaImg from "../../assets/promotions/freepik--Laptop--inject-23.png";

import Icon1 from "../../assets/AboutUs/aboutIcon.png";
import Icon4 from "../../assets/AboutUs/aboutIcon4.png";
import Icon2 from "../../assets/AboutUs/aboutIcon2.png";
import Icon3 from "../../assets/AboutUs/aboutIcon3.png";

import walmartLogo from "../../assets/walmart.png";

const companyLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    alt: "Airbnb",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    alt: "HubSpot",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    alt: "Microsoft",
  },
  { src: walmartLogo, alt: "Walmart" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
    alt: "FedEx",
  },
];

const Promotions = () => {
  return (
    <div className="promotions-page">
      <header className="header">
        <Navbar />
      </header>

      <main className="promotions-main">
        {/* HERO */}
        <section className="promotions-hero">
          <div className="promotions-hero-inner">
            <div className="promotions-hero-left">
              <h1 className="promotions-hero-heading">
                Lorem Ipsum Content
                <br />
                is dummy
              </h1>
              <p className="promotions-hero-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat.
              </p>
              <button className="promotions-btn-primary">Get Started</button>
            </div>
            <div className="promotions-hero-right">
              <img
                src={heroImg}
                alt="Promotions hero"
                className="promotions-hero-image"
              />
            </div>
          </div>
        </section>

        {/* SUCCESS + PROCESS SECTION (COPIED FROM ABOUT PAGE) */}
        <section className="success-process-section">
          <div className="success-left">
            <div>
              <h2 className="success-title">Our 10 years of Success</h2>
              <p className="success-sub">
                With our super powers we have reached this
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <img src={Icon1} alt="" />
                <div className="stat-text">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Employees working</div>
                </div>
              </div>

              <div className="stat-item">
                <div>
                  <img src={Icon4} alt="" />
                </div>
                <div className="stat-text">
                  <div className="stat-number">2 Million</div>
                  <div className="stat-label">Data Stored in Cloud</div>
                </div>
              </div>

              <div className="stat-item">
                <div>
                  <img src={Icon2} alt="" />
                </div>
                <div className="stat-text">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>

              <div className="stat-item">
                <div>
                  <img src={Icon3} alt="" />
                </div>
                <div className="stat-text">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE BLOCK */}
        <section className="promotions-feature">
          <div className="promotions-feature-inner">
            <div className="promotions-feature-left">
              <img
                src={featureImg}
                alt="Feature"
                className="promotions-feature-image"
              />
            </div>
            <div className="promotions-feature-right">
              <h2 className="promotions-feature-heading">
                Lorem Ipsum Content
                <br />
                is dummy text
              </h2>
              <p className="promotions-feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar, sapien ac facilisis gravida, velit arcu consequat.
              </p>
              <ul className="promotions-feature-list">
                <li>Lorem ipsum content.</li>
                <li>Lorem ipsum content</li>
                <li>Lorem ipsum Content</li>
                <li>Lorem ipsum Content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AUSTRALIA MAP + HEADING + FLAG */}
        <section className="promotions-map-section">
          <div className="promotions-map-wrapper">
            <div className="promotions-map-heading">
              <h2 className="promotions-map-title">
                Huge Australia Network of
              </h2>
              <p className="promotions-map-title-accent">Qaidyn Partners</p>
            </div>

            <p className="promotions-map-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pulvinar, sapien ac facilisis gravida, velit arcu.
            </p>

            <div className="promotions-map-inner">
              <img
                src={australiaImg}
                alt="Australia map"
                className="promotions-map-image"
              />

              <div className="promotions-map-flag-wrap">
                <img
                  src={australiaFlag}
                  alt="Australia flag"
                  className="promotions-map-flag"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SCROLLING LOGOS – AFTER MAP */}
        <section className="logos-section">
          <div className="promotions-container-full">
            <div className="logos-container">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="logo-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="promotions-cta-banner">
          <div className="promotions-cta-inner">
            <div className="promotions-cta-text">
              <h2 className="promotions-cta-heading">
                Lorem Ipsum content is
                <br />
                dummy text
              </h2>
              <p className="promotions-cta-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <button className="promotions-cta-btn">Know more</button>
            </div>
            <div className="promotions-cta-image-wrap">
              <img
                src={ctaImg}
                alt="CTA illustration"
                className="promotions-cta-image"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Promotions;
