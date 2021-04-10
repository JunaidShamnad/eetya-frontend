import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import ProductsSection from "../components/ProductsSection";

const ProductPage = ({setIsloggedIn}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ProductsSection setIsloggedIn={setIsloggedIn} />
      <HeaderTwo />
      <HeaderThree />
      <Footer />
    </>
  );
};

export default ProductPage;
