import React, { useEffect, useState } from "react";
import "./Blogs.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import { blogPosts } from "../../data/blogData.js";

import iconConsult from "../../assets/services/Frame 18.png";
import iconEvaluate from "../../assets/services/Frame 18 (1).png";
import iconDeploy from "../../assets/services/Frame 18 (3).png";
import ctaImg from "../../assets/casestudies/image 3.png";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
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
      question: "How secure is my company's data?",
      answer: "Through encryption, continuous monitoring, audits, and compliance standards.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="blogspage-page">

        <header className="blogspage-header">
          <EditableText
            as="h1"
            contentKey="blogs.hero.title"
            defaultValue="Blogs"
          />
          <EditableText
            as="p"
            className="blogspage-subtitle"
            contentKey="blogs.hero.subtitle"
            defaultValue="We share the best quality articles on the latest trends in technology, design, and innovation."
          />

          <div className="blogs-search-container">
            <input
              type="text"
              placeholder="Search blogs..."
              className="blogspage-search-input"
            />
          </div>
        </header>

        <section className="blogspage-grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="blogpage-card"
              onClick={() => navigate(`/singleBlog/${post.id}`)}
            >
              <div className="blogpage-image-wrapper">
                <EditableImage
                  contentKey={`blog.${post.id}.hero.image`}
                  defaultValue={post.img}
                  alt={post.title}
                  className="blogpage-image"
                />
              </div>
              <div className="blogpage-content">
                <EditableText
                  as="span"
                  className="blogpage-category"
                  contentKey={`blog.${post.id}.category`}
                  defaultValue={post.category}
                />
                <EditableText
                  as="h3"
                  className="blogpage-title"
                  contentKey={`blog.${post.id}.hero.title`}
                  defaultValue={post.title}
                />
                <EditableText
                  as="p"
                  className="blogpage-excerpt"
                  contentKey={`blog.${post.id}.excerpt`}
                  defaultValue={post.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
              </div>
            </article>
          ))}
        </section>

        <section className="helpdesk-two-column">
          <div className="helpdesk-two-column-inner">
            <div className="helpdesk-two-header">
              <EditableText
                as="h2"
                className="helpdesk-two-title"
                contentKey="blogs.quality.title"
                defaultValue={twoColumn.title}
              />
              <EditableText
                as="p"
                className="helpdesk-two-subtitle"
                contentKey="blogs.quality.subtitle"
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
                        contentKey={`blogs.quality.item.${index}.title`}
                        defaultValue={item.title}
                      />
                      <EditableText
                        as="p"
                        contentKey={`blogs.quality.item.${index}.text`}
                        defaultValue={item.text}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="helpdesk-two-right">
                <EditableImage
                  contentKey="blogs.quality.image"
                  defaultValue={twoColumn.image}
                  alt="Two column visual"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq-section">
          <div className="container-full">
            <div className="faq-header">
              <EditableText
                as="h2"
                className="faq-title"
                contentKey="blogs.faq.title"
                defaultValue="Frequently Asked Questions"
              />
              <EditableText
                as="p"
                className="faq-subtitle"
                contentKey="blogs.faq.subtitle"
                defaultValue="Find answers to common questions about our IT services"
              />
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
                    className={`faq-answer ${openFAQ === index ? "show" : ""
                      }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-cta">
          <div className="cs-container cs-cta-inner">
            <div className="cs-cta-left">
              <EditableText
                as="h2"
                contentKey="blogs.cta.title"
                defaultValue="Let's Build a Smarter, Secure IT Future Together"
              />
              <EditableText
                as="p"
                contentKey="blogs.cta.description"
                defaultValue="Have a question or need expert support? Reach out to our team today—we're here to help."
              />
              <EditableButton
                contentKey="blogs.cta.button"
                defaultValue="Know more"
                className="cs-btn-white"
              />
            </div>

            <div className="cs-cta-right">
              <EditableImage
                contentKey="blogs.cta.image"
                defaultValue={ctaImg}
                alt="CTA"
              />
            </div>
          </div>
        </section>
      </div>

      <HomeFooter />
    </>
  );
};

const BlogsWrapper = () => {
  return (
    <HomeContentProvider>
      <Blogs />
    </HomeContentProvider>
  );
};

export default BlogsWrapper;
