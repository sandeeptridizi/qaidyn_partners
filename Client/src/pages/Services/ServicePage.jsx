import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './HelpdeskSupport.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import HomeFooter from '../../components/Footer1/footerHome.jsx';
import { servicesData } from '../Services/servicesData.js';
import { useEditMode } from '../../components/context/EditModeContext.jsx';

import serviceImg0 from '../../assets/service.png';
import serviceImg1 from '../../assets/service1.png';
import serviceImg2 from '../../assets/service2.png';
import serviceImg3 from '../../assets/service3.png';
import serviceImg4 from '../../assets/service4.png';
import { HomeContentProvider } from '../../hooks/useHomeContent.jsx';
import walmartLogo from '../../assets/walmart.png';
import EditableText from '../../components/Editable/EditableText.jsx';
import heroImage from '../../assets/hero/backup.png';
import brandsImage from '../../assets/services/Frame 6.png';
import processCenterImage from '../../assets/services/Image Container.png';
import twoColumnImage from '../../assets/services/Image.png';
import testimonialPhoto from '../../assets/services/Image (1).png';

const ServicePage = ({ onOpenContact }) => {
  const { category, slug } = useParams();
  const { isEditMode } = useEditMode();

  const service = servicesData.find(
    (item) => item.category === category && item.slug === slug,
  );

  const relatedServiceImages = [
    serviceImg1,
    serviceImg0,
    serviceImg2,
    serviceImg4,
    serviceImg3,
  ];

  const splitTitle = (title) => {
    if (title.includes('&')) {
      const [first, second] = title.split('&');
      return {
        first: first.trim(),
        second: second.trim(),
        hasAmp: true,
      };
    }

    const words = title.split(' ');
    const mid = Math.ceil(words.length / 2);

    return {
      first: words.slice(0, mid).join(' '),
      second: words.slice(mid).join(' '),
      hasAmp: false,
    };
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [category, slug]);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className='helpdesk-page'>
          <div style={{ paddingTop: '140px', paddingInline: '24px' }}>
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
    (item) => item.category === category && item.slug !== slug,
  );

  const companyLogos = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
      alt: 'Airbnb',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
      alt: 'HubSpot',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      alt: 'Google',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      alt: 'Microsoft',
    },
    { src: walmartLogo, alt: 'Walmart' },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg',
      alt: 'FedEx',
    },
  ];

  // Create unique content key prefix for this service
  const contentPrefix = `service.${category}.${slug}`;

  return (
    <>
      <Navbar />

      <main className='helpdesk-page'>
        <section
          className='helpdesk-hero'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-hero-inner'>
            <div className='helpdesk-hero-left'>
              <h1 className='helpdesk-hero-title'>{hero.title}</h1>

              <ul className='helpdesk-hero-list'>
                {hero.bullets.map((item, index) => (
                  <EditableText
                    key={index}
                    as='li'
                    contentKey={`${contentPrefix}.hero.bullet.${index}`}
                    defaultValue={item}
                  />
                ))}
              </ul>

              <div className='helpdesk-desc-wrapper'>
                <div className='helpdesk-desc-line'></div>
                <p className='helpdesk-hero-desc'>{hero.desc}</p>
              </div>

              <button
                type='button'
                className='helpdesk-primary-btn'
                onClick={onOpenContact}
              >
                Get Started <span className='helpdesk-btn-arrow'>→</span>
              </button>
            </div>

            <div className='helpdesk-hero-right'>
              <div className='helpdesk-hero-circle'>
                <img src={heroImage || hero.image} alt={hero.title} />
              </div>

              {isEditMode && (
                <div className='helpdesk-image-upload'>
                  <label className='helpdesk-upload-label'>
                    Change Hero Image:
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange(setHeroImage)}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          className='helpdesk-brands'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <p className='helpdesk-brands-label'>{brands.label}</p>

          {/* 🔥 Centered container for left & right page gap */}
          <div className='helpdesk-brands-container'>
            <div className='helpdesk-brands-scroll'>
              <img
                src={brandsImage || brands.image}
                alt='Trusted brands'
                className='helpdesk-brands-img'
              />
            </div>
          </div>

          {isEditMode && (
            <div className='helpdesk-image-upload'>
              <label className='helpdesk-upload-label'>
                Change Brands Image:
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange(setBrandsImage)}
                />
              </label>
            </div>
          )}
        </section>

        <section
          className='helpdesk-process'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-process-inner'>
            <h2 className='helpdesk-section-title'>{process.title}</h2>
            <p className='helpdesk-section-subtitle'>{process.subtitle}</p>

            <div className='helpdesk-process-grid'>
              {/* LEFT CARDS */}
              <div className='helpdesk-process-col'>
                {process.leftCards.map((card, idx) => {
                  const { first, second, hasAmp } = splitTitle(card.title);

                  return (
                    <div className='helpdesk-process-card' key={idx}>
                      <div className='helpdesk-process-icon'>
                        <img src={card.icon} alt={card.title} />
                      </div>

                      <h3 className='helpdesk-process-title'>
                        <span className='before'>{first}</span>
                        {hasAmp && <span className='amp'> & </span>}
                        <span className='after'>{second}</span>
                      </h3>

                      <p>{card.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className='helpdesk-process-center-image'>
                <img
                  src={processCenterImage || process.centerImage}
                  alt='Process'
                />

                {isEditMode && (
                  <div className='helpdesk-image-upload'>
                    <label className='helpdesk-upload-label'>
                      Change Process Image:
                      <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange(setProcessCenterImage)}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className='helpdesk-process-col'>
                {process.rightCards.map((card, idx) => {
                  const { first, second, hasAmp } = splitTitle(card.title);

                  return (
                    <div className='helpdesk-process-card' key={idx}>
                      <div className='helpdesk-process-icon'>
                        <img src={card.icon} alt={card.title} />
                      </div>

                      <h3 className='helpdesk-process-title'>
                        <span className='before'>{first}</span>
                        {hasAmp && <span className='amp'> & </span>}
                        <span className='after'>{second}</span>
                      </h3>

                      <p>{card.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          className='helpdesk-two-column'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-two-column-inner'>
            <div className='helpdesk-two-header'>
              <h2 className='helpdesk-two-title'>{twoColumn.title}</h2>
              <p className='helpdesk-two-subtitle'>{twoColumn.subtitle}</p>
            </div>

            <div className='helpdesk-two-body'>
              <ul className='helpdesk-feature-list'>
                {twoColumn.items.map((item, index) => (
                  <li className='helpdesk-feature-item' key={index}>
                    <div className='helpdesk-feature-icon'>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className='helpdesk-feature-content'>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className='helpdesk-two-right'>
                <img src={twoColumnImage || twoColumn.image} alt='Discussion' />

                {isEditMode && (
                  <div className='helpdesk-image-upload'>
                    <label className='helpdesk-upload-label'>
                      Change Two-Column Image:
                      <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange(setTwoColumnImage)}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          className='helpdesk-cta'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-cta-inner'>
            <div className='helpdesk-cta-text'>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>
            <div className='helpdesk-cta-actions'>
              <button
                type='button'
                className='helpdesk-primary-btn small'
                onClick={onOpenContact}
              >
                {cta.primaryLabel}
              </button>
              <button className='helpdesk-secondary-btn small' type='button'>
                {cta.secondaryLabel}
              </button>
            </div>
          </div>
        </section>

        <section className='helpdesk-related'>
          <div className='helpdesk-related-inner'>
            <h2 className='helpdesk-section-title center'>Related Services</h2>

            <div className='helpdesk-related-grid'>
              {relatedServices.map((item, index) => (
                <div className='helpdesk-related-card' key={item.slug}>
                  <div className='helpdesk-related-icon'>
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
                    as='h3'
                    contentKey={`service.${item.category}.${item.slug}.hero.title`}
                    defaultValue={item.title}
                  />
                  <EditableText
                    as='p'
                    contentKey={`service.${item.category}.${item.slug}.hero.desc`}
                    defaultValue={item.hero?.desc}
                  />

                  <Link
                    to={`/services/${item.category}/${item.slug}`}
                    className='helpdesk-link-btn'
                  >
                    Learn More <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className='helpdesk-testimonial'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-testimonial-inner'>
            <div className='helpdesk-testimonial-left'>
              <h2 className='helpdesk-testimonial-title'>
                {testimonial.sectionTitle}
              </h2>

              <p className='helpdesk-testimonial-subtitle'>
                {testimonial.sectionSubtitle}
              </p>

              <div className='helpdesk-slider-controls'>
                <button className='helpdesk-slider-btn'>←</button>
                <button className='helpdesk-slider-btn'>→</button>
              </div>
            </div>

            <div className='helpdesk-testimonial-card'>
              <div className='helpdesk-testimonial-image'>
                <img
                  src={testimonialPhoto || testimonial.photo}
                  alt={testimonial.name}
                />

                {isEditMode && (
                  <div className='helpdesk-image-upload'>
                    <label className='helpdesk-upload-label'>
                      Change Testimonial Photo:
                      <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange(setTestimonialPhoto)}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className='helpdesk-testimonial-texts'>
                <h3 className='helpdesk-testimonial-name'>
                  {testimonial.name}
                </h3>
                <p className='helpdesk-testimonial-role'>{testimonial.role}</p>

                <img
                  src={testimonial.stars}
                  alt='rating'
                  className='helpdesk-testimonial-stars'
                />

                <p className='helpdesk-testimonial-quote'>
                  {testimonial.quote}
                </p>
              </div>

              <div className='helpdesk-testimonial-quote-pill'>
                <img
                  src={testimonial.quoteIcon}
                  alt='Quote'
                  className='helpdesk-testimonial-quote-icon'
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
