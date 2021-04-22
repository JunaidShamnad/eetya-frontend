import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import HelpCenter from "../components/HelpCenter";
import { useHistory } from "react-router";

const HelpCenterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const history = useHistory()

  useEffect(() => {
    if(!userData){
      history.push('/signin')
    }
    
  }, [])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HelpCenter/>
      <Footer />
    </>
  );
};

export default HelpCenterPage;
