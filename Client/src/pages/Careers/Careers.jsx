import React, { useEffect, useMemo, useState } from "react";
import "./Careers.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import EditableText from "../../components/Editable/EditableText.jsx";
import EditableImage from "../../components/Editable/EditableImage.jsx";
import EditableButton from "../../components/Editable/EditableButton.jsx";
import { HomeContentProvider } from "../../hooks/useHomeContent.jsx";
import { useFirebaseCareers } from "../../hooks/useFirebaseCareers.js";
import ctaImg from "../../assets/promotions/image 3.png";
import ContactModal from "../../components/ContactModal/ContactModal";

const uniqueValues = (arr, key) =>
  Array.from(new Set(arr.map((item) => item[key]))).filter(Boolean);

// Escape HTML and convert newlines for safe plain-text display.
// Strips HTML from legacy entries, escapes new content for XSS safety.
const formatPlainTextForDisplay = (text) => {
  if (!text || typeof text !== "string") return "";
  let plain = text;
  if (text.includes("<")) {
    const tmp = document.createElement("div");
    tmp.innerHTML = text;
    plain = tmp.textContent || tmp.innerText || "";
  }
  return plain
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
};

// Map Firebase career document to page job shape
const mapFirebaseCareerToJob = (c) => ({
  id: c.id,
  title: c.JobTitle || "",
  level: c.Category || "Mid Level",
  location: c.Location || "",
  tag: c.FieldOfJob || "",
  type: c.Type || "Full-time",
  description: c.ShortDiscription || (c.JobDiscription ? c.JobDiscription.replace(/<[^>]*>/g, "").slice(0, 200) + "…" : ""),
  responsibilities: c.JobDiscription || "See job description.",
  qualifications: c.Requirements || "As per role.",
});

