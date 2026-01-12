import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./HelpdeskSupport.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import { servicesData } from "../Services/servicesData.js";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";

import serviceImg0 from "../../assets/service.png";
import serviceImg1 from "../../assets/service1.png";
import serviceImg2 from "../../assets/service2.png";
import serviceImg3 from "../../assets/service3.png";
import serviceImg4 from "../../assets/service4.png";
import walmartLogo from "../../assets/walmart.png";

const ServicePage = ({ onOpenContact }) => {
  const { category, slug } = useParams();

  const service = servicesData.find(
    (item) => item.category === category && item.slug === slug
  );

  const relatedServiceImages = [
    serviceImg1,
    serviceImg0,
    serviceImg2,
    serviceImg4,
    serviceImg3,
  ];

  const splitTitle = (title) => {
    if (title.includes("&")) {
      const [first, second] = title.split("&");
      return {
        first: first.trim(),
        second: second.trim(),
        hasAmp: true,
      };
    }

    const words = title.split(" ");
    const mid = Math.ceil(words.length / 2);

    return {
      first: words.slice(0, mid).join(" "),
      second: words.slice(mid).join(" "),
      hasAmp: false,
    };
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category, slug]);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="helpdesk-page">
          <div style={{ paddingTop: "140px", paddingInline: "24px" }}>
            <h2>Service not found</h2>
            <p>Please check the URL or select a service from the menu.</p>
          </div>
        </main>
        <HomeFooter />
      </>
    );
  }

  const { hero, brands, process, twoColumn, cta, testimonial } = service;

  const relatedServices = servicesData.filter(
    (item) => item.category === category && item.slug !== slug
  );

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

  // Create unique content key prefix for this service
  const contentPrefix = `service.${category}.${slug}`;

  return (
    <>
      <Navbar />

      <main className="helpdesk-page">
        <section className="helpdesk-hero">
          <div className="helpdesk-hero-inner">
            <div className="helpdesk-hero-left">
              <EditableText
                as="h1"
                className="helpdesk-hero-title"
                contentKey={`${contentPrefix}.hero.title`}
                defaultValue={hero.title}
              />

              <ul className="helpdesk-hero-list">
                {hero.bullets.map((item, index) => (
                  <EditableText
                    key={index}
                    as="li"
                    contentKey={`${contentPrefix}.hero.bullet.${index}`}
                    defaultValue={item}
                  />
                ))}
              </ul>

              <div className="helpdesk-desc-wrapper">
                <div className="helpdesk-desc-line"></div>
                <EditableText
                  as="p"
                  className="helpdesk-hero-desc"
                  contentKey={`${contentPrefix}.hero.desc`}
                  defaultValue={hero.desc}
                />
              </div>

              <EditableButton
                contentKey={`${contentPrefix}.hero.getStarted.button`}
                defaultValue="Get Started"
                className="helpdesk-primary-btn"
                onClick={onOpenContact}
              />
            </div>

            <div className="helpdesk-hero-right">
              <div className="helpdesk-hero-circle">
                <EditableImage
                  contentKey={`${contentPrefix}.hero.image`}
                  defaultValue={hero.image}
                  alt={hero.title}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="helpdesk-brands">
          <EditableText
            as="p"
            className="helpdesk-brands-label"
            contentKey={`${contentPrefix}.brands.label`}
            defaultValue={brands.label}
          />

          <section className="logos-section">
            <div className="logos-wrapper">
              <div className="logos-track">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <div key={index} className={`logo-item ${logo.brand || ""}`}>
                    <img src={logo.src} alt={logo.alt || "Brand logo"} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="helpdesk-process">
          <div className="helpdesk-process-inner">
            <EditableText
              as="h2"
              className="helpdesk-section-title"
              contentKey={`${contentPrefix}.process.title`}
              defaultValue={process.title}
            />
            <EditableText
              as="p"
              className="helpdesk-section-subtitle"
              contentKey={`${contentPrefix}.process.subtitle`}
              defaultValue={process.subtitle}
            />

            <div className="helpdesk-process-grid">
              <div className="helpdesk-process-col">
                {process.leftCards.map((card, idx) => {
                  const { first, second, hasAmp } = splitTitle(card.title);

                  return (
                    <div className="helpdesk-process-card" key={idx}>
                      <div className="helpdesk-process-icon">
                        <img src={card.icon} alt={card.title} />
                      </div>

                      <h3 className="helpdesk-process-title">
                        <EditableText
                          as="span"
                          className="before"
                          contentKey={`${contentPrefix}.process.left.${idx}.title.first`}
                          defaultValue={first}
                        />
                        {hasAmp && <span className="amp"> & </span>}
                        <EditableText
                          as="span"
                          className="after"
                          contentKey={`${contentPrefix}.process.left.${idx}.title.second`}
                          defaultValue={second}
                        />
                      </h3>

                      <EditableText
                        as="p"
                        contentKey={`${contentPrefix}.process.left.${idx}.text`}
                        defaultValue={card.text}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="helpdesk-process-center-image">
                <EditableImage
                  contentKey={`${contentPrefix}.process.centerImage`}
                  defaultValue={process.centerImage}
                  alt="Process"
                />
              </div>

              <div className="helpdesk-process-col">
                {process.rightCards.map((card, idx) => {
                  const { first, second, hasAmp } = splitTitle(card.title);

                  return (
                    <div className="helpdesk-process-card" key={idx}>
                      <div className="helpdesk-process-icon">
                        <img src={card.icon} alt={card.title} />
                      </div>

                      <h3 className="helpdesk-process-title">
                        <EditableText
                          as="span"
                          className="before"
                          contentKey={`${contentPrefix}.process.right.${idx}.title.first`}
                          defaultValue={first}
                        />
                        {hasAmp && <span className="amp"> & </span>}
                        <EditableText
                          as="span"
                          className="after"
                          contentKey={`${contentPrefix}.process.right.${idx}.title.second`}
                          defaultValue={second}
                        />
                      </h3>

                      <EditableText
                        as="p"
                        contentKey={`${contentPrefix}.process.right.${idx}.text`}
                        defaultValue={card.text}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="helpdesk-two-column">
          <div className="helpdesk-two-column-inner">
            <div className="helpdesk-two-header">
              <EditableText
                as="h2"
                className="helpdesk-two-title"
                contentKey={`${contentPrefix}.twoColumn.title`}
                defaultValue={twoColumn.title}
              />
              <EditableText
                as="p"
                className="helpdesk-two-subtitle"
                contentKey={`${contentPrefix}.twoColumn.subtitle`}
                defaultValue={twoColumn.subtitle}
              />
            </div>

            <div className="helpdesk-two-body">
              <ul className="helpdesk-feature-list">
                {twoColumn.items.map((item, index) => (
                  <li className="helpdesk-feature-item" key={index}>
                    <div className="helpdesk-feature-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="helpdesk-feature-content">
                      <EditableText
                        as="h4"
                        contentKey={`${contentPrefix}.twoColumn.item.${index}.title`}
                        defaultValue={item.title}
                      />
                      <EditableText
                        as="p"
                        contentKey={`${contentPrefix}.twoColumn.item.${index}.text`}
                        defaultValue={item.text}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="helpdesk-two-right">
                <EditableImage
                  contentKey={`${contentPrefix}.twoColumn.image`}
                  defaultValue={twoColumn.image}
                  alt="Discussion"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="helpdesk-cta">
          <div className="helpdesk-cta-inner">
            <div className="helpdesk-cta-text">
              <EditableText
                as="h2"
                contentKey={`${contentPrefix}.cta.title`}
                defaultValue={cta.title}
              />
              <EditableText
                as="p"
                contentKey={`${contentPrefix}.cta.text`}
                defaultValue={cta.text}
              />
            </div>
            <div className="helpdesk-cta-actions">
              <EditableButton
                contentKey={`${contentPrefix}.cta.primaryLabel`}
                defaultValue={cta.primaryLabel}
                className="helpdesk-primary-btn small"
                onClick={onOpenContact}
              />
              <EditableButton
                contentKey={`${contentPrefix}.cta.secondaryLabel`}
                defaultValue={cta.secondaryLabel}
                className="helpdesk-secondary-btn small"
              />
            </div>
          </div>
        </section>

        <section className="helpdesk-related">
          <div className="helpdesk-related-inner">
            <EditableText
              as="h2"
              className="helpdesk-section-title center"
              contentKey={`${contentPrefix}.related.title`}
              defaultValue="Related Services"
            />

            <div className="helpdesk-related-grid">
              {relatedServices.map((item, index) => (
                <div className="helpdesk-related-card" key={item.slug}>
                  <div className="helpdesk-related-icon">
                    <img
                      src={
                        relatedServiceImages[
                        index % relatedServiceImages.length
                        ]
                      }
                      alt={item.title}
                    />
                  </div>

                  <EditableText
                    as="h3"
                    contentKey={`service.${item.category}.${item.slug}.hero.title`}
                    defaultValue={item.title}
                  />
                  <EditableText
                    as="p"
                    contentKey={`service.${item.category}.${item.slug}.hero.desc`}
                    defaultValue={item.hero?.desc}
                  />

                  <Link
                    to={`/services/${item.category}/${item.slug}`}
                    className="helpdesk-link-btn"
                  >
                    Learn More <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="helpdesk-testimonial">
          <div className="helpdesk-testimonial-inner">
            <div className="helpdesk-testimonial-left">
              <EditableText
                as="h2"
                className="helpdesk-testimonial-title"
                contentKey={`${contentPrefix}.testimonial.sectionTitle`}
                defaultValue={testimonial.sectionTitle}
              />

              <EditableText
                as="p"
                className="helpdesk-testimonial-subtitle"
                contentKey={`${contentPrefix}.testimonial.sectionSubtitle`}
                defaultValue={testimonial.sectionSubtitle}
              />

              <div className="helpdesk-slider-controls">
                <button className="helpdesk-slider-btn">←</button>
                <button className="helpdesk-slider-btn">→</button>
              </div>
            </div>

            <div className="helpdesk-testimonial-card">
              <div className="helpdesk-testimonial-image">
                <EditableImage
                  contentKey={`${contentPrefix}.testimonial.photo`}
                  defaultValue={testimonial.photo}
                  alt={testimonial.name}
                />
              </div>

              <div className="helpdesk-testimonial-texts">
                <EditableText
                  as="h3"
                  className="helpdesk-testimonial-name"
                  contentKey={`${contentPrefix}.testimonial.name`}
                  defaultValue={testimonial.name}
                />
                <EditableText
                  as="p"
                  className="helpdesk-testimonial-role"
                  contentKey={`${contentPrefix}.testimonial.role`}
                  defaultValue={testimonial.role}
                />

                <img
                  src={testimonial.stars}
                  alt="rating"
                  className="helpdesk-testimonial-stars"
                />

                <EditableText
                  as="p"
                  className="helpdesk-testimonial-quote"
                  contentKey={`${contentPrefix}.testimonial.quote`}
                  defaultValue={testimonial.quote}
                />
              </div>

              <div className="helpdesk-testimonial-quote-pill">
                <img
                  src={testimonial.quoteIcon}
                  alt="Quote"
                  className="helpdesk-testimonial-quote-icon"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </>
  );
};

const ServicePageWrapper = ({ onOpenContact }) => {
  return (
    <HomeContentProvider>
      <ServicePage onOpenContact={onOpenContact} />
    </HomeContentProvider>
  );
};

export default ServicePageWrapper;

