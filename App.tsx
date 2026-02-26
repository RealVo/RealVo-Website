import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './styles.css';
import Contact from './pages/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhyWhatBridge from './components/WhyWhatBridge';
import HowItWorks from './components/HowItWorks';
import CaptureOptions from './components/CaptureOptions';
import VBPlatform from './components/VBPlatform';
import Industries from './components/Industries';
import UseCases from './pages/UseCases';
import ProgramStructure from './components/ProgramStructure';
import Footer from './components/Footer';
import PrivateEnclosedBooth from './pages/PrivateEnclosedBooth';
import ImplementationProcess from './components/ImplementationProcess';
import FreeStandingKiosk from './pages/FreeStandingKiosk';
import DesktopTabletKiosk from './pages/DesktopTabletKiosk';
import VirtualVideoBooth from './pages/VirtualVideoBooth';
import VBPlatform_More from './pages/VBPlatform_More';
import TorontoVideoBooth from './pages/TorontoVideoBooth';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import SecurityAndDataProtection from './pages/SecurityAndDataProtection';
import CaseStudies from './pages/CaseStudies';

// ------------------------
// Google Analytics loader
// ------------------------
const useGoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QT7PJEMBHB';
    script.async = true;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-QT7PJEMBHB');
  }, []);
};

// ------------------------
// ONE scroll system (the only one)
// ------------------------
const HashScroller: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) {
        if (++tries < 120) requestAnimationFrame(tryScroll);
        return;
      }
      const header = document.querySelector('header');
      const headerH = header ? header.getBoundingClientRect().height : 65;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH;
      if (Math.abs(window.scrollY - top) > 5) {
        window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'auto' });
      }
    };
    requestAnimationFrame(tryScroll);
    setTimeout(() => requestAnimationFrame(tryScroll), 200);
  }, [location.pathname, location.hash]);
  return null;
};

// ------------------------
// Home / Landing page
// ------------------------
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <CaptureOptions />
        <WhyWhatBridge />
        <ImplementationProcess />
        <HowItWorks />
        <VBPlatform />
        <Industries />
        <ProgramStructure />
      </main>
      <Footer />
    </div>
  );
};

// ------------------------
// App routes
// ------------------------
const App: React.FC = () => {
  useGoogleAnalytics();

  return (
    <Router>
      <HashScroller />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/capture/private-enclosed-booth" element={<PrivateEnclosedBooth />} />
        <Route path="/capture/free-standing-kiosk" element={<FreeStandingKiosk />} />
        <Route path="/capture/desktop-tablet-kiosk" element={<DesktopTabletKiosk />} />
        <Route path="/capture/virtual-video-booth" element={<VirtualVideoBooth />} />
        <Route path="/vbplatform-more" element={<VBPlatform_More />} />
        <Route path="/toronto-video-booth" element={<TorontoVideoBooth />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/security-and-data-protection" element={<SecurityAndDataProtection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
