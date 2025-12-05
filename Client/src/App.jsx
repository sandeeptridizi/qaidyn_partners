import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutUs/Aboutus';
import PrivacyPolicy from './pages/ProvacyPolicy/Privacypolicy';
import TermsAndConditions from './pages/TermsConditions/TermsConditions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
      </Routes>
    </Router>
  );
}

export default App;