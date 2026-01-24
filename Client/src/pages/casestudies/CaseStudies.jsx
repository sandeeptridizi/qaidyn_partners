import React, { useEffect, useState } from "react";
import "./CaseStudies.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";

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
import { useNavigate } from "react-router-dom";

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
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const navigate = useNavigate();

  const navigateMap = {
    "Managed IT Services": "/services/managed-it",
    "Managed Security Services": "/services/managed-security",
    "Cloud and Infrastructure Services": "/services/cloud-infrastructure",
    "Security Assessments and compliance": "/services/security-assessment",
    "Data Protection and Recovery": "/services/data-protection",
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
      <section className="cs-hero">
        <div className="cs-container cs-hero-inner">
          <div className="cs-hero-left">
            <EditableText
              as="h1"
              contentKey="casestudies.hero.title"
              defaultValue="Resources to Guide Your Growth"
            />
            <EditableText
              as="p"
              contentKey="casestudies.hero.description"
              defaultValue="Access curated insights, templates, and tools designed to help you make smarter, faster, and more informed decisions."
            />
            <EditableButton
              contentKey="casestudies.hero.getStarted.button"
              defaultValue="Get Started"
              className="cs-btn-primary"
              onClick={onOpenContact}
            />
          </div>

          <div className="cs-hero-right">
            <EditableImage
              contentKey="casestudies.hero.image"
              defaultValue={heroImg}
              alt="hero"
            />
          </div>
        </div>
      </section>

      <section className="cs-how">
        <EditableText
          as="h2"
          contentKey="casestudies.how.title"
          defaultValue="How It Works"
        />

        <div className="cs-timeline">
          <EditableImage contentKey="casestudies.timeline.bg" defaultValue={timelineImg} alt="" className="cs-timeline-bg" />

          <div className="cs-steps">
            <div className="cs-step cs-step-1">
              <div className="cs-num">1</div>

              <EditableText
                as="p"
                className="cs-step-desc-top"
                contentKey="casestudies.step.1.description"
                defaultValue="Cyber safety, crime prevention, defense, or enterprise security."
                useHtml={true}
              />

              <div className="cs-pill cs-pill-top">
                <EditableText
                  as="span"
                  contentKey="casestudies.step.1.pill"
                  defaultValue="Select Your Focus"
                />
              </div>

              <div className="cs-dot" />
            </div>

            <div className="cs-step cs-step-2">
              <div className="cs-num">2</div>
              <EditableText
                as="p"
                className="cs-step-desc-top"
                contentKey="casestudies.step.2.description"
                defaultValue="Get connected with cybersecurity & defense experts."
                useHtml={true}
              />
              <div className="cs-pill cs-pill-bottom">
                <EditableText
                  as="span"
                  contentKey="casestudies.step.2.pill"
                  defaultValue="AI Advisor Match"
                />
              </div>
              <div className="cs-dot" />
            </div>

            <div className="cs-step cs-step-3">
              <div className="cs-num">3</div>
              <div className="cs-pill cs-pill-top">
                <EditableText
                  as="span"
                  contentKey="casestudies.step.3.pill"
                  defaultValue="Book Advisory"
                />
              </div>
              <EditableText
                as="p"
                className="cs-step-desc-side"
                contentKey="casestudies.step.3.description"
                defaultValue="Chat, video consultation, or workshops."
                useHtml={true}
              />
              <div className="cs-dot" />
            </div>

            <div className="cs-step cs-step-4">
              <div className="cs-pill cs-pill-top">
                <EditableText
                  as="span"
                  contentKey="casestudies.step.4.pill"
                  defaultValue="Stay Protected"
                />
              </div>
              <EditableText
                as="p"
                className="cs-step-desc-bottom"
                contentKey="casestudies.step.4.description"
                defaultValue="Apply strategies for career, enterprise, or safety."
                useHtml={true}
              />
              <div className="cs-dot cs-dot-green" />
              <div className="cs-num cs-num-bottom">4</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-services">
        <div className="cs-container">
          <EditableText
            as="h2"
            className="cs-services-title"
            contentKey="casestudies.services.title"
            defaultValue="Our Core Services"
          />

          <EditableText
            as="p"
            className="cs-sub"
            contentKey="casestudies.services.subtitle"
            defaultValue="Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."
          />

          <div className="cs-services-wrapper">
            <div className="cs-service-row">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="cs-service-item"
                  onClick={() => openServiceModal(index)}
                >
                  <EditableImage
                    contentKey={`casestudies.service.${index}.icon`}
                    defaultValue={service.icon}
                    alt={service.title}
                    className="cs-service-icon"
                  />

                  <EditableText
                    as="h3"
                    contentKey={`casestudies.service.${index}.title`}
                    defaultValue={service.title}
                  />
                  <EditableText
                    as="p"
                    contentKey={`casestudies.service.${index}.description`}
                    defaultValue={service.description}
                  />
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
                  <EditableImage
                    contentKey={`casestudies.service.${index + 3}.icon`}
                    defaultValue={service.icon}
                    alt={service.title}
                    className="cs-service-icon"
                  />

                  <EditableText
                    as="h3"
                    contentKey={`casestudies.service.${index + 3}.title`}
                    defaultValue={service.title}
                  />
                  <EditableText
                    as="p"
                    contentKey={`casestudies.service.${index + 3}.description`}
                    defaultValue={service.description}
                  />
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
                <EditableImage
                  contentKey={`casestudies.service.${activeServiceModal}.icon`}
                  defaultValue={services[activeServiceModal].icon}
                  alt={services[activeServiceModal].title}
                  className="modal-icon-img"
                />
              </div>
              <EditableText
                as="h3"
                className="modal-title"
                contentKey={`casestudies.service.${activeServiceModal}.title`}
                defaultValue={services[activeServiceModal].title}
              />

              <EditableText
                as="p"
                className="modal-description"
                contentKey={`casestudies.service.${activeServiceModal}.description`}
                defaultValue={services[activeServiceModal].description}
              />
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
                    <EditableText
                      as="span"
                      contentKey={`casestudies.service.${activeServiceModal}.detail.${i}`}
                      defaultValue={detail}
                    />
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

      <section className="cs-testimonial">
        <div className="cs-testimonial-inner">
          <div className="cs-testimonial-left">
            <EditableText
              as="h2"
              className="cs-testimonial-title"
              contentKey="casestudies.testimonial.title"
              defaultValue="Feedback About Their Experience With Us"
            />

            <EditableText
              as="p"
              className="cs-testimonial-subtitle"
              contentKey="casestudies.testimonial.subtitle"
              defaultValue="We actively review every interaction to refine our approach, enhance quality, and ensure your experience consistently improves."
            />

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
              <EditableImage contentKey="casestudies.testimonial.image" defaultValue={testimonialImg} alt={active.name} />
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
            <EditableText
              as="h2"
              contentKey="casestudies.cta.title"
              defaultValue="Let's Build a Smarter, Secure IT Future Together"
            />
            <EditableText
              as="p"
              contentKey="casestudies.cta.description"
              defaultValue="Have a question or need expert support? Reach out to our team today—we're here to provide fast, reliable guidance and the right IT solutions for your business."
            />
            <EditableButton
              contentKey="casestudies.cta.knowMore.button"
              defaultValue="Know more"
              className="cs-btn-white"
              onClick={onOpenContact}
            />
          </div>

          <div className="cs-cta-right">
            <EditableImage
              contentKey="casestudies.cta.image"
              defaultValue={ctaImg}
              alt="CTA"
            />
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

const CaseStudiesWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <CaseStudies onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default CaseStudiesWrapper;
