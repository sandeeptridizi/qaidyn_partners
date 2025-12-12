import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <EditModeProvider>
      <Router>
        {/* popup rendered once for entire site */}
        <ContactModal open={isContactOpen} onClose={handleCloseContact} />

        <Routes>
          {/* Pass onOpenContact to pages that need it */}
          <Route
            path="/"
            element={<HomePage onOpenContact={handleOpenContact} />}
          />
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
        </Routes>
      </Router>
    </EditModeProvider>
  );
}

export default App;
