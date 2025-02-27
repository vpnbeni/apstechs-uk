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
import Products from "./assets/pages/Products";
import ProductsPage from "./assets/pages/ProductsPage";
import Product from "./assets/pages/Product";
import Maintainence from "./assets/components/common/Maintainence";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={About ? <About /> : <Maintainence />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/credit" element={CreditPage ? <CreditPage /> : <Maintainence />} />
        <Route path="/contact" element={Contact ? <Contact /> : <Maintainence />} />
        <Route path="/case-studies" element={CaseStudies ? <CaseStudies /> : <Maintainence />} />
        <Route path="/services" element={Services ? <Services /> : <Maintainence />} />
        <Route path="/careers" element={Careers ? <Careers /> : <Maintainence />} />
        <Route path="/apply" element={JobApplicationForm ? <JobApplicationForm /> : <Maintainence />} />
        <Route path="/temp" element={<Maintainence />} />
        <Route path="/gallery" element={GalleryPage ? <GalleryPage /> : <Maintainence />} />
        <Route path="/product/:productId" element={Product ? <Product /> : <Maintainence />} />

        {/* Service Sub-Routes */}
        <Route
          path="/services/plant-engineering"
          element={PlantEngineering ? <PlantEngineering /> : <Maintainence />}
        />
        <Route
          path="/services/battery-storage-integration"
          element={BatteryStorageIntegration ? <BatteryStorageIntegration /> : <Maintainence />}
        />
        <Route 
          path="/services/cable-solution" 
          element={CableSolution ? <CableSolution /> : <Maintainence />} 
        />
        <Route
          path="/services/earthing-solution" 
          element={EarthingDesign ? <EarthingDesign /> : <Maintainence />}
        />
        <Route
          path="/services/protection-design"
          element={ProtectionDesign ? <ProtectionDesign /> : <Maintainence />}
        />
        <Route
          path="/services/power-system"
          element={PowerSystemStudiesService ? <PowerSystemStudiesService /> : <Maintainence />}
        />
        <Route 
          path="/services/survey" 
          element={Survey ? <Survey /> : <Maintainence />} 
        />

        {/* Case Studies Sub-Routes */}
        <Route
          path="/case-studies/design&supply"
          element={DesignAndSupply ? <DesignAndSupply /> : <Maintainence />}
        />
        <Route
          path="/case-studies/earthingsystemdesign"
          element={EarthingSystemDesign ? <EarthingSystemDesign /> : <Maintainence />}
        />
        <Route
          path="/case-studies/powersystemstudies"
          element={PowerSystemStudies ? <PowerSystemStudies /> : <Maintainence />}
        />
        <Route
          path="/case-studies/loadtestcasestudy"
          element={LoadTestCaseStudy ? <LoadTestCaseStudy /> : <Maintainence />}
        />

        {/* Catch all route for undefined pages */}
        <Route path="*" element={<Maintainence />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
