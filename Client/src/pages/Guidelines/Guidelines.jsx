import React, { useEffect, useState } from "react";
import "./Guidelines.css";
import "../casestudies/CaseStudies.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import ctaImg from "../../assets/casestudies/image 3.png";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const guidelinesData = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic...",
  },
  {
    id: 2,
    title: "React Developer",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React. Building reusable UI components...",
  },
  {
    id: 3,
    title: "Flutter Developer",
    description:
      "Primary Responsibility: Designing and implementing cross-platform mobile applications using Flutter. Building beautiful, natively compiled apps...",
  },
  {
    id: 4,
    title: "Php Developer",
    description:
      "Primary Responsibility: Building and maintaining backend systems using PHP and frameworks like Laravel or Symfony. Developing RESTful APIs...",
  },
  {
    id: 5,
    title: "Mern Stack Developer",
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
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="guidelines-container">
        <div className="guidelinesheading">
          <EditableText
            as="h1"
            contentKey="guidelines.hero.title"
            defaultValue="Guidelines"
          />
          <EditableText
            as="p"
            contentKey="guidelines.hero.description"
            defaultValue="These guidelines outline our standards, expectations, and best practices to ensure consistent, high-quality work across every project."
          />
        </div>

        <div className="guidelines_timeline">
          {guidelinesData.map((item, index) => (
            <div
              key={item.id}
              className={`guidelines_timeline-item ${index % 2 === 0 ? "left" : "right"
                } ${activeId === item.id ? "active" : ""}`}
              onClick={() => setActiveId(item.id)}
            >
              <div className="guidelines_timeline-marker">
                <span className="guidelines_number">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>

              <div className="guidelines_timeline-content">
                <EditableText
                  as="h3"
                  contentKey={`guidelines.item.${index}.title`}
                  defaultValue={item.title}
                />
                <EditableText
                  as="p"
                  contentKey={`guidelines.item.${index}.description`}
                  defaultValue={item.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="core-services-section">
        <EditableText
          as="h2"
          className="core-services-title"
          contentKey="guidelines.services.title"
          defaultValue="Our Core services"
        />

        <div className="core-services-grid">
          {coreServices.map((service, index) => (
            <article className="core-service-card" key={index}>
              <div className="core-service-header">
                <div className="core-service-icon-wrap">
                  <EditableImage
                    contentKey={`guidelines.service.${index}.icon`}
                    defaultValue={service.icon}
                    alt={service.title}
                    className="core-service-icon"
                  />
                </div>

                <EditableText
                  as="h3"
                  className="core-service-name"
                  contentKey={`guidelines.service.${index}.title`}
                  defaultValue={service.title}
                />
              </div>

              <EditableText
                as="p"
                className="core-service-text"
                contentKey={`guidelines.service.${index}.description`}
                defaultValue={service.description}
              />

              <EditableButton
                contentKey={`guidelines.service.${index}.learnMore.button`}
                defaultValue="Learn More"
                className="core-service-link"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="cs-cta">
        <div className="cs-container cs-cta-inner">
          <div className="cs-cta-left">
            <EditableText
              as="h2"
              contentKey="guidelines.cta.title"
              defaultValue="Let’s Build a Smarter, Secure IT Future Together"
            />
            <EditableText
              as="p"
              contentKey="guidelines.cta.description"
              defaultValue="Have a question or need expert support? Reach out to our team today—we’re here to provide fast, reliable guidance and the right IT solutions for your business."
            />
            <EditableButton
              contentKey="guidelines.cta.knowMore.button"
              defaultValue="Know more"
              className="cs-btn-white"
              onClick={onOpenContact}
            />
          </div>

          <div className="cs-cta-right">
            <EditableImage
              contentKey="guidelines.cta.image"
              defaultValue={ctaImg}
              alt="CTA"
            />
          </div>
        </div>
      </section>

      <HomeFooter />
    </>
  );
};

const GuidelinesWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <Guidelines onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default GuidelinesWrapper;
