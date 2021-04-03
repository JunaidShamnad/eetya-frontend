import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import SignIn from "../components/SignIn/SignIn";

const SignInPage = ({setIsloggedIn}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
       <SignIn setIsloggedIn={setIsloggedIn}/>
      <Footer />
    </>
  );
};

export default SignInPage;
