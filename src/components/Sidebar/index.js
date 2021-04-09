import React, { useState, useEffect } from "react";
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
import {  useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'; 


const Sidebar = ({ isOpen, toggle }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/signin');

    setUser(null);
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
        {user ? 
        <SideBtnWrap>
        <SidebarRoute onClick={logout}>Log out</SidebarRoute>
      </SideBtnWrap>
      :
      <SideBtnWrap>
      <SidebarRoute to="/signin">Sign In</SidebarRoute>
    </SideBtnWrap>
        }
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
