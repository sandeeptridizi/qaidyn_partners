import React, { useEffect, useState } from "react";
import "./Blogs.css";
import blog1 from "../../assets/blogs/blogimg1.jpg";
import blog2 from "../../assets/blogs/blogimg2.jpg";
import blog3 from "../../assets/blogs/blogimg3.png";
import blog4 from "../../assets/blogs/blogimg4.jpg";
import ctaImg from "../../assets/casestudies/image 3.png";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";

import iconConsult from "../../assets/services/Frame 18.png";
import iconEvaluate from "../../assets/services/Frame 18 (1).png";
import iconDeploy from "../../assets/services/Frame 18 (3).png";
import twoColumnImg from "../../assets/services/Image.png";
import { useNavigate } from "react-router-dom";
import { useEditMode } from "../../components/context/EditModeContext.jsx";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { isEditMode } = useEditMode();
  const [openFAQ, setOpenFAQ] = useState(-1);

  const twoColumn = {
    title: "Quality That Speaks Through Every Word",
    subtitle:
      "At Qaidyn Partners, we ensure every blog reflects deep expertise, strategic thinking, and actionable insights that drive real value for founders, leaders, and growing businesses.",
    image: ctaImg,
    items: [
      {
        icon: iconConsult,
        title: "Insight-Driven Research",
        text: "Our content is built on verified data, industry trends, and real business challenges—ensuring every blog delivers clarity, relevance, and credibility.",
      },
      {
        icon: iconDeploy,
        title: "Strategic Storytelling",
        text: "We transform complex topics into simple, structured, and engaging narratives that help readers understand, learn, and apply ideas in their business journey.",
      },
      {
        icon: iconEvaluate,
        title: "Action-Focused Outcomes",
        text: "Each blog concludes with practical steps, frameworks, and takeaways, empowering readers to make informed decisions and implement strategies confidently.",
      },
    ],
  };

  const [twoColumnImage, setTwoColumnImage] = useState(twoColumn.image);
  const [ctaImage, setCtaImage] = useState(ctaImg);

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter(url);
  };

  const blogPosts = [
    { id: 1, title: "Advanced Machine Learning Techniques in 2025", category: "AI & ML", img: blog1 },
    { id: 2, title: "Building Scalable Microservices Architecture", category: "Backend", img: blog2 },
    { id: 3, title: "The Future of Cloud Computing and Edge AI", category: "Cloud", img: blog3 },
    { id: 4, title: "Designing Intuitive User Experiences with AI", category: "UX/UI", img: blog4 },
    { id: 5, title: "Advanced Machine Learning Techniques in 2025", category: "AI & ML", img: blog1 },
    { id: 6, title: "Building Scalable Microservices Architecture", category: "Backend", img: blog2 },
    { id: 7, title: "The Future of Cloud Computing and Edge AI", category: "Cloud", img: blog3 },
    { id: 8, title: "Designing Intuitive User Experiences with AI", category: "UX/UI", img: blog4 },
  ];

  const faqs = [
    {
      question: "What services does Qaidyn provide?",
      answer:
        "We offer a full range of IT solutions including Managed IT Services, Managed Security Services, Cloud & Infrastructure Support, Data Protection, Recovery Services, and Security Assessments & Compliance.",
    },
    {
      question: "How do Managed IT Services benefit my business?",
      answer: "We provide 24/7 support with fast response times for critical and standard issues.",
    },
    {
      question: "Do you provide customized IT solutions?",
      answer: "Yes, we design and implement solutions tailored to your business needs.",
    },
    {
      question: "How secure is my company’s data?",
      answer: "Through encryption, continuous monitoring, audits, and compliance standards.",
    },
  ];

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="blogspage-page">

        {/* BLOG HEADER */}
        <header
          className="blogspage-header"
          contentEditable={isEditMode}
          suppressContentEditableWarning
        >
          <h1>Blogs</h1>
          <p className="blogspage-subtitle">
            We share the best quality articles on the latest trends in technology,
            design, and innovation.
          </p>

          <div className="blogs-search-container">
            <input
              type="text"
              placeholder="Search blogs..."
              className="blogspage-search-input"
            />
          </div>
        </header>

        {/* BLOG GRID (CLICK FIXED) */}
        <section className="blogspage-grid">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blogpage-card"
              contentEditable={false}
              onClick={() => navigate(`/singleBlog/${post.id}`)}
            >
              <div className="blogpage-image-wrapper">
                <img
                  src={post.img}
                  alt={post.title}
                  className="blogpage-image"
                />
              </div>
              <div className="blogpage-content">
                <span className="blogpage-category">{post.category}</span>
                <h3 className="blogpage-title">{post.title}</h3>
                <p className="blogpage-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* TWO COLUMN */}
        <section
          className="helpdesk-two-column"
          contentEditable={isEditMode}
          suppressContentEditableWarning
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
                <img src={twoColumnImage} alt="Two column visual" />

                {isEditMode && (
                  <div className="helpdesk-image-upload">
                    <label className="helpdesk-upload-label">
                      Change Image:
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

        {/* FAQ */}
        <section className="faq-section" id="faq-section">
          <div className="container-full">
            <div
              className="faq-header"
              contentEditable={isEditMode}
              suppressContentEditableWarning
            >
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Find answers to common questions about our IT services
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFAQ === index ? "active" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <div className="faq-toggle">
                      {openFAQ === index ? "−" : "+"}
                    </div>
                  </div>
                  <div
                    className={`faq-answer ${
                      openFAQ === index ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="cs-cta"
          contentEditable={isEditMode}
          suppressContentEditableWarning
        >
          <div className="cs-container cs-cta-inner">
            <div className="cs-cta-left">
              <h2>Let’s Build a Smarter, Secure IT Future Together</h2>
              <p>
                Have a question or need expert support? Reach out to our team
                today—we’re here to help.
              </p>
              <button className="cs-btn-white" type="button">
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
      </div>

      <HomeFooter />
    </>
  );
};

export default Blogs;
