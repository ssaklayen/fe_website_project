import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components here
import NavBar from "./pages/page.navbar";
import FooterBar from "./pages/page.footer";
import SplashPage from "./pages/page.main";
import EnergyStoragePage from "./pages/page.energystorage";
import LandownersPage from "./pages/page.landowners";
import AboutUsPage from "./pages/page.aboutus";
import CareersPage from "./pages/page.careers";
import ContactPage from "./pages/page.contactus";

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
