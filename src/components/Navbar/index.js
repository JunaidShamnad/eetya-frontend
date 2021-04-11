import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {  useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Badge from '@material-ui/core/Badge';


import {
  Nav,
  NavLink,
  NavMenu,
  NavItem,
  NavbarContainer,
  MobileIcon,
  Logo,
  UserNameTag
} from "./Navbar.elements";
import decode from 'jwt-decode'; 
import Axios from "../../axios";

const Navbar = ({ toggle }) => {
 
  
  const [scrollNav, setScrollNav] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/signin');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);

  }, [location]);

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('user')))return
    Axios({
      url:'/buyer/cart-count',
      method:'post',
      data:{userId:JSON.parse(localStorage.getItem('user')).user._id}
    }).then((res)=>{
        setCartCount(res.data.count)
    })
    
  }, [])

  const chnageNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", chnageNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Logo to="/" onClick={toggleHome}>
              Eetya
            </Logo>

            <NavMenu>
              {user ? 
                <NavItem style={{color: 'white'}}>
               <UserNameTag to="/user-details"> {user.username} </UserNameTag>
              </NavItem>
              : null}
              
             
              <NavItem>
                <NavLink to="/cart">
                <Badge color="secondary" badgeContent={cartCount}>
                  <img
                    src={
                      require("../../images/Icon feather-shopping-cart.svg")
                        .default
                    }
                    alt="Logo"
                  />
                  </Badge>
                </NavLink>
              </NavItem>

              <MobileIcon onClick={toggle}>
                <img
                  src={require("../../images/Group 5.svg").default}
                  alt="Logo"
                />
              </MobileIcon>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
