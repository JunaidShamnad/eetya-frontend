import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import UserDetails from "../components/UserDetails";
import { useHistory } from "react-router";

const UserDetailsPage = () => {
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
      if (role === 1 || role === 2) {
        history.push("/user-details");
      } else if (role === 3) {
        history.push("/home");
      }
    }
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <UserDetails/>
      <Footer />
    </>
  );
};

export default UserDetailsPage;
