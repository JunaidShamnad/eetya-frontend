import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import HomeProducts from "../components/HomeProducts";
import ProductEdit from "../components/ProductEdit";

const ProductEditPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ProductEdit />
      <HomeProducts />
      <HeaderTwo />
      <HeaderThree />
      <Footer />
    </>
  );
};

export default ProductEditPage;
