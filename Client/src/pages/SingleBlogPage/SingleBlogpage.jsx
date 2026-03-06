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
import { blogAPI } from "../../services/api";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      try {
        const [singleRes, listRes] = await Promise.all([
          blogAPI.getById(id),
          blogAPI.getAll(),
        ]);
        if (singleRes.success && singleRes.blog) {
          setBlog(singleRes.blog);
          const list = (listRes.success && listRes.blogs) ? listRes.blogs : [];
          setRelatedPosts(list.filter((p) => p.id !== id).slice(0, 3));
        } else {
          setBlog(null);
          setRelatedPosts([]);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setBlog(null);
        setRelatedPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="single-blog-container" style={{ padding: "5vw", textAlign: "center" }}>
          Loading…
        </div>
        <HomeFooter />
      </>
    );
  }

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

  return (
    <>
      <Navbar />

      <div className="single-blog-container">
        {/* HERO */}
        <div className="blog-hero">
          {blog.image_url ? (
            <img src={blog.image_url} alt={blog.title} className="hero-image" />
          ) : (
            <div className="hero-image hero-image-placeholder" />
          )}
          <div className="hero-overlay">
            <h1>{blog.title}</h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="blog-content-wrapper">
          <article className="blog-content">
            {blog.blog_content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
            ) : (
              <p>No content.</p>
            )}
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
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="related-card"
                onClick={() => navigate(`/singleBlog/${post.id}`)}
              >
                {post.image_url ? (
                  <img src={post.image_url} alt={post.title} className="related-img" />
                ) : (
                  <div className="related-img related-img-placeholder" />
                )}
                <div className="related-info">
                  <h4>{post.title}</h4>
                  <div className="related-meta">
                    <span>By {post.author_name || "Admin"}</span>
                    <span>
                      {post.created_at
                        ? new Date(post.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : ""}
                    </span>
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