const Career = () => {
  const { careers: firebaseCareers, loading: careersLoading } = useFirebaseCareers();
  const jobs = useMemo(
    () => firebaseCareers.map(mapFirebaseCareerToJob),
    [firebaseCareers]
  );
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState(null);

  const onOpenContact = () => {
    window.location.href = "/contact";
  };

  const locations = useMemo(
    () => ["All location", ...uniqueValues(jobs, "location")],
    [jobs]
  );
  const levels = useMemo(() => ["All Experience Level", ...uniqueValues(jobs, "level")], [jobs]);
  const types = useMemo(() => ["All Categories", ...uniqueValues(jobs, "type")], [jobs]);

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (filterLocation !== "All" && job.location !== filterLocation)
        return false;
      if (filterLevel !== "All" && job.level !== filterLevel) return false;
      if (filterType !== "All" && job.type !== filterType) return false;
      if (!q) return true;
      return (
        job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        (job.tag && job.tag.toLowerCase().includes(q))
      );
    });
  }, [jobs, query, filterLocation, filterLevel, filterType]);

  useEffect(() => {
    // If selection is lost due to filter, select first visible or null
    if (!filteredJobs.find(j => j.id === selectedJobId)) {
      setSelectedJobId(filteredJobs[0]?.id || null);
    }
    // Initial selection
    if (!selectedJobId && filteredJobs.length > 0) {
      setSelectedJobId(filteredJobs[0].id);
    }
  }, [filteredJobs, selectedJobId]);

  const selectedJob = jobs.find((j) => j.id === selectedJobId) || filteredJobs[0] || null;

  const handleApply = (job) => {
    // alert(`Apply clicked for: ${job.title} (${job.location})`);
    openContactModal();
  };

  const resetFilters = () => {
    setQuery("");
    setFilterLocation("All");
    setFilterLevel("All");
    setFilterType("All");
  };

  return (
    <>
      <Navbar />

      <div className="career-page" role="main" aria-label="careers page">
        {careersLoading ? (
          <p className="career-loading" style={{ padding: "3rem", textAlign: "center" }}>Loading careers…</p>
        ) : jobs.length > 0 ? (
          <>
            <div className="career-search-container" aria-label="search and filters">
              <div className="career-search-box">
                <input
                  aria-label="Search by role or keyword"
                  type="text"
                  placeholder="Search by role or keyword..."
                  className="career-search-input career-job-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="career_select_input_container">
                <div>
                  <label>Experience Level</label>
                  <select
                    aria-label="Filter by level"
                    className="career-location-search"
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                  >
                    {levels.map((lv) => (
                      <option key={lv} value={lv}>
                        {lv}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Location</label>
                  <select
                    aria-label="Filter by location"
                    className="career-location-search"
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>Category</label>
                  <select
                    aria-label="Filter by type"
                    className="career-location-search"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <EditableButton
                  contentKey="careers.filter.viewJobs.button"
                  defaultValue="View Jobs"
                  className="career-view-jobs-btn"
                  onClick={() => {
                    resetFilters();
                  }}
                />
              </div>
            </div>
            <div className="career-two-col">
              <aside className="career-left" aria-label="job list">
                <div className="career-jobs-grid-list" role="list">
                  {filteredJobs.length ? (
                    filteredJobs.map((job) => {
                      const isSelected = job.id === selectedJob?.id;
                      return (
                        <article
                          key={job.id}
                          role="listitem"
                          tabIndex={0}
                          aria-current={isSelected ? "true" : "false"}
                          className={`career-job-card-list ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedJobId(job.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              setSelectedJobId(job.id);
                          }}
                        >
                          <div className="career-job-header-list">
                            <h5 className="career-job-title-list">{job.title}</h5>
                            <span className="career-job-level-tag-list">{job.level}</span>
                          </div>

                          <div className="career-job-location-list">
                            <span>{job.location}</span>
                            {job.tag && <span className="career-location-tag-list">{job.tag}</span>}
                          </div>

                          <div className="career-job-description-list">
                            {job.description.length > 120
                              ? job.description.slice(0, 116) + "…"
                              : job.description}
                          </div>

                          <div className="career-job-footer-list">
                            <span className="career-job-type-list">{job.type}</span>
                            <EditableButton
                              contentKey="careers.jobList.apply.button"
                              defaultValue="Apply"
                              className="career-apply-btn-list"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApply(job);
                              }}
                            />
                          </div>
                        </article>
                      );
                    })
                  ) : (
                    <div className="no-jobs">
                      No jobs match your search/filters.
                    </div>
                  )}
                </div>
              </aside>
              <section className="career-right" aria-label="job details">
                {selectedJob ? (
                  <div className="career-job-detail">
                    <div className="career-detail-header">
                      <div>
                        <h2 className="career-detail-title">{selectedJob.title}</h2>

                        <div className="career-detail-meta">
                          <span className="career-job-level-tag">{selectedJob.level}</span>
                          <span className="career-job-type detail-type">{selectedJob.type}</span>
                          <span className="career-detail-location">{selectedJob.location}</span>
                          {selectedJob.tag && (
                            <span className="career-location-tag detail-tag">{selectedJob.tag}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="career-detail-body">
                      <h4>Job Description</h4>
                      <p>{selectedJob.description}</p>

                      <h4>Primary Responsibilities</h4>
                      <div
                        className="career-detail-content"
                        dangerouslySetInnerHTML={{
                          __html: formatPlainTextForDisplay(selectedJob.responsibilities || ""),
                        }}
                      />

                      <h4>Qualifications</h4>
                      <div
                        className="career-detail-content"
                        dangerouslySetInnerHTML={{
                          __html: formatPlainTextForDisplay(selectedJob.qualifications || ""),
                        }}
                      />

                      <div className="career-detail-footer">
                        <div>
                          <h4>Employment Type:</h4>
                          <p>{selectedJob.type}</p>
                        </div>
                        <div>
                          <h4>Work Place Type:</h4>
                          <p>{selectedJob.location}</p>
                        </div>
                        <div>
                          <h4>Salary:</h4>
                          <p>Competitive</p>
                        </div>
                        <div>
                          <h4>Job Location:</h4>
                          <p>{selectedJob.location}</p>
                        </div>
                        <div>
                          <h4>Experience:</h4>
                          <p>{selectedJob.level}</p>
                        </div>
                      </div>
                    </div>
                    <div className="career-detail-cta">
                      <EditableButton
                        contentKey="careers.jobDetail.applyNow.button"
                        defaultValue="Apply Now"
                        className="career-apply-btn detail-apply"
                        onClick={openContactModal}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="no-selection">
                    No job selected. Adjust search/filters to see open
                    positions.
                  </div>
                )}
              </section>
            </div>
          </>
        ) : (
          <p className="NotFoundJobs">Not found Jobs.....</p>
        )}

        <section className="promotions-cta-banner">
          <div className="promotions-cta-inner">
            <div className="promotions-cta-text">
              <EditableText
                as="h2"
                className="promotions-cta-heading"
                contentKey="careers.cta.title"
                defaultValue="Let's Build a Smarter, Secure IT Future Together"
                useHtml={true}
              />
              <EditableText
                as="p"
                className="promotions-cta-desc"
                contentKey="careers.cta.description"
                defaultValue="Have a question or need expert support? Reach out to our team today—we're here to provide fast, reliable guidance and the right IT solutions for your business."
              />
              <EditableButton
                contentKey="careers.cta.knowMore.button"
                defaultValue="Know more"
                className="promotions-cta-btn"
                onClick={onOpenContact}
              />
            </div>
            <div className="promotions-cta-image-wrap">
              <EditableImage
                contentKey="careers.cta.image"
                defaultValue={ctaImg}
                alt="CTA illustration"
                className="promotions-cta-image"
              />
            </div>
          </div>
        </section>
      </div>
      <ContactModal
        open={contactModalOpen}
        onClose={closeContactModal}
      />

      <HomeFooter />
    </>
  );
};

const CareerWrapper = () => {
  return (
    <HomeContentProvider>
      <Career />
    </HomeContentProvider>
  );
};

export default CareerWrapper;
