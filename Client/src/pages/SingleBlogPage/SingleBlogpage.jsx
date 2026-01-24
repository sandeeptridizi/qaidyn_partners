import React, { useEffect, useState } from "react";
import "./SingleBlogpage.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import { useParams, useNavigate } from "react-router-dom";
import ctaImg from "../../assets/casestudies/image 3.png";
import { blogPosts } from "../../data/blogData.js";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
      <Navbar />

      <div className="single-blog-container">
        {/* HERO */}
        <div className="blog-hero">
          <EditableImage
            contentKey={`blog.${id}.hero.image`}
            defaultValue={blog.img}
            alt={blog.title}
            className="hero-image"
          />
          <div className="hero-overlay">
            <EditableText
              as="h1"
              contentKey={`blog.${id}.hero.title`}
              defaultValue={blog.title}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="blog-content-wrapper">
          <article className="blog-content">
            <EditableText
              as="h2"
              contentKey={`blog.${id}.content.heading1`}
              defaultValue={blog.title}
            />

            <EditableText
              as="p"
              contentKey={`blog.${id}.content.paragraph1`}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <EditableText
              as="p"
              contentKey={`blog.${id}.content.paragraph2`}
              defaultValue="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />

            <EditableText
              as="h2"
              contentKey={`blog.${id}.content.heading2`}
              defaultValue={blog.title}
            />

            <EditableText
              as="p"
              contentKey={`blog.${id}.content.paragraph3`}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </article>

          <div className="singleblog_gradiant"></div>
        </div>

        {/* RELATED POSTS */}
        <section className="related-posts">
          <EditableText
            as="h2"
            className="section-title"
            contentKey="blog.related.title"
            defaultValue="Our Blogs"
          />
          <EditableText
            as="h3"
            className="section-subtitle"
            contentKey="blog.related.subtitle"
            defaultValue="Latest Posts"
          />

          <div className="posts-grid">
            {relatedPosts.map((post, index) => (
              <div
                key={post.id}
                className="related-card"
                onClick={() => navigate(`/singleBlog/${post.id}`)}
              >
                <EditableImage
                  contentKey={`blog.related.${index}.image`}
                  defaultValue={post.img}
                  alt={post.title}
                  className="related-img"
                />
                <div className="related-info">
                  <EditableText
                    as="h4"
                    contentKey={`blog.related.${index}.title`}
                    defaultValue={post.title}
                  />
                  <div className="related-meta">
                    <EditableText
                      as="span"
                      contentKey={`blog.related.${index}.author`}
                      defaultValue="By Admin"
                    />
                    <EditableText
                      as="span"
                      contentKey={`blog.related.${index}.date`}
                      defaultValue="Jan 01, 2025"
                    />
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
              <EditableText
                as="h2"
                contentKey="blog.cta.title"
                defaultValue="Let's Build a Smarter, Secure IT Future Together"
              />
              <EditableText
                as="p"
                contentKey="blog.cta.description"
                defaultValue="Have a question or need expert support? Reach out to our team today—we're here to help."
              />
              <EditableButton
                contentKey="blog.cta.knowMore.button"
                defaultValue="Know more"
                className="cs-btn-white"
              />
            </div>

            <div className="cs-cta-right">
              <EditableImage
                contentKey="blog.cta.image"
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

const SingleBlogWrapper = () => {
  return (
    <HomeContentProvider>
      <SingleBlog />
    </HomeContentProvider>
  );
};

export default SingleBlogWrapper;
