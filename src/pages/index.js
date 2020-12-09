import React, { useState } from "react";
import HeroSection from "../components/heroIndex";
import Sidebar from "../components/sidebarIndex";
import Navbar from "../components/navbarIndex";

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
    </>
  );
};

export default Home;
