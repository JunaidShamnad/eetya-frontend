import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import HomeProducts from "../components/HomeProducts";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderOne />
      <HomeProducts />
      <HeaderTwo />
      <HeaderThree />
      <Footer />
    </>
  );
};

export default MainPage;
