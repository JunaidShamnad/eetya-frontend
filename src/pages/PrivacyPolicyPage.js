import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import PrivacyPolicy from "../components/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PrivacyPolicy/>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
