import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import girlImage from "../../assets/AboutUs/AboutUs1.png";
import rectngleBox from "../../assets/AboutUs/AboutUs2.png";
import aboutLogo from "../../assets/AboutUs/aboutusLogo.png";
import blouBox from "../../assets/AboutUs/aboutusBluebox.png";
import Navbar from "../../components/Navbar/Navbar";
import line1 from "../../assets/AboutUs/aboutLine.png";
import line2 from "../../assets/AboutUs/aboutLine2.png";
import line3 from "../../assets/AboutUs/aboutLine3.png";
import Footer from "../../components/Footer/footer";
import Icon1 from "../../assets/AboutUs/aboutIcon.png";
import Icon4 from "../../assets/AboutUs/aboutIcon4.png";
import Icon2 from "../../assets/AboutUs/aboutIcon2.png";
import Icon3 from "../../assets/AboutUs/aboutIcon3.png";

// 🔥 global edit mode
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const AboutPage = ({ onOpenContact }) => {
  const { isEditMode } = useEditMode();

  // 🔹 STATE FOR EDITABLE IMAGES
  const [cloudImages, setCloudImages] = useState({
    bgBox: rectngleBox,
    girl: girlImage,
  });

  const [centerImages, setCenterImages] = useState({
    blueBg: blouBox,
    logo: aboutLogo,
  });

  // generic handler for file change
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

      {/* HERO / CLOUD WRAPPER */}
      <div
        className="cloud-wrapper"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cloud-left">
          <h1 className="cloud-title">Fully Managed Cloud &amp; Server Services</h1>
          <p className="cloud-desc">
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
          </p>
        </div>

        <div className="cloud-right" contentEditable={false}>
          <img
            src={cloudImages.bgBox}
            alt="Background Box"
            className="bg-box"
          />
          <img
            src={cloudImages.girl}
            alt="Working Girl"
            className="cloud-image"
          />

          {/* 🔸 Show upload controls only in edit mode */}
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

      {/* SUCCESS + PROCESS SECTION */}
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
              <div>
                <img src={Icon4} alt="Cloud Data" />
              </div>
              <div className="stat-text">
                <div className="stat-number">2 Million</div>
                <div className="stat-label">Data Stored in Cloud</div>
              </div>
            </div>

            <div className="stat-item">
              <div>
                <img src={Icon2} alt="Countries" />
              </div>
              <div className="stat-text">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>

            <div className="stat-item">
              <div>
                <img src={Icon3} alt="Clients" />
              </div>
              <div className="stat-text">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="process-right">
          <div>
            <h3 className="process-heading">Our Process</h3>
            <p className="process-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button
              className="cta-btn"
              onClick={() => onOpenContact && onOpenContact()}
            >
              Get Started
            </button>
          </div>

          <div className="process-cards">
            <div className="process-card">
              <div className="card-icon">👤</div>
              <div className="card-content">
                <div className="card-title">Get consultation</div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                </div>
              </div>
            </div>

            <div className="process-card">
              <div className="card-icon">💳</div>
              <div className="card-content">
                <div className="card-title">Service Evalution</div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                </div>
              </div>
            </div>

            <div className="process-card">
              <div className="card-icon">⚙️</div>
              <div className="card-content">
                <div className="card-title">Start Working</div>
                <div className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE CONNECTION SECTION */}
      <div
        className="blue_connection_section"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        {/* LEFT BOX */}
        <div className="blue_box box1">
          <div className="bluebox_header">
            {/* You can replace this with an actual icon import if needed */}
            <img src={centerImages.logo} alt="icon" />
            <h3>Reach the goals</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar, sapien ac facilisis gravida, velit arcu consequat magna,
            vitae tincidunt lectus massa in libero. Integer id mi ac erat
            vehicula placerat ac a lorem.
          </p>
        </div>

        {/* CENTER LOGO (NOT contentEditable to protect structure) */}
        <div className="middle_logo_box" contentEditable={false}>
          <img
            src={centerImages.blueBg}
            className="blue_bg"
            alt="bg"
          />
          <img
            src={centerImages.logo}
            className="middle_logo"
            alt="logo"
          />

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

        {/* RIGHT BOX */}
        <div className="blue_box box2">
          <div className="bluebox_header">
            <img src={centerImages.logo} alt="icon" />
            <h3>Save time</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar, sapien ac facilisis gravida, velit arcu consequat magna,
            vitae tincidunt lectus massa in libero. Integer id mi ac erat
            vehicula placerat ac a lorem.
          </p>
        </div>

        {/* BOTTOM BOX */}
        <div className="blue_box box3">
          <div className="bluebox_header">
            <img src={centerImages.logo} alt="icon" />
            <h3>Best performances</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar, sapien ac facilisis gravida, velit arcu consequat magna,
            vitae tincidunt lectus massa in libero. Integer id mi ac erat
            vehicula placerat ac a lorem.
          </p>
        </div>

        {/* LINE IMAGES */}
        <img src={line1} alt="line1" className="line-img line1-img" />
        <img src={line2} alt="line2" className="line-img line2-img" />
        <img src={line3} alt="line3" className="line-img line3-img" />
      </div>

      {/* JOIN TEAM SECTION */}
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
            Do you want to be part of the Qaidyn Partners team? click "join
            team"
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

      <Footer />
    </>
  );
};

export default AboutPage;
