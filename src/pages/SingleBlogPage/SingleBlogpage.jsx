import React, { useEffect, useState } from "react";
import "./SingleBlogpage.css";
import blog1 from "../../assets/blogs/blogimg1.jpg";
import blog2 from "../../assets/blogs/blogimg2.jpg";
import blog3 from "../../assets/blogs/blogimg3.png";
import blog4 from "../../assets/blogs/blogimg4.jpg";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import ctaImg from "../../assets/casestudies/image 3.png";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedBlog = blogPosts.find(
      (post) => post.id.toString() === id
    );
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return (
      <>
        <Navbar />
        <h2 style={{ padding: "5vw", textAlign: "center" }}>
          Blog Not Found 
        </h2>
        <HomeFooter />
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((post) => post.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="single-blog-container">
        {/* HERO */}
        <div className="blog-hero">
          <img src={blog.img} alt={blog.title} className="hero-image" />
          <div className="hero-overlay">
            <h1>{blog.title}</h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="blog-content-wrapper">
          <article className="blog-content">
            <h2>{blog.title}</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <h2>{blog.title}</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </article>

          <div className="singleblog_gradiant"></div>
        </div>

        {/* RELATED POSTS */}
        <section className="related-posts">
          <h2 className="section-title">Our Blogs</h2>
          <h3 className="section-subtitle">Latest Posts</h3>

          <div className="posts-grid">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="related-card"
                onClick={() => navigate(`/singleBlog/${post.id}`)}
              >
                <img src={post.img} alt={post.title} className="related-img" />
                <div className="related-info">
                  <h4>{post.title}</h4>
                  <div className="related-meta">
                    <span>By Admin</span>
                    <span>Jan 01, 2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cs-cta">
          <div className="cs-container cs-cta-inner">
            <div className="cs-cta-left">
              <h2>Let’s Build a Smarter, Secure IT Future Together</h2>
              <p>
                Have a question or need expert support? Reach out to our team today—we’re here to help.
              </p>
              <button className="cs-btn-white" type="button">
                Know more
              </button>
            </div>

            <div className="cs-cta-right">
              <img src={ctaImg} alt="CTA" />
            </div>
          </div>
        </section>
      </div>

      <HomeFooter />
    </>
  );
};

export default SingleBlog;
