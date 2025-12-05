import React, { useEffect, useMemo, useState } from "react";
import "./Careers.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import ctaImg from "../../assets/promotions/freepik--Laptop--inject-23.png";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [jobs] = useState(initialJobs);
  const [query, setQuery] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id ?? null);

  // available filter options derived from jobs
  const locations = useMemo(
    () => ["All", ...uniqueValues(jobs, "location")],
    [jobs]
  );
  const levels = useMemo(() => ["All", ...uniqueValues(jobs, "level")], [jobs]);
  const types = useMemo(() => ["All", ...uniqueValues(jobs, "type")], [jobs]);

  // filtered jobs
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

  // if filtered list changes, ensure a valid selected job (default to first)
  useEffect(() => {
    if (!filteredJobs.length) {
      setSelectedJobId(null);
      return;
    }
    // if current selected is not in filtered, set to first
    const exists = filteredJobs.some((j) => j.id === selectedJobId);
    if (!exists) {
      setSelectedJobId(filteredJobs[0].id);
    }
  }, [filteredJobs, selectedJobId]);

  const selectedJob = filteredJobs.find((j) => j.id === selectedJobId) ?? null;

  const handleApply = (job) => {
    // implement apply flow here (open modal, redirect to form, etc.)
    // For demo, just alert:
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
        <div
          className="career-search-container"
          aria-label="search and filters"
        >
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

            <button
              className="career-view-jobs-btn"
              onClick={() => {
                // For this demo, "View Jobs" just clears filters to show all
                resetFilters();
              }}
              aria-label="View all jobs"
            >
              View Jobs
            </button>
          </div>
        </div>

        <div className="career-two-col">
          {/* Left column: list */}
          <aside className="career-left" aria-label="job list">
            {/* <div className="career-list-header">
              <h4 className="career-list-title">Open Positions</h4>
              <div className="career-list-count">{filteredJobs.length} jobs</div>
            </div> */}

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
                        <h5 className="career-job-title-list">{job.title}</h5>
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
                        <span className="career-job-type-list">{job.type}</span>
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

          {/* Right column: detail */}
          <section className="career-right" aria-label="job details">
            {selectedJob ? (
              <div className="career-job-detail">
                <div className="career-detail-header">
                  <div>
                    <h2 className="career-detail-title">{selectedJob.title}</h2>
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

                  {/* Example additional sections you can extend */}
                  <h4>Primary Responsibilities</h4>
                  <ul>
                    <li>Design, build and ship scalable features.</li>
                    <li>Write clean, testable and maintainable code.</li>
                    <li>Participate in code reviews and mentoring.</li>
                    <li>Collaborate with cross-functional teams.</li>
                  </ul>

                  <h4>Qualifications</h4>
                  <ul>
                    <li>3+ years of relevant experience (or as required).</li>
                    <li>Strong problem solving and communication skills.</li>
                    <li>Familiarity with relevant frameworks and tools.</li>
                  </ul>

                  <div className="career-detail-footer">
                    <div>
                      <h4>Employment Type:</h4>
                      <p>{selectedJob.type}</p>
                    </div>
                    <div>
                      <h4> Work Place Type:</h4>
                      <p> {selectedJob.location}</p>
                    </div>
                    <div>
                      <h4> Salary:</h4>
                      <p>{selectedJob.location}</p>
                    </div>
                    <div>
                      <h4> Job Location:</h4>
                      <p>{selectedJob.location}</p>
                    </div>
                    <div>
                      <h4>Experience:</h4>
                      <p> Minimum 2+ Years</p>
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
                No job selected. Adjust search/filters to see open positions.
              </div>
            )}
          </section>
        </div>
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

export default Career;
