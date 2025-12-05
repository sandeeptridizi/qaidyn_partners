import React, { useEffect } from "react";
import "./Aboutus.css";
import girlImage from "../../assets/AboutUs/AboutUs1.png";
import rectngleBox from "../../assets/AboutUs/AboutUs2.png";
import aboutLogo from "../../assets/AboutUs/aboutusLogo.png";
import blouBox from "../../assets/AboutUs/aboutusBluebox.png";
import Navbar from "../../components/Navbar/Navbar";
import line1 from "../../assets/AboutUs/aboutLine.png";
import line2 from "../../assets/AboutUs/aboutLine2.png";
import line3 from "../../assets/AboutUs/aboutLine3.png";
import Footer from "../../components/Footer/footer.jsx";
import Icon1 from "../../assets/AboutUs/aboutIcon.png";
import Icon4 from "../../assets/AboutUs/aboutIcon4.png";
import Icon2 from "../../assets/AboutUs/aboutIcon2.png";
import Icon3 from "../../assets/AboutUs/aboutIcon3.png";

const AboutPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="cloud-wrapper">
        <div className="cloud-left">
          <h1 className="cloud-title">Fully Managed Cloud & Server Services</h1>
          <p className="cloud-desc">
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
          </p>
        </div>

        {/* <div className="cloud-right">
          <img src={girlImage} alt="Working Girl" className="cloud-image" />
        </div> */}
        <div className="cloud-right">
          <img src={rectngleBox} alt="Background Box" className="bg-box" />
          <img src={girlImage} alt="Working Girl" className="cloud-image" />
        </div>
      </div>
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
              {/* <div className="stat-icon stripe" /> */}
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
        <div className="process-right">
          <div>
            <h3 className="process-heading">Our Process</h3>
            <p className="process-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="cta-btn">Get Started</button>
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
      <div className="blue_connection_section">
        {/* LEFT BOX */}
        <div className="blue_box box1">
          <div className="bluebox_header">
            <img src="imag" alt="icon" />
            <h3>Reach the goals</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar, sapien ac facilisis gravida, velit arcu consequat magna,
            vitae tincidunt lectus massa in libero. Integer id mi ac erat
            vehicula placerat ac a lorem.
          </p>
        </div>

        {/* CENTER LOGO */}
        <div className="middle_logo_box">
          <img src={blouBox} className="blue_bg" alt="bg" />
          <img src={aboutLogo} className="middle_logo" alt="logo" />
        </div>

        {/* RIGHT BOX */}
        <div className="blue_box box2">
          <div className="bluebox_header">
            <img src="imag" alt="icon" />
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
            <img src="imag" alt="icon" />
            <h3>Best performances</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pulvinar, sapien ac facilisis gravida, velit arcu consequat magna,
            vitae tincidunt lectus massa in libero. Integer id mi ac erat
            vehicula placerat ac a lorem.
          </p>
        </div>

        {/* LINE IMAGES (use your imported line images) */}
        <img src={line1} alt="line1" className="line-img line1-img" />
        <img src={line2} alt="line2" className="line-img line2-img" />
        <img src={line3} alt="line3" className="line-img line3-img" />
      </div>
      <div
        className="aboutus_last_container"
        role="region"
        aria-label="Join the team call to action"
      >
        <div className="aboutus_last_inner">
          <h2 className="join-title">Join the team!</h2>
          <p className="join-sub">
            Do you want to be part of the Qaidyn Partners team? click "join
            team"
          </p>

          <button className="join-btn" aria-label="Join team">
            Join team!
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
