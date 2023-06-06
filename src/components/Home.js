import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import PartnerSection from "./PartnerSection";
import Review from "./Review";
import ProvideSection from "./ProvideSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <PartnerSection />
      <ProvideSection />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
