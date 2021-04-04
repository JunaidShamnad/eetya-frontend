import { useParams } from 'react-router-dom'
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import SignIn from "../components/SignIn/SignIn";

const SignInPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { path } = useParams()

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SignIn path={path} />
      <Footer />
    </>
  );
};

export default SignInPage;
