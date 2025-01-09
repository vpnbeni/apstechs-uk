import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/layout/Home";
import About from "./assets/components/landingPage/About";
import Header from "./assets/components/layout/Header";
import CreditPage from "./assets/pages/Credits";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/credit" element={<CreditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
