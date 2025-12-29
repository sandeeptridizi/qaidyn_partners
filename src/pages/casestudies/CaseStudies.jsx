import React, { useEffect, useState } from "react";
import "./CaseStudies.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
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
import { useNavigate } from "react-router-dom";

// 🔥 global edit mode
import { useEditMode } from "../../components/context/EditModeContext.jsx";

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

const CaseStudies = ({ onOpenContact }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ---- services modal (same behaviour as HomePage) ----
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const navigate = useNavigate();
  const { isEditMode } = useEditMode();

  // 🖼️ image states (so you can replace images from UI)
  const [heroImage, setHeroImage] = useState(heroImg);
  const [timelineImage, setTimelineImage] = useState(timelineImg);
  const [step2Image, setStep2Image] = useState(step2Img);
  const [step3Image, setStep3Image] = useState(step3Img);
  const [step4Image, setStep4Image] = useState(step4Img);
  const [ctaImage, setCtaImage] = useState(ctaImg);
  const [testimonialImage, setTestimonialImage] = useState(testimonialImg);

  // services icons editable
  const [serviceIcons, setServiceIcons] = useState([
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
  ]);

  // helper for file -> url state
  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter(url);
  };

  const handleServiceIconChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setServiceIcons((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  };

  // routes map
  const navigateMap = {
    // Main service tiles
    "Managed IT Services": "/services/managed-it",
    "Managed Security Services": "/services/managed-security",
    "Cloud and Infrastructure Services": "/services/cloud-infrastructure",
    "Security Assessments and compliance": "/services/security-assessment",
    "Data Protection and Recovery": "/services/data-protection",

    // Managed IT
    Helpdesk: "/services/managed-it/helpdesk",
    "Devices Setup and Configuration": "/services/managed-it/devices-setup",
    "Patch Management": "/services/managed-it/patch-management",
    "Network Management": "/services/managed-it/network-management",
    Backup: "/services/data-protection/backup",
    "Vendor Co-ordination": "/services/managed-it/vendor-coordination",

    // Managed Security
    "Threat Detection": "/services/managed-security/threat-detection",
    "End Point and Network protection":
      "/services/managed-security/endpoint-protection",
    "Incident Response": "/services/managed-security/incident-response",
    "Continuous Security Monitoring":
      "/services/managed-security/security-monitoring",

    // Cloud & Infra
    "Cloud Setup and Migration": "/services/cloud-infrastructure/cloud-setup",
    "Virtual Private Servers": "/services/cloud-infrastructure/virtual-servers",
    "Virtual Desktops": "/services/cloud-infrastructure/virtual-desktops",
    "IT Infrastructure and planning":
      "/services/cloud-infrastructure/it-infrastructure",

    // Security Assessment
    "ISO 27001 Assessment and Audit":
      "/services/security-assessment/iso27001",
    "iRAP Assessment and Audit": "/services/security-assessment/irap",
    "SOC2 Assessment and Audit": "/services/security-assessment/soc2",
    "Risk Management": "/services/security-assessment/risk-management",
    "Policy Development": "/services/security-assessment/policy-development",
    "Security Awareness Training":
      "/services/security-assessment/security-training",

    // Data Protection
    "Disaster Recovery": "/services/data-protection/disaster-recovery",
    "Ransomware Recovery": "/services/data-protection/ransomware-recovery",
    Encryption: "/services/data-protection/encryption",
  };

  // same services but using case study icons
  const services = [
    {
      title: "Managed IT Services",
      icon: feature1,
      description:
        "Reliable end-to-end IT management that keeps your systems running smoothly and efficiently.",
    },
    {
      title: "Managed Security Services",
      icon: feature5,
      description:
        "Proactive security monitoring and protection to safeguard your business from evolving threats.",
    },
    {
      title: "Cloud and Infrastructure Services",
      icon: feature2,
      description:
        "Scalable cloud and infrastructure solutions designed to boost performance and reduce operational costs.",
    },
    {
      title: "Security Assessments and compliance",
      icon: feature3,
      description:
        "Thorough security audits and compliance readiness to ensure your organization meets every standard.",
    },
    {
      title: "Data Protection and Recovery",
      icon: feature4,
      description:
        "Robust backup and recovery solutions that secure your data and restore operations without disruption.",
    },
  ];

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
    4: ["Backup", "Disaster Recovery", "Ransomware Recovery", "Encryption"],
  };

  const openServiceModal = (index) => {
    setActiveServiceModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeServiceModal = () => {
    setActiveServiceModal(null);
    document.body.style.overflow = "unset";
  };
  // --------------------------------------------------------------

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-page">
      <Navbar />
      <section
        className="cs-hero"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cs-container cs-hero-inner">
          <div className="cs-hero-left">
            <h1>
              Resources to Guide Your Growth
            </h1>
            <p>
              Access curated insights, templates, and tools designed to help you make smarter, faster, and more informed decisions.
            </p>
            <button
              className="cs-btn-primary"
              type="button"
              onClick={onOpenContact}
            >
              Get Started
            </button>
          </div>

          <div className="cs-hero-right">
            <img src={heroImage} alt="hero" />

            {isEditMode && (
              <div className="cs-image-upload">
                <label className="cs-upload-label">
                  Change Hero Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange(setHeroImage)}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className="cs-how"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <h2>How It Works</h2>

        <div className="cs-timeline">
          <img src={timelineImage} alt="" className="cs-timeline-bg" />

          {isEditMode && (
            <div className="cs-image-upload cs-timeline-upload">
              <label className="cs-upload-label">
                Change Timeline Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(setTimelineImage)}
                />
              </label>
            </div>
          )}

          <div className="cs-steps">
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

            <div className="cs-step cs-step-2">
              <div className="cs-num">2</div>
              <img
                src={step2Image}
                alt="Get connected with cybersecurity & defense experts"
                className="cs-step-img"
              />

              {isEditMode && (
                <div className="cs-image-upload">
                  <label className="cs-upload-label">
                    Change Step 2 Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange(setStep2Image)}
                    />
                  </label>
                </div>
              )}
            </div>

            <div className="cs-step cs-step-3">
              <div className="cs-num">3</div>
              <img
                src={step3Image}
                alt="Book Advisory – chat, video consultation, or workshops"
                className="cs-step-img"
              />

              {isEditMode && (
                <div className="cs-image-upload">
                  <label className="cs-upload-label">
                    Change Step 3 Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange(setStep3Image)}
                    />
                  </label>
                </div>
              )}
            </div>

            <div className="cs-step cs-step-4">
              <img
                src={step4Image}
                alt="Stay Protected – apply strategies for safety"
                className="cs-step-img"
              />

              {isEditMode && (
                <div className="cs-image-upload">
                  <label className="cs-upload-label">
                    Change Step 4 Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange(setStep4Image)}
                    />
                  </label>
                </div>
              )}

              <div className="cs-num cs-num-bottom">4</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cs-services"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cs-container">
          <h2 className="cs-services-title">Our Core Services</h2>

          <p className="cs-sub">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>

          <div className="cs-services-wrapper">
            <div className="cs-service-row">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="cs-service-item"
                  onClick={() => openServiceModal(index)}
                >
                  <img
                    src={serviceIcons[index] || service.icon}
                    alt={service.title}
                    className="cs-service-icon"
                  />

                  {isEditMode && (
                    <div className="cs-image-upload cs-service-upload">
                      <label className="cs-upload-label">
                        Change Icon:
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleServiceIconChange(e, index)}
                        />
                      </label>
                    </div>
                  )}

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>

            <div className="cs-service-row bottom">
              {services.slice(3).map((service, index) => (
                <div
                  key={index + 3}
                  className="cs-service-item"
                  onClick={() => openServiceModal(index + 3)}
                >
                  <img
                    src={serviceIcons[index + 3] || service.icon}
                    alt={service.title}
                    className="cs-service-icon"
                  />

                  {isEditMode && (
                    <div className="cs-image-upload cs-service-upload">
                      <label className="cs-upload-label">
                        Change Icon:
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleServiceIconChange(e, index + 3)
                          }
                        />
                      </label>
                    </div>
                  )}

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeServiceModal !== null && (
        <div className="service-modal-overlay" onClick={closeServiceModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeServiceModal}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                <img
                  src={
                    serviceIcons[activeServiceModal] ||
                    services[activeServiceModal].icon
                  }
                  alt={services[activeServiceModal].title}
                  className="modal-icon-img"
                />
              </div>
              <h3
                className="modal-title"
                onClick={() => {
                  const route =
                    navigateMap[services[activeServiceModal].title];
                  if (route) navigate(route);
                }}
              >
                {services[activeServiceModal].title}
              </h3>
              <p className="modal-description">
                {services[activeServiceModal].description}
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

      <section className="cs-logos-section" aria-label="Client logos">
  <div className="cs-logos-wrapper">
    <div className="cs-logos-container">
      {[...companyLogos, ...companyLogos].map((logo, index) => (
        <div
          key={index}
          className={`cs-logo-item ${logo.alt?.toLowerCase() || ""}`}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            draggable="false"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      <section
        className="cs-testimonial"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cs-testimonial-inner">
          <div className="cs-testimonial-left">
            <h2 className="cs-testimonial-title">
              Feedback About Their Experience With Us
            </h2>

            <p className="cs-testimonial-subtitle">
              We actively review every interaction to refine our approach, enhance quality, and ensure your experience consistently improves.
            </p>

            <div className="cs-slider-controls">
              <button className="cs-slider-btn" onClick={handlePrev}>
                ←
              </button>
              <button className="cs-slider-btn" onClick={handleNext}>
                →
              </button>
            </div>
          </div>

          <div className="cs-testimonial-card">
            <div className="cs-testimonial-image">
              <img src={testimonialImage} alt={active.name} />

              {isEditMode && (
                <div className="cs-image-upload">
                  <label className="cs-upload-label">
                    Change Testimonial Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange(setTestimonialImage)}
                    />
                  </label>
                </div>
              )}
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
      <section
        className="cs-cta"
        contentEditable={isEditMode}
        suppressContentEditableWarning={true}
      >
        <div className="cs-container cs-cta-inner">
          <div className="cs-cta-left">
            <h2>Let’s Build a Smarter, Secure IT Future Together</h2>
            <p>
             Have a question or need expert support? Reach out to our team today—we’re here to provide fast, reliable guidance and the right IT solutions for your business.
            </p>
            <button
              className="cs-btn-white"
              type="button"
              onClick={onOpenContact}
            >
              Know more
            </button>
          </div>

          <div className="cs-cta-right">
            <img src={ctaImage} alt="CTA" />

            {isEditMode && (
              <div className="cs-image-upload">
                <label className="cs-upload-label">
                  Change CTA Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange(setCtaImage)}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default CaseStudies;
