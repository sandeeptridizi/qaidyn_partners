// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
import { CreateBlog } from "./components/BlogCreationPage/blogcreation";
import { Manageblogs } from "./components/ManageBlogs/Manageblogs";
import { UpdateBlog } from "./components/BlogUpdation/BlogUpdation";

import ContactModal from "./components/ContactModal/ContactModal.jsx";
import { EditModeProvider } from "./components/context/EditModeContext.jsx";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <EditModeProvider>
      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/industries" element={<Industries onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/promotions" element={<Promotions onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/services/:category/:slug" element={<ServicePage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/manageblogs" element={<Manageblogs />} />
        <Route path="/blog-updation" element={<UpdateBlog />} />
        <Route path="/createCareer" element={<CareerCreation />} />
        <Route path="/managecareers" element={<SmallCard />} />
        <Route path="/career-update" element={<CareerUpdate />} />
      </Routes>
    </EditModeProvider>
  );
}

export default App;
