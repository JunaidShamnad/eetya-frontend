import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Home from "../components/Home";
import { useHistory } from "react-router";

const HomePage = () => {
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
      history.push('/')
    }else{
      history.push('/home')
    }
    
  }, [])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
       <Home/>
      <Footer />
    </>
  );
};

export default HomePage;
