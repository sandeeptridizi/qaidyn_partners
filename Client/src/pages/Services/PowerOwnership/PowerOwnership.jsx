import HomeFooter from '../../../components/Footer1/footerHome';
import Navbar from '../../../components/Navbar/Navbar';
import './PowerOwnership.css';

import settings from '../../../assets/services/Frame 18 (1).png';
import message from '../../../assets/services/Frame 18.png';
import people from '../../../assets/services/Frame 18 (2).png';
import stars from '../../../assets/services/Stars.png';

import { useEditMode } from '../../../components/context/EditModeContext';
import twoColumnImage from '../../../assets/services/Image.png';
import testimonialPhoto from '../../../assets/services/Image (1).png';
import { servicesData } from '../servicesData';

import serviceImg0 from '../../../assets/service.png';
import serviceImg1 from '../../../assets/service1.png';
import serviceImg2 from '../../../assets/service2.png';
import serviceImg3 from '../../../assets/service3.png';
import serviceImg4 from '../../../assets/service4.png';
import quoteIcon from '../../../assets/services/Quotation.png';
import EditableText from '../../../components/Editable/EditableText';
import { Link } from 'react-router-dom';

const powerData = {
  twoColumn: {
    title: 'Quality That Speaks Through Every Word',
    subtitle:
      'At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.',
    items: [
      {
        title: 'Insight-Driven Research',
        text: 'Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.',
        icon: message,
      },
      {
        title: 'Strategic Storytelling',
        text: 'We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.',
        icon: settings,
      },
      {
        title: 'Action-Focused Outcomes',
        text: 'Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.',
        icon: people,
      },
    ],
  },

  cta: {
    title: 'Get in Touch With Us',
    text: 'Have a question or need support? Our team is ready to assist you with all your IT service needs',
    primaryLabel: 'Contact Us',
    secondaryLabel: 'Talk to Expert',
  },
  testimonial: {
    sectionTitle: 'What Clients Say About Our Helpdesk',
    sectionSubtitle: 'Trusted for fast response and reliable IT support.',
    name: 'Robert Fox',
    role: 'IT Manager',
    quote:
      'Their helpdesk team resolved our issues quickly and reduced downtime significantly.',
  },
};

const relatedServiceImages = [
  serviceImg1,
  serviceImg0,
  serviceImg2,
  serviceImg4,
  serviceImg3,
];

const PowerOwnership = () => {
  const { isEditMode } = useEditMode();

  const onOpenContact = () => {
    window.location.href = '/contact';
  };

  const relatedServices = servicesData.filter(
    (item) =>
      item.category === 'managed-security' && item.slug !== 'power-ownership',
  );

  return (
    <>
      <Navbar />
      <main className='power-container'>
        <div className='power-content-container'>
          <h1 className='power-heading'>Power And Ownership</h1>
          <p className='power-text'>
            For businesses that prefer to own their infrastructure and build
            long-term equity, we provide a complete, turnkey IT ecosystem. We
            don’t just "install" hardware; we architect a foundation that allows
            your clinic or office to operate at peak efficiency from day one.
          </p>
          <div className='power-grid-container'>
            <div className='power-item-container'>
              <h3 className='power-item-title'>What We Deliver</h3>
              <p className='power-item-text'>
                Strategic Procurement: We source high-grade servers,
                workstations, and networking equipment (including managed
                switches and UPS systems) specifically vetted for the demands of
                a professional practice.
              </p>
            </div>
            <div className='power-item-container'>
              <h3 className='power-item-title'>Precision Deployment</h3>
              <p className='power-item-text'>
                Our team handles the end-to-end setup—cabling, network
                configuration, and software installation—ensuring your systems
                are hardened and optimized.
              </p>
            </div>
            <div className='power-item-container'>
              <h3 className='power-item-title'>Total Control</h3>
              <p className='power-item-text'>
                You own your hardware. We provide the expert management and
                ongoing support to ensure those assets perform reliably for
                years to come.
              </p>
            </div>
            <div className='power-item-container'>
              <h3 className='power-item-title'>Perfect For</h3>
              <p className='power-item-text'>
                * Established clinics looking to modernize their permanent
                footprint. Businesses with available capital looking to maximize
                long-term ROI.
              </p>
            </div>
          </div>
        </div>
        <section
          className='helpdesk-two-column'
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className='helpdesk-two-column-inner'>
            <div className='helpdesk-two-header'>
              <h2 className='helpdesk-two-title'>
                {powerData.twoColumn.title}
              </h2>
              <p className='helpdesk-two-subtitle'>
                {powerData.twoColumn.subtitle}
              </p>
            </div>

            <div className='helpdesk-two-body'>
              <ul className='helpdesk-feature-list'>
                {powerData.twoColumn.items.map((item, index) => (
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
                <img
                  src={twoColumnImage || powerData.twoColumn.image}
                  alt='Discussion'
                />

                {/* {isEditMode && (
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
                )} */}
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
              <h2>{powerData.cta.title}</h2>
              <p>{powerData.cta.text}</p>
            </div>
            <div className='helpdesk-cta-actions'>
              <button
                type='button'
                className='helpdesk-primary-btn small'
                onClick={onOpenContact}
              >
                {powerData.cta.primaryLabel}
              </button>
              <button className='helpdesk-secondary-btn small' type='button'>
                {powerData.cta.secondaryLabel}
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
                {powerData.testimonial.sectionTitle}
              </h2>

              <p className='helpdesk-testimonial-subtitle'>
                {powerData.testimonial.sectionSubtitle}
              </p>

              <div className='helpdesk-slider-controls'>
                <button className='helpdesk-slider-btn'>←</button>
                <button className='helpdesk-slider-btn'>→</button>
              </div>
            </div>

            <div className='helpdesk-testimonial-card'>
              <div className='helpdesk-testimonial-image'>
                <img
                  src={testimonialPhoto || powerData.testimonial.photo}
                  alt={powerData.testimonial.name}
                />

                {/* {isEditMode && (
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
                )} */}
              </div>

              <div className='helpdesk-testimonial-texts'>
                <h3 className='helpdesk-testimonial-name'>
                  {powerData.testimonial.name}
                </h3>
                <p className='helpdesk-testimonial-role'>
                  {powerData.testimonial.role}
                </p>

                <img
                  src={stars || powerData.testimonial.stars}
                  alt='rating'
                  className='helpdesk-testimonial-stars'
                />

                <p className='helpdesk-testimonial-quote'>
                  {powerData.testimonial.quote}
                </p>
              </div>

              <div className='helpdesk-testimonial-quote-pill'>
                <img
                  src={quoteIcon || powerData.testimonial.quoteIcon}
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

export default PowerOwnership;
