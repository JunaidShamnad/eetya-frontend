import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import HomeProducts from "../components/HomeProducts";
import ProductEdit from "../components/ProductEdit";
import { useHistory } from "react-router";
import { useParams } from "react-router";

const ProductEditPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const history = useHistory();
    const {id} = useParams()
  useEffect(() => {
    if (!userData) {
      history.push("/signin");
    } else {
      let role = userData.user.role;
      if (role === 2) {
        history.push(`/product-edit/${id}`);
      } else if (role === 1 || role === 3) {
        history.push("/home");
      }
    }
  }, []);
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
