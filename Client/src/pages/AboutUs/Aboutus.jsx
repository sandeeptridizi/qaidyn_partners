import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import girlImage from "../../assets/AboutUs/aboutUs1.png";
import rectngleBox from "../../assets/AboutUs/AboutUs2.png";
import aboutLogo from "../../assets/AboutUs/aboutusLogo.png";
import blouBox from "../../assets/AboutUs/aboutusBluebox.png";
import Navbar from "../../components/Navbar/Navbar";
import line1 from "../../assets/AboutUs/aboutLine.png";
import line2 from "../../assets/AboutUs/aboutLine2.png";
import line3 from "../../assets/AboutUs/aboutLine3.png";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Icon1 from "../../assets/AboutUs/aboutIcon.png";
import Icon4 from "../../assets/AboutUs/aboutIcon4.png";
import Icon2 from "../../assets/AboutUs/aboutIcon2.png";
import Icon3 from "../../assets/AboutUs/aboutIcon3.png";
import icon9 from "../../assets/icon9.png";
import icon10 from "../../assets/icon10.png";
import icon11 from "../../assets/icon11.png";
import blueIcon1 from "../../assets/Group 1498.png";
import blueIcon2 from "../../assets/Group 1498 (1).png";
import blueIcon3 from "../../assets/Group 1498 (2).png";

import { useEditMode } from "../../components/context/EditModeContext.jsx";

const AboutPage = ({ onOpenContact }) => {
  const { isEditMode } = useEditMode();

  const [cloudImages, setCloudImages] = useState({
    bgBox: rectngleBox,
    girl: girlImage,
  });

  const [centerImages, setCenterImages] = useState({
    blueBg: blouBox,
    logo: aboutLogo,
  });

  const handleCloudImageChange = (key) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCloudImages((prev) => ({ ...prev, [key]: url }));
  };

  const handleCenterImageChange = (key) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCenterImages((prev) => ({ ...prev, [key]: url }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div
        className="cloud-wrapper"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cloud-left">
          <h1 className="cloud-title">
            Empowering Businesses with Intelligent & <br />
            Secure IT Solutions
          </h1>
          <p className="cloud-desc">
            At Qaidyn, we deliver end-to-end technology services that help
            organizations operate smarter, scale faster, and stay secure. With a
            commitment to excellence and innovation, we support businesses
            across industries with reliable IT management, modern
            infrastructure, and advanced cybersecurity solutions.
          </p>
        </div>

        <div className="cloud-right" contentEditable={false}>
          <img src={cloudImages.bgBox} alt="Background Box" className="bg-box" />
          <img src={cloudImages.girl} alt="Working Girl" className="cloud-image" />

          {isEditMode && (
            <div className="about-image-upload-group">
              <div className="about-image-upload">
                <label className="about-upload-label">
                  Change BG Box Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCloudImageChange("bgBox")}
                  />
                </label>
              </div>
              <div className="about-image-upload">
                <label className="about-upload-label">
                  Change Girl Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCloudImageChange("girl")}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <section
        className="success-process-section"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="success-left">
          <div>
            <h2 className="success-title">Our 10 years of Success</h2>
            <p className="success-sub">
              With our super powers we have reached this
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <img src={Icon1} alt="Employees" />
              <div className="stat-text">
                <div className="stat-number">100+</div>
                <div className="stat-label">Employees working</div>
              </div>
            </div>

            <div className="stat-item">
              <img src={Icon4} alt="Cloud Data" />
              <div className="stat-text">
                <div className="stat-number">2 Million</div>
                <div className="stat-label">Data Stored in Cloud</div>
              </div>
            </div>

            <div className="stat-item">
              <img src={Icon2} alt="Countries" />
              <div className="stat-text">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>

            <div className="stat-item">
              <img src={Icon3} alt="Clients" />
              <div className="stat-text">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="process-content">
          <div className="process-left">
            <h2 className="process-title">Our Process</h2>
            <p className="process-description">
              A streamlined, transparent, and efficient workflow designed to
              deliver reliable IT solutions with speed, precision, and
              measurable outcomes.
            </p>
            <button
              className="btn-primary"
              onClick={() => onOpenContact && onOpenContact()}
            >
              Get Started
            </button>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon-wrapper">
                <img src={icon9} alt="Discover & Analyze" className="step-icon-img" />
              </div>
              <div className="step-content">
                <h3 className="step-title">Discover & Analyze</h3>
                <p className="step-description">
                  We understand your business, assess your IT landscape, and
                  identify gaps to create the right technology roadmap.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <img src={icon10} alt="Implement & Optimize" className="step-icon-img" />
              </div>
              <div className="step-content">
                <h3 className="step-title">Implement & Optimize</h3>
                <p className="step-description">
                  Our team deploys tailored solutions, configures systems, and
                  fine-tunes performance for seamless operations.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <img src={icon11} alt="Monitor & Support" className="step-icon-img" />
              </div>
              <div className="step-content">
                <h3 className="step-title">Monitor & Support</h3>
                <p className="step-description">
                  We provide continuous monitoring, proactive issue resolution,
                  and dedicated support to ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="blue_connection_section"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="blue_box box1">
          <div className="bluebox_header">
            <img src={blueIcon1} alt="icon" />
            <h3>Our Vision</h3>
          </div>
          <p>
            To enable organizations of all sizes to build a secure, scalable,
            and future-ready digital ecosystem through reliable and innovative
            IT services.
          </p>
        </div>

        <div className="middle_logo_box" contentEditable={false}>
          <img src={centerImages.blueBg} className="blue_bg" alt="bg" />
          <img src={centerImages.logo} className="middle_logo" alt="logo" />

          {isEditMode && (
            <div className="about-image-upload-group center-upload-group">
              <div className="about-image-upload">
                <label className="about-upload-label">
                  Change Center BG
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCenterImageChange("blueBg")}
                  />
                </label>
              </div>
              <div className="about-image-upload">
                <label className="about-upload-label">
                  Change Center Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCenterImageChange("logo")}
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="blue_box box2">
          <div className="bluebox_header">
            <img src={blueIcon2} alt="icon" />
            <h3>Our Mission</h3>
          </div>
          <p>
            To deliver exceptional technology solutions that simplify
            operations, strengthen security, and empower businesses to grow
            with confidence and agility.
          </p>
        </div>

        <div className="blue_box box3">
          <div className="bluebox_header">
            <img src={blueIcon3} alt="icon" />
            <h3>Our Commitment</h3>
          </div>
          <p>
            We are dedicated to providing transparent, high-quality, and
            customer-centric IT support, ensuring every client receives
            unmatched value, long-term reliability, and trusted partnership.
          </p>
        </div>

        <img src={line1} alt="line1" className="line-img line1-img" />
        <img src={line2} alt="line2" className="line-img line2-img" />
        <img src={line3} alt="line3" className="line-img line3-img" />
      </div>

      <div
        className="aboutus_last_container"
        role="region"
        aria-label="Join the team call to action"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="aboutus_last_inner">
          <h2 className="join-title">Join the team!</h2>
          <p className="join-sub">
            Do you want to be part of the Qaidyn Partners team? click "join team"
          </p>
          <button
            className="join-btn"
            aria-label="Join team"
            onClick={() => onOpenContact && onOpenContact()}
          >
            Join team!
          </button>
        </div>
      </div>

      <HomeFooter />
    </>
  );
};

export default AboutPage;
