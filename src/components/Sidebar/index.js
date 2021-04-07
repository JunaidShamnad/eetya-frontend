import React, { useState } from "react";
import Axios from '../../axios';
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

const Sidebar = ({ isOpen, toggle }) => {
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/user",
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
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
