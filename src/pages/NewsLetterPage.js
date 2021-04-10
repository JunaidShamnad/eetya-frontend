import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import NewsLetter from "../components/NewsLetter";
import { useHistory } from "react-router";

const NewsLetterPage = () => {
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
      if (role === 3) {
        history.push("/news-letter");
      } else if (role === 1 || role === 2) {
        history.push("/home");
      }
    }
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <NewsLetter/>
      <Footer />
    </>
  );
};

export default NewsLetterPage;
