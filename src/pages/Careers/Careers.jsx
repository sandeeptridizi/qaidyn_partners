import React, { useEffect, useMemo, useState } from "react";
import "./Careers.css";
import HomeFooter from "../../components/Footer1/footerHome.jsx";
import Navbar from "../../components/Navbar/Navbar";
import ctaImg from "../../assets/promotions/image 3.png";
import { useEditMode } from "../../components/context/EditModeContext.jsx";
import { database, get } from "../../components/Firebase/firebase.js";
import { ref } from "firebase/storage";

const initialJobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    level: "Mid Level",
    location: "Melbourne",
    tag: "Brisbane",
    type: "Full-time",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases. Works with product and design teams to implement end-to-end features. Troubleshoot, maintain and improve performance, ensure code quality and testing.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    level: "Mid Level",
    location: "Chennai",
    tag: "Mumbai",
    type: "Full-time",
    description:
      "Design and implement large-scale startup projects using HTML, CSS and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic. Mentor junior developers and collaborate across teams to ship features.",
  },
  {
    id: 3,
    title: "React Developer",
    level: "Mid Level",
    location: "Hyderabad",
    tag: "Bengaluru",
    type: "Full-time",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and React. Focus on component architecture, state management, performance optimizations and accessible UI.",
  },
  {
    id: 4,
    title: "Flutter Developer",
    level: "Mid Level",
    location: "Chennai",
    tag: "Sydney",
    type: "Full-time",
    description:
      "Design and implement cross-platform mobile applications using Flutter. Work closely with backend and design teams to deliver performant native-like apps.",
  },
  {
    id: 5,
    title: "Php Developer",
    level: "Mid Level",
    location: "Bhubaneswar",
    tag: "Sydney",
    type: "Full-time",
    description:
      "Design and implement backend services using PHP/Laravel and MySQL. Build scalable APIs, integrate third party services, and ensure reliable deployment.",
  },
  {
    id: 6,
    title: "Mern Stack Developer",
    level: "Mid Level",
    location: "Pune",
    tag: "Sydney",
    type: "Full-time",
    description:
      "Design and implement web applications using MongoDB, Express, React and Node.js. Own API design, data models and client integrations.",
  },
];

const uniqueValues = (arr, key) =>
  Array.from(new Set(arr.map((item) => item[key]))).filter(Boolean);

