import React, { useEffect, useState } from "react";
import "./Industries.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeFooter from "../../components/Footer1/footerHome.jsx";

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
import { useNavigate } from "react-router-dom";

import { useEditMode } from "../../components/context/EditModeContext.jsx";

const Industries = ({ onOpenContact }) => {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const navigate = useNavigate();
  const { isEditMode } = useEditMode();

  const [industryIcons, setIndustryIcons] = useState([
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
  ]);

  const [coreServiceIcons, setCoreServiceIcons] = useState([
    service1,
    service2,
    service3,
    service4,
  ]);

  const industries = [
    {
      title: "Healthcare",
      icon: icon1,
      description:
        "Secure, compliant, and efficient IT solutions that keep patient data protected and operations running flawlessly.",
    },
    {
      title: "Finance and Professional Services",
      icon: icon2,
      description:
        "Robust, high-security IT infrastructure designed to safeguard financial data and streamline professional workflows.",
    },
    {
      title: "Education",
      icon: icon3,
      description:
        "Smart, scalable IT systems that enhance digital learning, collaboration, and institutional efficiency.",
    },
    {
      title: "Manufacturing",
      icon: icon4,
      description:
        "Reliable IT support that improves production efficiency, automation, and overall operational continuity.",
    },
    {
      title: "Logistics",
      icon: icon5,
      description:
        "Technology solutions that optimize tracking, coordination, and real-time supply chain visibility.",
    },
    {
      title: "Retail",
      icon: icon6,
      description:
        "Seamless IT systems that enhance customer experience, inventory accuracy, and multi-channel sales operations.",
    },
    {
      title: "Software Companies",
      icon: icon7,
      description:
        "Supporting development teams with scalable, secure, and performance-driven IT environments.",
    },
    {
      title: "E-Commerce",
      icon: icon8,
      description:
        "High-availability IT solutions that ensure fast, secure, and flawless online shopping experiences.",
    },
  ];

  const coreServices = [
    {
      title: "Managed IT Services",
      icon: service1,
      description:
        "Reliable end-to-end IT management that keeps your systems running smoothly and efficiently.",
    },
    {
      title: "Managed Security Services",
      icon: service2,
      description:
        "Reliable end-to-end IT management that keeps your systems running smoothly and efficiently.",
    },
    {
      title: "Cloud and Infrastructure services",
      icon: service3,
      description:
        "Scalable cloud and infrastructure solutions designed to boost performance and reduce operational costs.",
    },
    {
      title: "Security Assessments and compliance",
      icon: service4,
      description:
        "Scalable cloud and infrastructure solutions designed to boost performance and reduce operational costs.",
    },
  ];

  const navigateMap = {
    "Managed IT Services": "/services/managed-it",
    "Managed Security Services": "/services/managed-security",
    "Cloud and Infrastructure Services": "/services/cloud-infrastructure",
    "Cloud and Infrastructure services": "/services/cloud-infrastructure", 
    "Security Assessments and compliance": "/services/security-assessment",

    Helpdesk: "/services/managed-it/helpdesk",
    "Devices Setup and Configuration": "/services/managed-it/devices-setup",
    "Patch Management": "/services/managed-it/patch-management",
    "Network Management": "/services/managed-it/network-management",
    Backup: "/services/data-protection/backup",
    "Vendor Co-ordination": "/services/managed-it/vendor-coordination",

    "Threat Detection": "/services/managed-security/threat-detection",
    "End Point and Network protection":
      "/services/managed-security/endpoint-protection",
    "Incident Response": "/services/managed-security/incident-response",
    "Continuous Security Monitoring":
      "/services/managed-security/security-monitoring",

    "Cloud Setup and Migration": "/services/cloud-infrastructure/cloud-setup",
    "Virtual Private Servers": "/services/cloud-infrastructure/virtual-servers",
    "Virtual Desktops": "/services/cloud-infrastructure/virtual-desktops",
    "IT Infrastructure and planning":
      "/services/cloud-infrastructure/it-infrastructure",

    "ISO 27001 Assessment and Audit":
      "/services/security-assessment/iso27001",
    "iRAP Assessment and Audit": "/services/security-assessment/irap",
    "SOC2 Assessment and Audit": "/services/security-assessment/soc2",
    "Risk Management": "/services/security-assessment/risk-management",
    "Policy Development": "/services/security-assessment/policy-development",
    "Security Awareness Training":
      "/services/security-assessment/security-training",

    "Disaster Recovery": "/services/data-protection/disaster-recovery",
    "Ransomware Recovery": "/services/data-protection/ransomware-recovery",
    Encryption: "/services/data-protection/encryption",
  };

  const serviceDetails = {
    0: [
      "Helpdesk",
      "Devices Setup and Configuration",
      "Patch Management",
      "Network Management",
      "Backup",
      "Vendor Co-ordination",
    ],
    1: [
      "Threat Detection",
      "End Point and Network protection",
      "Incident Response",
      "Continuous Security Monitoring",
    ],
    2: [
      "Cloud Setup and Migration",
      "Virtual Private Servers",
      "Virtual Desktops",
      "IT Infrastructure and planning",
    ],
    3: [
      "ISO 27001 Assessment and Audit",
      "iRAP Assessment and Audit",
      "SOC2 Assessment and Audit",
      "Risk Management",
      "Policy Development",
      "Security Awareness Training",
    ],
  };

  const openServiceModal = (index) => {
    setActiveServiceModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeServiceModal = () => {
    setActiveServiceModal(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndustryIconChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setIndustryIcons((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  };

  const handleCoreServiceIconChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCoreServiceIcons((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  };

  return (
    <div className="industries-page">
      <header className="industries-header">
        <Navbar />
      </header>
      <main className="industries-main">
        <section
          className="industries-hero"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h1 className="industries-title">Serving Industries</h1>
          <p className="industries-subtitle">
           Delivering tailored IT solutions that empower industries to operate<br></br> smarter, safer, and more efficiently.
          </p>
        </section>

        <section
          className="industries-section"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article className="industries-card" key={index}>
                <div className="industries-icon-wrap">
                  <img
                    src={industryIcons[index] || industry.icon}
                    alt={industry.title}
                    className="industries-icon"
                  />
                </div>

                {isEditMode && (
                  <div className="industries-upload-wrap">
                    <label className="industries-upload-label">
                      Change Icon:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleIndustryIconChange(e, index)}
                      />
                    </label>
                  </div>
                )}

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

        <section
          className="core-services-section"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h2 className="core-services-title">Our Core services</h2>

          <div className="core-services-grid">
            {coreServices.map((service, index) => (
              <article
                className="core-service-card"
                key={index}
                onClick={() => openServiceModal(index)}
              >
                <div className="core-service-header">
                  <div className="core-service-icon-wrap">
                    <img
                      src={coreServiceIcons[index] || service.icon}
                      alt={service.title}
                      className="core-service-icon"
                    />
                  </div>

                  {isEditMode && (
                    <div className="core-service-upload-wrap">
                      <label className="core-service-upload-label">
                        Change Icon:
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleCoreServiceIconChange(e, index)
                          }
                        />
                      </label>
                    </div>
                  )}

                  <h3 className="core-service-name">{service.title}</h3>
                </div>

                <p className="core-service-text">{service.description}</p>

                <button
                  className="core-service-link"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openServiceModal(index);
                  }}
                >
                  <span>Learn More</span>
                  <span className="core-service-link-arrow">→</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {activeServiceModal !== null && (
          <div className="service-modal-overlay" onClick={closeServiceModal}>
            <div
              className="service-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeServiceModal}>
                ×
              </button>
              <div className="modal-header">
                <div className="modal-icon-wrapper">
                  <img
                    src={
                      coreServiceIcons[activeServiceModal] ||
                      coreServices[activeServiceModal].icon
                    }
                    alt={coreServices[activeServiceModal].title}
                    className="modal-icon-img"
                  />
                </div>
                <h3
                  className="modal-title"
                  onClick={() => {
                    const route =
                      navigateMap[coreServices[activeServiceModal].title];
                    if (route) navigate(route);
                  }}
                >
                  {coreServices[activeServiceModal].title}
                </h3>
                <p className="modal-description">
                  {coreServices[activeServiceModal].description}
                </p>
              </div>
              <div className="modal-content">
                <ul className="modal-details-list">
                  {serviceDetails[activeServiceModal].map((detail, i) => (
                    <li
                      key={i}
                      className="modal-detail-item"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        backgroundColor: i === 0 ? "#E0F7FA" : "transparent",
                        cursor: navigateMap[detail] ? "pointer" : "default",
                      }}
                      onClick={() => {
                        const route = navigateMap[detail];
                        if (route) navigate(route);
                      }}
                    >
                      <span className="detail-bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <section
          className="content-consult-section"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="content-consult-left">
            <h2 className="content-title">
Talk to Our Technology Specialists            </h2>
            <p className="content-text">
              Connect with our experts for tailored guidance and solutions designed to strengthen your IT performance.
            </p>
            <button className="content-btn">
              <span>Learn More</span>
              <span className="content-btn-arrow">→</span>
            </button>
          </div>
          <div className="content-consult-right">
            <div className="consult-card">
              <h3 className="consult-title">Get Consultation</h3>
              <form
                className="consult-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onOpenContact) onOpenContact();
                }}
              >
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

        <section
          className="industries-cta"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="industries-cta-inner">
            <div className="industries-cta-text">
              <h3 className="industries-cta-title">
Get in Touch With Us              </h3>
              <p className="industries-cta-desc">
                Have a question or need support? Our team is ready to assist you with all your IT service needs
              </p>
            </div>
            <div className="industries-cta-actions">
              <button
                className="cta-primary"
                type="button"
                onClick={onOpenContact}
              >
                Get Started
              </button>
              <button className="cta-secondary" type="button">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
};

export default Industries;
