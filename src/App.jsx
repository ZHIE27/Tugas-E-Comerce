import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./components/Form";
import HelpCenter from "./pages/HelpCenter"
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/PrivacyPolicy";
const LazyFooter = lazy(() => import("./components/Footer"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTopOnRefresh />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/terms&condition" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default App;
