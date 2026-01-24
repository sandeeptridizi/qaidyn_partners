import React, { useEffect } from "react";
import "./Promotions.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeFooter from "../../components/Footer1/footerHome.jsx";import EditableButton from "../../components/Editable/EditableButton.jsx";import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";

import heroImg from "../../assets/promotions/image 3.png";
import featureImg from "../../assets/promotions/Group 1304.png";
import australiaImg from "../../assets/promotions/Australia.png";
import australiaFlag from "../../assets/promotions/Australiaflag.png";
import ctaImg from "../../assets/promotions/image 3.png";
import Icon1 from "../../assets/AboutUs/aboutIcon.png";
import Icon4 from "../../assets/AboutUs/aboutIcon4.png";
import Icon2 from "../../assets/AboutUs/aboutIcon2.png";
import Icon3 from "../../assets/AboutUs/aboutIcon3.png";
import walmartLogo from "../../assets/walmart.png";

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

const Promotions = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Icon1, number: "100+", label: "Employees working" },
    { icon: Icon4, number: "2 Million", label: "Data Stored in Cloud" },
    { icon: Icon2, number: "50+", label: "Countries" },
    { icon: Icon3, number: "100+", label: "Clients" },
  ];

  return (
    <div className="promotions-page">
      <Navbar />

      <main className="promotions-main">
        <section className="promotions-hero">
          <div className="promotions-hero-inner">
            <div className="promotions-hero-left">
              <EditableText
                as="h1"
                className="promotions-hero-heading"
                contentKey="promotions.hero.title"
                defaultValue="Unlock Exclusive Managed IT Savings"
                useHtml={true}
              />
              <EditableText
                as="p"
                className="promotions-hero-text"
                contentKey="promotions.hero.description"
                defaultValue="Unlock reliable, secure, and scalable IT support at a special promotional price. Keep your systems running smoothly while we handle the complexity behind the scenes."
              />
              <EditableButton
                contentKey="promotions.hero.getStarted.button"
                defaultValue="Get Started"
                className="promotions-btn-primary"
                onClick={onOpenContact}
              />
            </div>
            <div className="promotions-hero-right">
              <EditableImage
                contentKey="promotions.hero.image"
                defaultValue={heroImg}
                alt="Promotions hero"
                className="promotions-hero-image"
              />
            </div>
          </div>
        </section>

        <section className="success-process-section">
          <div className="success-left">
            <div>
              <EditableText
                as="h2"
                className="success-title"
                contentKey="promotions.success.title"
                defaultValue="Our 10 years of Success"
              />
              <EditableText
                as="p"
                className="success-sub"
                contentKey="promotions.success.subtitle"
                defaultValue="With our super powers we have reached this"
              />
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <img src={stat.icon} alt="" />
                  <div className="stat-text">
                    <EditableText
                      as="div"
                      className="stat-number"
                      contentKey={`promotions.stat.${index}.number`}
                      defaultValue={stat.number}
                    />
                    <EditableText
                      as="div"
                      className="stat-label"
                      contentKey={`promotions.stat.${index}.label`}
                      defaultValue={stat.label}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="promotions-feature">
          <div className="promotions-feature-inner">
            <div className="promotions-feature-left">
              <EditableImage
                contentKey="promotions.feature.image"
                defaultValue={featureImg}
                alt="Feature"
                className="promotions-feature-image"
              />
            </div>
            <div className="promotions-feature-right">
              <EditableText
                as="h2"
                className="promotions-feature-heading"
                contentKey="promotions.feature.title"
                defaultValue="Transform Your Business with Expert Managed IT"
                useHtml={true}
              />
              <EditableText
                as="p"
                className="promotions-feature-text"
                contentKey="promotions.feature.description"
                defaultValue="Boost productivity, reduce downtime, and secure your operations with our end-to-end Managed IT Services"
              />
              <ul className="promotions-feature-list">
                <EditableText
                  as="li"
                  contentKey="promotions.feature.item.0"
                  defaultValue="Proactive Monitoring"
                />
                <EditableText
                  as="li"
                  contentKey="promotions.feature.item.1"
                  defaultValue="Enhanced Security"
                />
                <EditableText
                  as="li"
                  contentKey="promotions.feature.item.2"
                  defaultValue="Scalable Support"
                />
                <EditableText
                  as="li"
                  contentKey="promotions.feature.item.3"
                  defaultValue="Cost-Effective Plans"
                />
              </ul>
            </div>
          </div>
        </section>

        <section className="promotions-map-section">
          <div className="promotions-map-wrapper">
            <div className="promotions-map-heading">
              <EditableText
                as="h2"
                className="promotions-map-title"
                contentKey="promotions.map.title"
                defaultValue="Your Trusted IT Partner Across Australia"
              />
              <EditableText
                as="p"
                className="promotions-map-title-accent"
                contentKey="promotions.map.company"
                defaultValue="Qaidyn Partners"
              />
            </div>

            <EditableText
              as="p"
              className="promotions-map-desc"
              contentKey="promotions.map.description"
              defaultValue="Delivering reliable, secure, and future-ready IT services to businesses across every corner of Australia."
            />

            <div className="promotions-map-inner">
              <EditableImage
                contentKey="promotions.map.image"
                defaultValue={australiaImg}
                alt="Australia map"
                className="promotions-map-image"
              />

              <div className="promotions-map-flag-wrap">
                <img
                  src={australiaFlag}
                  alt="Australia flag"
                  className="promotions-map-flag"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="logos-section" aria-label="Client logos">
          <div className="logos-wrapper">
            <div className="logos-track">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div
                  key={index}
                  className={`logo-item ${logo.alt?.toLowerCase() || ""}`}
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

        <section className="promotions-cta-banner">
          <div className="promotions-cta-inner">
            <div className="promotions-cta-text">
              <EditableText
                as="h2"
                className="promotions-cta-heading"
                contentKey="promotions.cta.title"
                defaultValue="Let's Build a Smarter, Secure IT Future Together"
                useHtml={true}
              />
              <EditableText
                as="p"
                className="promotions-cta-desc"
                contentKey="promotions.cta.description"
                defaultValue="Have a question or need expert support? Reach out to our team today—we're here to provide fast, reliable guidance and the right IT solutions for your business."
              />
              <EditableButton
                contentKey="promotions.cta.knowMore.button"
                defaultValue="Know more"
                className="promotions-cta-btn"
                onClick={onOpenContact}
              />
            </div>
            <div className="promotions-cta-image-wrap">
              <EditableImage
                contentKey="promotions.cta.image"
                defaultValue={ctaImg}
                alt="CTA illustration"
                className="promotions-cta-image"
              />
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
};

const PromotionsWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <Promotions onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default PromotionsWrapper;