const Career = () => {
  const { isEditMode } = useEditMode(); // ⭐ use global edit mode

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [jobs] = useState(initialJobs);
  const [query, setQuery] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState(null);

  // CTA image editable
  const [ctaImage, setCtaImage] = useState(ctaImg);

  const handleCtaImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCtaImage(url);
  };

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
    if (!filteredJobs.length) {
      setSelectedJobId(null);
    }
  }, [filteredJobs]);

  const selectedJob = filteredJobs.find((j) => j.id === selectedJobId) ?? null;

  const handleApply = (job) => {
    alert(`Apply clicked for: ${job.title} (${job.location})`);
  };

  const resetFilters = () => {
    setQuery("");
    setFilterLocation("All");
    setFilterLevel("All");
    setFilterType("All");
  };
  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="career-page" role="main" aria-label="careers page">
        {/* SEARCH + FILTERS */}
        {initialJobs.length > 0 ? (
          <>
            <div
              className="career-search-container"
              aria-label="search and filters"
              contentEditable={isEditMode}
              suppressContentEditableWarning={true}
            >
              <div className="career-search-box">
  <span className="career-search-icon">
    🔍
  </span>

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

                <button
                  className="career-view-jobs-btn"
                  onClick={() => {
                    resetFilters();
                  }}
                  aria-label="View all jobs"
                >
                  View Jobs
                </button>
              </div>
            </div>
            <div className="career-two-col">
              <aside className="career-left" aria-label="job list">
                <div className="career-jobs-grid-list" role="list">
                  {filteredJobs.length ? (
                    filteredJobs.map((job) => {
                      const isSelected = job.id === selectedJobId;
                      return (
                        <article
                          key={job.id}
                          role="listitem"
                          tabIndex={0}
                          aria-current={isSelected ? "true" : "false"}
                          className={`career-job-card-list ${
                            isSelected ? "selected" : ""
                          }`}
                          onClick={() => setSelectedJobId(job.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              setSelectedJobId(job.id);
                          }}
                        >
                          <div className="career-job-header-list">
                            <h5 className="career-job-title-list">
                              {job.title}
                            </h5>
                            <span className="career-job-level-tag-list">
                              {job.level}
                            </span>
                          </div>

                          <div className="career-job-location-list">
                            {job.location}
                            <span className="career-location-tag-list">
                              {job.tag}
                            </span>
                          </div>

                          <p className="career-job-description-list">
                            {job.description.length > 120
                              ? job.description.slice(0, 116) + "…"
                              : job.description}
                          </p>

                          <div className="career-job-footer-list">
                            <span className="career-job-type-list">
                              {job.type}
                            </span>
                            <button
                              className="career-apply-btn-list"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleApply(job);
                              }}
                            >
                              Apply
                            </button>
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
                  <div
                    className="career-job-detail"
                    contentEditable={isEditMode}
                    suppressContentEditableWarning={true}
                  >
                    <div className="career-detail-header">
                      <div>
                        <h2 className="career-detail-title">
                          {selectedJob.title}
                        </h2>
                        <div className="career-detail-meta">
                          <span className="career-job-level-tag">
                            {selectedJob.level}
                          </span>
                          <span className="career-job-type detail-type">
                            {selectedJob.type}
                          </span>
                          <span className="career-detail-location">
                            {selectedJob.location}
                          </span>
                          {selectedJob.tag && (
                            <span className="career-location-tag detail-tag">
                              {selectedJob.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="career-detail-body">
                      <h4>Job Description</h4>
                      <p>{selectedJob.description}</p>

                      <h4>Primary Responsibilities</h4>
                      <ul>
                        <li>Design, build and ship scalable features.</li>
                        <li>Write clean, testable and maintainable code.</li>
                        <li>Participate in code reviews and mentoring.</li>
                        <li>Collaborate with cross-functional teams.</li>
                      </ul>

                      <h4>Qualifications</h4>
                      <ul>
                        <li>
                          3+ years of relevant experience (or as required).
                        </li>
                        <li>
                          Strong problem solving and communication skills.
                        </li>
                        <li>Familiarity with relevant frameworks and tools.</li>
                      </ul>

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
                          <p>{selectedJob.location}</p>
                        </div>
                        <div>
                          <h4>Job Location:</h4>
                          <p>{selectedJob.location}</p>
                        </div>
                        <div>
                          <h4>Experience:</h4>
                          <p>Minimum 2+ Years</p>
                        </div>
                      </div>
                    </div>
                    <div className="career-detail-cta">
                      <button
                        className="career-apply-btn detail-apply"
                        onClick={() => handleApply(selectedJob)}
                      >
                        Apply Now
                      </button>
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
          <p className="NotFoundJobs"> Not found Jobs.....</p>
        )}

        {/* BOTTOM CTA – editable text + image */}
         <section
          className="promotions-cta-banner"
          contentEditable={isEditMode}
          suppressContentEditableWarning={true}
        >
          <div className="promotions-cta-inner">
            <div className="promotions-cta-text">
              <h2 className="promotions-cta-heading">
                Let’s Build a Smarter, Secure 
                <br />
                IT Future Together
              </h2>
              <p className="promotions-cta-desc">
            Have a question or need expert support? Reach out to our team today—we’re here to provide fast, reliable guidance and the right IT solutions for your business.
              </p>
              <button
                className="promotions-cta-btn"
                type="button"
                onClick={onOpenContact}
              >
                Know more
              </button>
            </div>
            <div className="promotions-cta-image-wrap">
  <img
    src={ctaImage}
    alt="CTA illustration"
    className="promotions-cta-image"
  />

  {isEditMode && (
    <div className="promotions-image-upload">
      <label className="promotions-upload-label">
        Change CTA Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleCtaImageChange}
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

export default Career;
