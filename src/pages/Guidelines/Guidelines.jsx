import React, { useEffect, useState } from "react";
import "./Guidelines.css";
import "../casestudies/CaseStudies.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import timelineImgFile from "../../assets/casestudies/Vector 2.png";
import step2ImgFile from "../../assets/casestudies/Frame 47.png";
import step3ImgFile from "../../assets/casestudies/Frame 48.png";
import step4ImgFile from "../../assets/casestudies/Frame 49.png";
import { useEditMode } from "../../components/context/EditModeContext.jsx";
import ctaImg from "../../assets/casestudies/image 3.png";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const guidelinesDataDefault = [
  {
    id: 1,
    title: "Full Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic...",
  },
  {
    id: 2,
    title: "React Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React. Building reusable UI components...",
  },
  {
    id: 3,
    title: "Flutter Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing cross-platform mobile applications using Flutter. Building beautiful, natively compiled apps...",
  },
  {
    id: 4,
    title: "Php Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building and maintaining backend systems using PHP and frameworks like Laravel or Symfony. Developing RESTful APIs...",
  },
  {
    id: 5,
    title: "Mern Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building full-stack applications using MongoDB, Express.js, React, and Node.js (MERN). End-to-end development...",
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

const Guidelines = ({ onOpenContact }) => {
  const { isEditMode } = useEditMode();

  const [activeId, setActiveId] = useState(1);
  const [guidelinesData, setGuidelinesData] = useState(guidelinesDataDefault);

  const [coreServiceIcons, setCoreServiceIcons] = useState([
    service1,
    service2,
    service3,
    service4,
  ]);

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

  const handleTextChange = (id, field, value) => {
    setGuidelinesData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const [timelineImage, setTimelineImage] = useState(timelineImgFile);
  const [step2Image, setStep2Image] = useState(step2ImgFile);
  const [step3Image, setStep3Image] = useState(step3ImgFile);
  const [step4Image, setStep4Image] = useState(step4ImgFile);
  const [ctaImage, setCtaImage] = useState(ctaImg);

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setter(URL.createObjectURL(file));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="guidelines-container">
        <div
          className="guidelinesheading"
          contentEditable={isEditMode}
          suppressContentEditableWarning
        >
          <h1>Guidelines</h1>
          <p>
            These guidelines outline our standards, expectations, and best
            practices to ensure consistent, high-quality work across every
            project.
          </p>
        </div>

        <div className="guidelines_timeline">
          {guidelinesData.map((item, index) => (
            <div
              key={item.id}
              className={`guidelines_timeline-item ${
                index % 2 === 0 ? "left" : "right"
              } ${activeId === item.id ? "active" : ""}`}
              onClick={() => setActiveId(item.id)}
            >
              <div className="guidelines_timeline-marker">
                <span className="guidelines_number">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>

              <div
                className="guidelines_timeline-content"
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onInput={(e) =>
                  handleTextChange(
                    item.id,
                    "description",
                    e.target.innerText
                  )
                }
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section
        className="core-services-section"
        contentEditable={isEditMode}
        suppressContentEditableWarning
      >
        <h2 className="core-services-title">Our Core services</h2>

        <div className="core-services-grid">
          {coreServices.map((service, index) => (
            <article className="core-service-card" key={index}>
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

              <button className="core-service-link" type="button">
                <span>Learn More</span>
                <span className="core-service-link-arrow">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        className="cs-cta"
        contentEditable={isEditMode}
        suppressContentEditableWarning
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
    </>
  );
};

export default Guidelines;
