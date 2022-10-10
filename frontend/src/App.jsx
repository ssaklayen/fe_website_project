import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components here
import NavBar from "./components/navbar.component";
import FooterBar from "./components/footerbar.component";
import SplashPage from "./components/splashpage.component";
import EnergyStoragePage from "./components/energystoragepage.component";
import LandownersPage from "./components/landownerspage.component";
import AboutUsPage from "./components/aboutuspage.component";
import CareersPage from "./components/careerspage.component";
import ContactPage from "./components/contactpage.component";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SplashPage />} exact />
          <Route path="/energystorage" element={<EnergyStoragePage />} />
          <Route path="/landowners" element={<LandownersPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterBar />
    </Router>
  );
}

export default App;
