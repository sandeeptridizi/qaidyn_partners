import React, { useEffect, useState } from "react";
import "./Blogs.css";
import blog1 from "../../assets/blogs/blogimg1.jpg";
import blog2 from "../../assets/blogs/blogimg2.jpg";
import blog3 from "../../assets/blogs/blogimg3.png";
import blog4 from "../../assets/blogs/blogimg4.jpg";
import authorImg from "../../assets/blogs/autherimg.png";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";

import ctaImg from "../../assets/promotions/freepik--Laptop--inject-23.png";
import { useNavigate } from "react-router-dom";

// ⭐ import global edit mode
import { useEditMode } from "../../components/context/EditModeContext.jsx";
import { database } from "../../components/Firebase/firebase.js";
import { ref, get } from "firebase/database";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [blogPosts, setBlogs] = useState([]);

  const navigate = useNavigate();

  const [openFAQ, setOpenFAQ] = useState(0);
  const { isEditMode } = useEditMode(); // ⭐ read global edit mode

  //   useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const blogRef = ref(database, "blogs");
  //     try {
  //       const snapshot = await get(blogRef);
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const blogList = Object.keys(data).map((key) => ({
  //           id: key,
  //           ...data[key],
  //           imageUrl: data[key].image_url || "",
  //         }));
  //         setBlogs(blogList);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blog data:", error);
  //     }
  //   };
  //   fetchBlogs();
  // }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Machine Learning Techniques in 2025",
      category: "AI & ML",
      img: blog1,
    },
    {
      id: 2,
      title: "Building Scalable Microservices Architecture",
      category: "Backend",
      img: blog2,
    },
    {
      id: 3,
      title: "The Future of Cloud Computing and Edge AI",
      category: "Cloud",
      img: blog3,
    },
    {
      id: 4,
      title: "Designing Intuitive User Experiences with AI",
      category: "UX/UI",
      img: blog4,
    },
    {
      id: 5,
      title: "Advanced Machine Learning Techniques in 2025",
      category: "AI & ML",
      img: blog1,
    },
    {
      id: 6,
      title: "Building Scalable Microservices Architecture",
      category: "Backend",
      img: blog2,
    },
    {
      id: 7,
      title: "The Future of Cloud Computing and Edge AI",
      category: "Cloud",
      img: blog3,
    },
    {
      id: 8,
      title: "Designing Intuitive User Experiences with AI",
      category: "UX/UI",
      img: blog4,
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive IT solutions including Managed IT Services, Cloud Infrastructure, Cybersecurity, Data Protection, and Security Assessments. Our services are designed to meet the unique needs of modern enterprises across various industries.",
    },
    {
      question: "How quickly can you respond to support requests?",
      answer:
        "We provide 24/7 support with response times typically within 15 minutes for critical issues and 2 hours for standard requests. Our dedicated helpdesk team ensures your business operations continue smoothly with minimal downtime.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Absolutely! We understand that every business has unique requirements. Our team works closely with you to design and implement tailored IT solutions that align perfectly with your business goals, budget, and technical requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in Healthcare, Finance, Education, Manufacturing, Retail, E-commerce, Logistics, and Software Development. Our team has deep industry expertise and understands the specific compliance and operational requirements of each sector.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement multi-layered security protocols including advanced encryption, continuous monitoring, regular security audits, and compliance with industry standards like ISO 27001, SOC 2, and HIPAA. Your data security is our top priority.",
    },
  ];

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="blogspage-page">
        {/* HEADER */}
        <header
          className="blogspage-header"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h1>Blogs</h1>
          <p className="blogspage-subtitle">
            We share the best quality articles on the latest trends in
            technology, design, and innovation.
          </p>

          {/* Search Bar (keep functional, not editable) */}
          <div className="blogs-search-container">
            <input
              type="text"
              placeholder="Search blogs..."
              className="blogspage-search-input"
            />
          </div>
        </header>

        {/* BLOG GRID – editable text when in edit mode */}
        <section
          className="blogspage-grid"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          { blogPosts.length>0 ? blogPosts.map((post) => (
            <article
              key={post.id}
              className="blogpage-card"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor...
                </p>
              </div>
            </article>
          )):(
            <p className="blogsNotFound">No Blogs found......</p>
          )}
        </section>

        {/* FEATURED CONTENT */}
        <section
          className="blogspage-featured"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <h2>Lorem Ipsum Content</h2>
          <p className="featuredpage-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="featuredpage-grid">
            <div className="featuredpage-left">
              <div className="featuredpage-item">
                <div className="featuredpage-icon">Icon</div>
                <div>
                  <h4>Advanced Technology</h4>
                  <p>
                    We use cutting-edge tools and frameworks to build
                    future-ready solutions.
                  </p>
                </div>
              </div>
              <div className="featuredpage-item">
                <div className="featuredpage-icon">Icon</div>
                <div>
                  <h4>Expert Team</h4>
                  <p>
                    Our team consists of industry veterans and passionate
                    innovators.
                  </p>
                </div>
              </div>
              <div className="featuredpage-item">
                <div className="featuredpage-icon">Icon</div>
                <div>
                  <h4>Lorum Ipsum</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="featuredpage-right">
              <img
                src={authorImg}
                alt="Team working"
                className="featuredpage-image"
              />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-section" id="faq-section">
          <div className="container-full">
            <div
              className="faq-header"
              contentEditable={isEditMode}
              suppressContentEditableWarning={true}
            >
              <h2 className="faq-title">Frequently Ask Question</h2>
              <p className="faq-subtitle">
                Find answers to common questions about our IT services and
                solutions
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFAQ === index ? "active" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? -1 : index)
                    }
                    contentEditable={isEditMode}
                    suppressContentEditableWarning={true}
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`faq-toggle ${
                        openFAQ === index ? "open" : ""
                      }`}
                    >
                      {openFAQ === index ? "−" : "+"}
                    </div>
                  </div>
                  <div
                    className={`faq-answer ${
                      openFAQ === index ? "show" : ""
                    }`}
                    contentEditable={isEditMode}
                    suppressContentEditableWarning={true}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section
          className="promotions-cta-banner"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="promotions-cta-inner">
            <div className="promotions-cta-text">
              <h2 className="promotions-cta-heading">
                Lorem Ipsum content is
                <br />
                dummy text
              </h2>
              <p className="promotions-cta-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
              <button className="promotions-cta-btn">Know more</button>
            </div>
            <div className="promotions-cta-image-wrap">
              <img
                src={ctaImg}
                alt="CTA illustration"
                className="promotions-cta-image"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
