import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/layout/Home";
import Header from "./assets/components/layout/Header";
import CreditPage from "./assets/pages/Credits";
import About from "./assets/pages/About";
import Footer from "./assets/components/layout/Footer";
import CaseStudies from "./assets/pages/CaseStudies";
import DesignAndSupply from "./assets/pages/DesignAndSupply";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route
          path="/case-studies/design&supply"
          element={<DesignAndSupply />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
