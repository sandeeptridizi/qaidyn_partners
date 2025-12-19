import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import AboutPage from "./pages/AboutUs/Aboutus.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Promotions from "./pages/Promotions/Promotions.jsx";
import ServicePage from "./pages/Services/ServicePage.jsx";
import PrivacyPolicy from "./pages/ProvacyPolicy/Privacypolicy.jsx";
import TermsAndConditions from "./pages/TermsConditions/TermsConditions.jsx";
import Career from "./pages/Careers/Careers.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import SingleBlog from "./pages/SingleBlogPage/SingleBlogpage.jsx";
import Guidelines from "./pages/Guidelines/Guidelines.jsx";
import CaseStudies from "./pages/casestudies/CaseStudies.jsx";
import LoginPage from "./components/LogInPage/LogIn.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import CareerUpdate from "./components/careerCreation/updationCareerpage.jsx";
import SmallCard from "./components/managingCareers/managingCareers.jsx";
import CareerCreation from "./components/careerCreation/careerCreation.jsx";
// import UpdateBlog from "./components/BlogUpdation/BlogUpdation.jsx";
import { CreateBlog } from "./components/BlogCreationPage/blogcreation";
import { Manageblogs } from "./components/ManageBlogs/Manageblogs";
import { UpdateBlog } from "./components/BlogUpdation/BlogUpdation";
// import CreateBlog from "./components/BlogCreationPage/blogcreation.jsx";

// popup component
import ContactModal from "./components/ContactModal/ContactModal.jsx";

// 🔥 NEW: global edit mode provider
import { EditModeProvider } from "./components/context/EditModeContext.jsx";

function App() {
  // popup open/close state
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    // 🔥 Entire app wrapped with EditModeProvider
    <BrowserRouter>
      <EditModeProvider>
        {/* <Router> */}
          {/* popup rendered once for entire site */}
          <ContactModal open={isContactOpen} onClose={handleCloseContact} />

          <Routes>
            {/* Pass onOpenContact to pages that need it */}
            <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />}  />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/about"
              element={<AboutPage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/industries"
              element={<Industries onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/promotions"
              element={<Promotions onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/services/:category/:slug"
              element={<ServicePage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/privacypolicy"
              element={<PrivacyPolicy onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/TermsAndConditions"
              element={<TermsAndConditions onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/careers"
              element={<Career onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/blogs"
              element={<Blogs onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/singleBlog/:id"
              element={<SingleBlog onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/guidelines"
              element={<Guidelines onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/case-studies"
              element={<CaseStudies onOpenContact={handleOpenContact} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/manageblogs" element={<Manageblogs />} />
            <Route path="/blog-updation" element={<UpdateBlog />} />
            <Route path="/createCareer" element={<CareerCreation />} />
            <Route path="/managecareers" element={<SmallCard />} />
            <Route path="/career-update" element={<CareerUpdate />} />
          </Routes>
        {/* </Router> */}
      </EditModeProvider>
    </BrowserRouter>
  );
}

export default App;
