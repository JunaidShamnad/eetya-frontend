import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import WhyMadeInUsa from "../components/WhyMadeInUsa/index";

const WhyMadeInUsaPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <WhyMadeInUsa/>
      <Footer />
    </>
  );
};

export default WhyMadeInUsaPage;
