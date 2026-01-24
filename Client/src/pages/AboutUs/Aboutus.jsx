import React, { useEffect } from "react";
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

import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";

const AboutPage = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="cloud-wrapper">
        <div className="cloud-left">
          <EditableText
            as="h1"
            className="cloud-title"
            contentKey="about.hero.title"
            defaultValue="Empowering Businesses with Intelligent & Secure IT Solutions"
          />
          <EditableText
            as="p"
            className="cloud-desc"
            contentKey="about.hero.description"
            defaultValue="At Qaidyn, we deliver end-to-end technology services that help organizations operate smarter, scale faster, and stay secure. With a commitment to excellence and innovation, we support businesses across industries with reliable IT management, modern infrastructure, and advanced cybersecurity solutions."
          />
        </div>

        <div className="cloud-right">
          <EditableImage
            contentKey="about.hero.bgBox"
            defaultValue={rectngleBox}
            alt="Background Box"
            className="bg-box"
          />
          <EditableImage
            contentKey="about.hero.girlImage"
            defaultValue={girlImage}
            alt="Working Girl"
            className="cloud-image"
          />
        </div>
      </div>

      <section className="success-process-section">
        <div className="success-left">
          <div>
            <EditableText
              as="h2"
              className="success-title"
              contentKey="about.stats.title"
              defaultValue="Our 10 years of Success"
            />
            <EditableText
              as="p"
              className="success-sub"
              contentKey="about.stats.subtitle"
              defaultValue="With our super powers we have reached this"
            />
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <EditableImage contentKey="about.stats.employees.icon" defaultValue={Icon1} alt="Employees" />
              <div className="stat-text">
                <EditableText
                  as="div"
                  className="stat-number"
                  contentKey="about.stats.employees.count"
                  defaultValue="100+"
                />
                <EditableText
                  as="div"
                  className="stat-label"
                  contentKey="about.stats.employees.label"
                  defaultValue="Employees working"
                />
              </div>
            </div>

            <div className="stat-item">
              <EditableImage contentKey="about.stats.data.icon" defaultValue={Icon4} alt="Cloud Data" />
              <div className="stat-text">
                <EditableText
                  as="div"
                  className="stat-number"
                  contentKey="about.stats.data.count"
                  defaultValue="2 Million"
                />
                <EditableText
                  as="div"
                  className="stat-label"
                  contentKey="about.stats.data.label"
                  defaultValue="Data Stored in Cloud"
                />
              </div>
            </div>

            <div className="stat-item">
              <EditableImage contentKey="about.stats.countries.icon" defaultValue={Icon2} alt="Countries" />
              <div className="stat-text">
                <EditableText
                  as="div"
                  className="stat-number"
                  contentKey="about.stats.countries.count"
                  defaultValue="50+"
                />
                <EditableText
                  as="div"
                  className="stat-label"
                  contentKey="about.stats.countries.label"
                  defaultValue="Countries"
                />
              </div>
            </div>

            <div className="stat-item">
              <EditableImage contentKey="about.stats.clients.icon" defaultValue={Icon3} alt="Clients" />
              <div className="stat-text">
                <EditableText
                  as="div"
                  className="stat-number"
                  contentKey="about.stats.clients.count"
                  defaultValue="100+"
                />
                <EditableText
                  as="div"
                  className="stat-label"
                  contentKey="about.stats.clients.label"
                  defaultValue="Clients"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="process-content">
          <div className="process-left">
            <EditableText
              as="h2"
              className="process-title"
              contentKey="about.process.title"
              defaultValue="Our Process"
            />
            <EditableText
              as="p"
              className="process-description"
              contentKey="about.process.description"
              defaultValue="A streamlined, transparent, and efficient workflow designed to deliver reliable IT solutions with speed, precision, and measurable outcomes."
            />
            <EditableButton
              contentKey="about.process.button"
              defaultValue="Get Started"
              className="btn-primary"
              onClick={() => onOpenContact && onOpenContact()}
            />
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon-wrapper">
                <EditableImage contentKey="about.process.step1.icon" defaultValue={icon9} alt="Discover & Analyze" className="step-icon-img" />
              </div>
              <div className="step-content">
                <EditableText
                  as="h3"
                  className="step-title"
                  contentKey="about.process.step1.title"
                  defaultValue="Discover & Analyze"
                />
                <EditableText
                  as="p"
                  className="step-description"
                  contentKey="about.process.step1.description"
                  defaultValue="We understand your business, assess your IT landscape, and identify gaps to create the right technology roadmap."
                />
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <EditableImage contentKey="about.process.step2.icon" defaultValue={icon10} alt="Implement & Optimize" className="step-icon-img" />
              </div>
              <div className="step-content">
                <EditableText
                  as="h3"
                  className="step-title"
                  contentKey="about.process.step2.title"
                  defaultValue="Implement & Optimize"
                />
                <EditableText
                  as="p"
                  className="step-description"
                  contentKey="about.process.step2.description"
                  defaultValue="Our team deploys tailored solutions, configures systems, and fine-tunes performance for seamless operations."
                />
              </div>
            </div>

            <div className="process-step">
              <div className="step-icon-wrapper">
                <EditableImage contentKey="about.process.step3.icon" defaultValue={icon11} alt="Monitor & Support" className="step-icon-img" />
              </div>
              <div className="step-content">
                <EditableText
                  as="h3"
                  className="step-title"
                  contentKey="about.process.step3.title"
                  defaultValue="Monitor & Support"
                />
                <EditableText
                  as="p"
                  className="step-description"
                  contentKey="about.process.step3.description"
                  defaultValue="We provide continuous monitoring, proactive issue resolution, and dedicated support to ensure everything runs smoothly."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blue_connection_section">
        <div className="blue_box box1">
          <div className="bluebox_header">
            <EditableImage contentKey="about.vision.icon" defaultValue={blueIcon1} alt="icon" />
            <EditableText
              as="h3"
              contentKey="about.vision.title"
              defaultValue="Our Vision"
            />
          </div>
          <EditableText
            as="p"
            contentKey="about.vision.description"
            defaultValue="To enable organizations of all sizes to build a secure, scalable, and future-ready digital ecosystem through reliable and innovative IT services."
          />
        </div>

        <div className="middle_logo_box">
          <EditableImage
            contentKey="about.center.blueBg"
            defaultValue={blouBox}
            className="blue_bg"
            alt="bg"
          />
          <EditableImage
            contentKey="about.center.logo"
            defaultValue={aboutLogo}
            className="middle_logo"
            alt="logo"
          />
        </div>

        <div className="blue_box box2">
          <div className="bluebox_header">
            <EditableImage contentKey="about.mission.icon" defaultValue={blueIcon2} alt="icon" />
            <EditableText
              as="h3"
              contentKey="about.mission.title"
              defaultValue="Our Mission"
            />
          </div>
          <EditableText
            as="p"
            contentKey="about.mission.description"
            defaultValue="To deliver exceptional technology solutions that simplify operations, strengthen security, and empower businesses to grow with confidence and agility."
          />
        </div>

        <div className="blue_box box3">
          <div className="bluebox_header">
            <EditableImage contentKey="about.commitment.icon" defaultValue={blueIcon3} alt="icon" />
            <EditableText
              as="h3"
              contentKey="about.commitment.title"
              defaultValue="Our Commitment"
            />
          </div>
          <EditableText
            as="p"
            contentKey="about.commitment.description"
            defaultValue="We are dedicated to providing transparent, high-quality, and customer-centric IT support, ensuring every client receives unmatched value, long-term reliability, and trusted partnership."
          />
        </div>

        <EditableImage contentKey="about.line1" defaultValue={line1} alt="line1" className="line-img line1-img" />
        <EditableImage contentKey="about.line2" defaultValue={line2} alt="line2" className="line-img line2-img" />
        <EditableImage contentKey="about.line3" defaultValue={line3} alt="line3" className="line-img line3-img" />
      </div>

      <div
        className="aboutus_last_container"
        role="region"
        aria-label="Join the team call to action"
      >
        <div className="aboutus_last_inner">
          <EditableText
            as="h2"
            className="join-title"
            contentKey="about.cta.title"
            defaultValue="Join the team!"
          />
          <EditableText
            as="p"
            className="join-sub"
            contentKey="about.cta.description"
            defaultValue="Do you want to be part of the Qaidyn Partners team? click 'join team'"
          />
          <EditableButton
            contentKey="about.cta.button"
            defaultValue="Join team!"
            className="join-btn"
            onClick={() => onOpenContact && onOpenContact()}
          />
        </div>
      </div>

      <HomeFooter />
    </>
  );
};

const AboutPageWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <AboutPage onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default AboutPageWrapper;
