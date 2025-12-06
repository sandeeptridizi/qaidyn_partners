import React, { useState } from "react";
import "./CaseStudies.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import heroImg from "../../assets/casestudies/freepik--Laptop--inject-23.png";
import testimonialImg from "../../assets/casestudies/Image (1).png";
import ctaImg from "../../assets/casestudies/image 3.png";
import walmartLogo from "../../assets/walmart.png";
import feature1 from "../../assets/casestudies/Base feature icon.png";
import feature2 from "../../assets/casestudies/Base feature icon (1).png";
import feature3 from "../../assets/casestudies/Base feature icon (2).png";
import feature4 from "../../assets/casestudies/Base feature icon (3).png";
import feature5 from "../../assets/casestudies/Group.png";
import starsImg from "../../assets/services/Stars.png";
import quoteIcon from "../../assets/services/Quotation.png";
import timelineImg from "../../assets/casestudies/Vector 2.png";
import step2Img from "../../assets/casestudies/Frame 47.png";
import step3Img from "../../assets/casestudies/Frame 48.png";
import step4Img from "../../assets/casestudies/Frame 49.png";


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

const testimonials = [
  {
    name: "Robert Fox",
    role: "Business Man",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien ac facilisis gravida.",
    avatar: testimonialImg,
  },
  {
    name: "Jane Cooper",
    role: "IT Director",
    text:
      "Mauris non tempor quam, et gravida sapien. Integer at sapien sit amet leo accumsan placerat.",
    avatar: testimonialImg,
  },
  {
    name: "Guy Hawkins",
    role: "CTO",
    text:
      "Suspendisse potenti. Duis id urna nec justo vestibulum placerat vel sit amet sem.",
    avatar: testimonialImg,
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const active = testimonials[activeIndex];

  return (
    <div className="cs-page">
      <Navbar />

      <section className="cs-hero">
        <div className="cs-container cs-hero-inner">
          <div className="cs-hero-left">
            <h1>
              Want anything to be easy with <span>NetONE.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using
              NetONE. Discover interesting features from us.
            </p>
            <button className="cs-btn-primary">Get Started</button>
          </div>

          <div className="cs-hero-right">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </section>
<section className="cs-how">
  <h2>How It Works</h2>

  <div className="cs-timeline">
    {/* blue rectangle line image */}
    <img src={timelineImg} alt="" className="cs-timeline-bg" />

    <div className="cs-steps">
      {/* STEP 1 – keep as is (text + pill + dot) */}
      <div className="cs-step cs-step-1">
        <div className="cs-num">1</div>

        <p className="cs-step-desc-top">
          Cyber safety, crime prevention,
          <br />
          defense, or enterprise security.
        </p>

        <div className="cs-pill cs-pill-top">Select Your Focus</div>

        <div className="cs-dot" />
      </div>

      {/* STEP 2 – use Frame 47.png */}
      <div className="cs-step cs-step-2">
        <div className="cs-num">2</div>
        <img src={step2Img} alt="Get connected with cybersecurity & defense experts" className="cs-step-img" />
      </div>

      {/* STEP 3 – use Frame 48.png */}
      <div className="cs-step cs-step-3">
        <div className="cs-num">3</div>
        <img src={step3Img} alt="Book Advisory – chat, video consultation, or workshops" className="cs-step-img" />
      </div>

      {/* STEP 4 – use Frame 49.png */}
      <div className="cs-step cs-step-4">
        <img src={step4Img} alt="Stay Protected – apply strategies for safety" className="cs-step-img" />
        <div className="cs-num cs-num-bottom">4</div>
      </div>
    </div>
  </div>
</section>



    <section className="cs-services">
        <div className="cs-container">
          {/* TITLE */}
          <h2 className="cs-services-title">Our Core Services</h2>

          <p className="cs-sub">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>

          {/* FULL WRAPPER – two rows */}
          <div className="cs-services-wrapper">
            {/* TOP ROW — 3 items */}
            <div className="cs-service-row">
              <div className="cs-service-item">
                <img
                  src={feature1}
                  alt="Managed IT Services"
                  className="cs-service-icon"
                />
                <h3>Managed IT Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>

              <div className="cs-service-item">
                <img
                  src={feature2}
                  alt="Managed Security Services"
                  className="cs-service-icon"
                />
                <h3>Managed Security Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>

              <div className="cs-service-item">
                <img
                  src={feature3}
                  alt="Cloud Infrastructure Services"
                  className="cs-service-icon"
                />
                <h3>Cloud and Infrastructure Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>

            {/* BOTTOM ROW — 2 items */}
            <div className="cs-service-row bottom">
              <div className="cs-service-item">
                <img
                  src={feature4}
                  alt="Security Assessments"
                  className="cs-service-icon"
                />
                <h3>Security Assessments and compliance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>

              <div className="cs-service-item">
                <img
                  src={feature5}
                  alt="Data Protection"
                  className="cs-service-icon"
                />
                <h3>Data Protection and Recovery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING LOGO STRIP */}
      <section className="cs-logos-section">
  <div className="cs-logos-wrapper">
    <div className="cs-logos-container">
      {[...companyLogos, ...companyLogos].map((logo, index) => (
        <div key={index} className="cs-logo-item">
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="cs-testimonial">
  <div className="cs-testimonial-inner">

    {/* LEFT SIDE */}
    <div className="cs-testimonial-left">
      <h2 className="cs-testimonial-title">
        Feedback About Their Experience With Us
      </h2>

      <p className="cs-testimonial-subtitle">
        Read testimonials from our satisfied clients. See how our
        infrastructure services made a difference.
      </p>

      <div className="cs-slider-controls">
        <button className="cs-slider-btn" onClick={handlePrev}>←</button>
        <button className="cs-slider-btn" onClick={handleNext}>→</button>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="cs-testimonial-card">
      <div className="cs-testimonial-image">
        <img src={active.avatar} alt={active.name} />
      </div>

      <div className="cs-testimonial-texts">
        <h3 className="cs-testimonial-name">{active.name}</h3>
        <p className="cs-testimonial-role">{active.role}</p>

        <img
          src={starsImg}
          alt="rating"
          className="cs-testimonial-stars"
        />

        <p className="cs-testimonial-quote">{active.text}</p>
      </div>

      <div className="cs-testimonial-quote-pill">
        <img
          src={quoteIcon}
          alt="quote"
          className="cs-testimonial-quote-icon"
        />
      </div>
    </div>

  </div>
</section>


      <section className="cs-cta">
        <div className="cs-container cs-cta-inner">
          <div className="cs-cta-left">
            <h2>Lorem Ipsum content is dummy text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
            <button className="cs-btn-white">Know more</button>
          </div>

          <div className="cs-cta-right">
            <img src={ctaImg} alt="CTA" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
