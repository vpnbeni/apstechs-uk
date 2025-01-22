import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/layout/Home";
import Header from "./assets/components/layout/Header";
import CreditPage from "./assets/pages/Credits";
import About from "./assets/pages/About";
import Footer from "./assets/components/layout/Footer";
import CaseStudies from "./assets/pages/CaseStudies";
import DesignAndSupply from "./assets/pages/DesignAndSupply";
import WhyChooseUs from "./assets/pages/WhyChooseUs";
import TeamPage from "./assets/pages/TeamPage";
import PlantEngineering from "./assets/pages/service/PlantEngineering";
import Services from "./assets/pages/service/Services";
import ScrollToTop from "./assets/components/common/ScrollToTop";

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
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />

        {/* Service Sub-Routes */}
        <Route
          path="/services/plant-engineering"
          element={<PlantEngineering />}
        />

        {/* Case Studies Sub-Routes */}
        <Route
          path="/case-studies/design-and-supply"
          element={<DesignAndSupply />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
