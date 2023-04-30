import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index2 from "./pages/home/index2";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/service";
import ServicesDetails from "./pages/service/details";
import ComingSoon from "./pages/coming-soon";
import PricingPage from "./pages/pricing";
import NoMatch from "./pages/errors/no-match";
import Preloader from "./componets/preloader/Index";
import AboutDetailsPage from "./pages/about/details";

import AdminLogin from "./pages/admin-login";
import FlottingAction from "./componets/flottingAction/index";
import Social from "./componets/social/index";
class App extends React.Component {
  render() {
    return (
      <>
        <Social />
        <FlottingAction />
        <BrowserRouter>
          <Preloader />

          <Routes>
            <Route path="/" element={<Index2 />} />
            <Route path="index" element={<Index2 />}/>
      
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="about-detail-page" element={<AboutDetailsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services-details" element={<ServicesDetails />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="pricing" element={<PricingPage />} />
            {/* <Route path="team" element={<TeamPage />} /> */}
            <Route element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
