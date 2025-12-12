// src/pages/Services/ServicePage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./HelpdeskSupport.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";

import { servicesData } from "../Services/servicesData.js";

// 🔥 global edit mode
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const ServicePage = ({ onOpenContact }) => {
  const { category, slug } = useParams();
  const { isEditMode } = useEditMode();

  const service = servicesData.find(
    (item) => item.category === category && item.slug === slug
  );

  // 🖼️ local image state (so we can change images in edit mode)
  const [heroImage, setHeroImage] = useState(null);
  const [brandsImage, setBrandsImage] = useState(null);
  const [processCenterImage, setProcessCenterImage] = useState(null);
  const [twoColumnImage, setTwoColumnImage] = useState(null);
  const [testimonialPhoto, setTestimonialPhoto] = useState(null);

  // when route (category/slug) changes, go to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category, slug]);

  // when service changes (other page), reset image state from data
  useEffect(() => {
    if (!service) return;
    setHeroImage(service.hero.image);
    setBrandsImage(service.brands.image);
    setProcessCenterImage(service.process.centerImage);
    setTwoColumnImage(service.twoColumn.image);
    setTestimonialPhoto(service.testimonial.photo);
  }, [service]);

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter(url);
  };

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
        <Footer />
      </>
    );
  }

  const { hero, brands, process, twoColumn, cta, testimonial } = service;

  const relatedServices = servicesData.filter(
    (item) => item.category === category && item.slug !== slug
  );

  return (
    <>
      <Navbar />

      <main className="helpdesk-page">
        {/* HERO */}
        <section
          className="helpdesk-hero"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-hero-inner">
            <div className="helpdesk-hero-left">
              <h1 className="helpdesk-hero-title">{hero.title}</h1>

              <ul className="helpdesk-hero-list">
                {hero.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="helpdesk-hero-desc">{hero.desc}</p>

              <button
                type="button"
                className="helpdesk-primary-btn"
                onClick={onOpenContact}
              >
                Get Started <span className="helpdesk-btn-arrow">→</span>
              </button>
            </div>

            <div className="helpdesk-hero-right">
              <div className="helpdesk-hero-circle">
                <img src={heroImage || hero.image} alt={hero.title} />
              </div>

              {isEditMode && (
                <div className="helpdesk-image-upload">
                  <label className="helpdesk-upload-label">
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

        {/* BRAND STRIP */}
        <section
          className="helpdesk-brands"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <p className="helpdesk-brands-label">{brands.label}</p>
          <img
            src={brandsImage || brands.image}
            alt="Trusted brands"
            className="helpdesk-brands-img"
          />

          {isEditMode && (
            <div className="helpdesk-image-upload">
              <label className="helpdesk-upload-label">
                Change Brands Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(setBrandsImage)}
                />
              </label>
            </div>
          )}
        </section>

        {/* PROCESS SECTION */}
        <section
          className="helpdesk-process"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-process-inner">
            <h2 className="helpdesk-section-title">{process.title}</h2>
            <p className="helpdesk-section-subtitle">{process.subtitle}</p>

            <div className="helpdesk-process-grid">
              <div className="helpdesk-process-col">
                {process.leftCards.map((card, idx) => (
                  <div className="helpdesk-process-card" key={idx}>
                    <div className="helpdesk-process-icon">
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>

              <div className="helpdesk-process-center-image">
                <img
                  src={processCenterImage || process.centerImage}
                  alt="Process"
                />
                {isEditMode && (
                  <div className="helpdesk-image-upload">
                    <label className="helpdesk-upload-label">
                      Change Process Image:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange(setProcessCenterImage)}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="helpdesk-process-col">
                {process.rightCards.map((card, idx) => (
                  <div className="helpdesk-process-card" key={idx}>
                    <div className="helpdesk-process-icon">
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TWO COLUMN */}
        <section
          className="helpdesk-two-column"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-two-column-inner">
            <div className="helpdesk-two-header">
              <h2 className="helpdesk-two-title">{twoColumn.title}</h2>
              <p className="helpdesk-two-subtitle">{twoColumn.subtitle}</p>
            </div>

            <div className="helpdesk-two-body">
              <ul className="helpdesk-feature-list">
                {twoColumn.items.map((item, index) => (
                  <li className="helpdesk-feature-item" key={index}>
                    <div className="helpdesk-feature-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="helpdesk-feature-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="helpdesk-two-right">
                <img
                  src={twoColumnImage || twoColumn.image}
                  alt="Discussion"
                />

                {isEditMode && (
                  <div className="helpdesk-image-upload">
                    <label className="helpdesk-upload-label">
                      Change Two-Column Image:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange(setTwoColumnImage)}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="helpdesk-cta"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-cta-inner">
            <div className="helpdesk-cta-text">
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>
            <div className="helpdesk-cta-actions">
              <button
                type="button"
                className="helpdesk-primary-btn small"
                onClick={onOpenContact}
              >
                {cta.primaryLabel}
              </button>
              <button className="helpdesk-secondary-btn small" type="button">
                {cta.secondaryLabel}
              </button>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          className="helpdesk-related"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-related-inner">
            <h2 className="helpdesk-section-title center">Related Services</h2>

            <div className="helpdesk-related-grid">
              {relatedServices.map((item) => (
                <div className="helpdesk-related-card" key={item.slug}>
                  <div className="helpdesk-related-icon" />
                  <h3>{item.title}</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce pulvinar, sapien ac facilisis gravida, velit arcu
                    consequat.
                  </p>

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

        {/* TESTIMONIAL */}
        <section
          className="helpdesk-testimonial"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="helpdesk-testimonial-inner">
            <div className="helpdesk-testimonial-left">
              <h2 className="helpdesk-testimonial-title">
                {testimonial.sectionTitle}
              </h2>

              <p className="helpdesk-testimonial-subtitle">
                {testimonial.sectionSubtitle}
              </p>

              <div className="helpdesk-slider-controls">
                <button className="helpdesk-slider-btn">←</button>
                <button className="helpdesk-slider-btn">→</button>
              </div>
            </div>

            <div className="helpdesk-testimonial-card">
              <div className="helpdesk-testimonial-image">
                <img
                  src={testimonialPhoto || testimonial.photo}
                  alt={testimonial.name}
                />

                {isEditMode && (
                  <div className="helpdesk-image-upload">
                    <label className="helpdesk-upload-label">
                      Change Testimonial Photo:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange(setTestimonialPhoto)}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="helpdesk-testimonial-texts">
                <h3 className="helpdesk-testimonial-name">
                  {testimonial.name}
                </h3>
                <p className="helpdesk-testimonial-role">
                  {testimonial.role}
                </p>

                <img
                  src={testimonial.stars}
                  alt="rating"
                  className="helpdesk-testimonial-stars"
                />

                <p className="helpdesk-testimonial-quote">
                  {testimonial.quote}
                </p>
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

      <Footer />
    </>
  );
};

export default ServicePage;
