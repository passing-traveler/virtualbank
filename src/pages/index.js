import React, { useState } from "react";
import HeroSection from "../components/heroIndex";
import Sidebar from "../components/sidebarIndex";
import Navbar from "../components/navbarIndex";
import InfoSection from "../components/infoIndex";
import { homeObjOne } from "../components/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
