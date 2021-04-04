import React, { useState } from "react";
import Axios from "axios";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar.elements";

const logout = () => {
  Axios({
    url: 'http://localhost:4000/logout',
    method: 'GET',
    withCredentials: true
  }).then(({ data }) => {
    if (data.err) alert('failed')
    else {
      localStorage.isLoggedIn = 'false'
      window.location.replace('/home')
    }
  })
}

const Sidebar = ({ isOpen, toggle }) => {
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/products" onClick={toggle}>
            Shop
          </SidebarLink>
          <SidebarLink to="/cart" onClick={toggle}>
            Cart
          </SidebarLink>
          <SidebarLink to="/about-us" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="/contact-us" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink onClick={toggle, logout}>
            Log out
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
