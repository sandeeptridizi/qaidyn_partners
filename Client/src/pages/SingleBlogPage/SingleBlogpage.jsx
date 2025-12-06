import React, { useEffect, useState } from "react";
import "./SingleBlogpage.css";
import authorAvatar from "../../assets/blogs/autherimg.png";
import blogImg1 from "../../assets/blogs/singleblogimg.jpg";
import blogImg2 from "../../assets/blogs/singleblogimg1.jpg";
import blogImg3 from "../../assets/blogs/singleblogimg2.jpg";
import blog1 from "../../assets/blogs/blogimg1.jpg"; // Replace with your images
import blog2 from "../../assets/blogs/blogimg2.jpg";
import blog3 from "../../assets/blogs/blogimg3.png";
import blog4 from "../../assets/blogs/blogimg4.jpg";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import ctaImg from "../../assets/promotions/freepik--Laptop--inject-23.png";


// If your blogs come from a static file OR Firebase,
// import or fetch them accordingly.
// import { blogPosts } from "../../data/blogData"; // <-- update this path

const SingleBlog = () => {
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
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Find blog by ID
    const selectedBlog = blogPosts.find((post) => post.id.toString() === id);
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="loading-blog">
        <Navbar />
        <h2 style={{ padding: "5vw", textAlign: "center" }}>
          Blog Not Found 😕
        </h2>
        <Footer />
      </div>
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
        {/* Hero Image */}
        <div className="blog-hero">
          <img src={blog.img} alt={blog.title} className="hero-image" />
          <div className="hero-overlay">
            <h1>{blog.title}</h1>
          </div>
        </div>

        {/* Blog Content */}
         <div className="blog-content-wrapper">
        <article className="blog-content">
          <h2>{blog.subtitle || blog.title}</h2>

          {/* Main content */}
          <p>
            {blog.description ||
              "Lorem ipsum dolor Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem ipsum
            dolor sit amet Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <h2>{blog.subtitle || blog.title}</h2>
          <p>
            {blog.description ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem ipsum
            dolor sit amet Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Optional list section */}
          {blog.list && (
            <ul className="blog-list">
              {blog.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Optional more content */}
          {blog.more && blog.more.map((para, idx) => <p key={idx}>{para}</p>)}
        </article>
<div class="singleblog_gradiant"></div>  
       </div>
        {/* Related Posts Section */}
        <section className="related-posts">
          <h2 className="section-title">Our Blogs</h2>
          <h3 className="section-subtitle">Latest Posts</h3>

          <div className="posts-grid">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="related-card"
                onClick={() =>
                  (window.location.href = `/singleBlog/${post.id}`)
                }
              >
                <img src={post.img} alt={post.title} className="related-img" />
                <div className="related-info">
                  <h4>{post.title}</h4>
                  <div className="related-meta">
                    <span>By {post.author || "Admin"}</span>
                    <span>{post.date || "Jan 01, 2025"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
                <section className="promotions-cta-banner">
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

export default SingleBlog;
