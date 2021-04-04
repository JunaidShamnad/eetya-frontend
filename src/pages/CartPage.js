import { useParams } from 'react-router-dom'
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import HomeProducts from "../components/HomeProducts";
import ProductDetails from "../components/ProductDetails";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { id } = useParams()

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ProductDetails id={id} />
      <HomeProducts />
      <HeaderTwo />
      <HeaderThree />
      <Footer />
    </>
  );
};

export default CartPage;
