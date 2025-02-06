import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/layout/Home";
import Header from "./assets/components/layout/Header";
import CreditPage from "./assets/pages/Credits";
import About from "./assets/pages/About";
import Footer from "./assets/components/layout/Footer";
import DesignAndSupply from "./assets/pages/caseStudies/DesignAndSupply";
import WhyChooseUs from "./assets/pages/WhyChooseUs";
import TeamPage from "./assets/pages/TeamPage";
import PlantEngineering from "./assets/pages/service/PlantEngineering";
import Services from "./assets/pages/service/Services";
import ScrollToTop from "./assets/components/common/ScrollToTop";
import CaseStudies from "./assets/pages/caseStudies/CaseStudies";
import Contact from "./assets/pages/Contact";
import Careers from "./assets/pages/Careers";
import EarthingSystemDesign from "./assets/pages/caseStudies/EarthingSystemDesign";
import BatteryStorageIntegration from "./assets/pages/service/BatteryStorageIntegration";
import PowerSystemStudies from "./assets/pages/caseStudies/PowerSystemStudies";
import CableSolution from "./assets/pages/service/CableSolution";
import Apply from "./assets/pages/JobApplicationForm";
import JobApplicationForm from "./assets/pages/JobApplicationForm";
import EarthingDesign from "./assets/pages/service/EarthingDesign";
import ProtectionDesign from "./assets/pages/service/ProtectionDesign";
import PowerSystemStudiesService from "./assets/pages/service/PowerSystemStudiesService";
import Survey from "./assets/pages/service/Survey";
import LoadTestCaseStudy from "./assets/pages/caseStudies/LoadTestCaseStudy";
import GalleryPage from "./assets/pages/gallery/GalleryPage";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<JobApplicationForm />} />
        <Route path="/temp" element={<JobApplicationForm />} />
        <Route path="/gallery" element={<GalleryPage />} />


        {/* Service Sub-Routes */}
        <Route
          path="/services/plant-engineering"
          element={<PlantEngineering />}
        />
        {/* <Route
          path="/services/battery-storage-integration"
          element={<BatteryStorageIntegration />}
        /> */}
        <Route path="/services/cable-solution" element={<CableSolution />} />
        <Route
          path="/services/earthing-solution"
          element={<EarthingDesign />}
        />
        <Route
          path="/services/protection-design"
          element={<ProtectionDesign />}
        />
        <Route
          path="/services/power-system"
          element={<PowerSystemStudiesService />}
        />
        <Route path="/services/survey" element={<Survey />} />






        {/* Case Studies Sub-Routes */}
        <Route
          path="/case-studies/design&supply"
          element={<DesignAndSupply />}
        />
        <Route
          path="/case-studies/earthingsystemdesign"
          element={<EarthingSystemDesign />}
        />
        <Route
          path="/case-studies/powersystemstudies"
          element={<PowerSystemStudies />}
        />
        <Route
          path="/case-studies/loadtestcasestudy"
          element={<LoadTestCaseStudy />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
