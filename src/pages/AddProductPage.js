import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AddProduct from "../components/AddProducts";
import { useHistory } from "react-router";

const AddProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const history = useHistory();

  useEffect(() => {
    if (!userData) {
      history.push("/signin");
    } else {
      let role = userData.user.role;
      if (role === 2) {
        history.push("/add-product");
      } else if (role === 1 || role === 3) {
        history.push("/home");
      }
    }
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
     <AddProduct/>
      <Footer />
    </>
  );
};

export default AddProductPage;
