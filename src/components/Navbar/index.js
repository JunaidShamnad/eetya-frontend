import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {  useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

const Navbar = ({ toggle }) => {
    
  
  const [scrollNav, setScrollNav] = useState(false);
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
              
<<<<<<< HEAD
              <NavItem>
                <NavLink to="/filter">
                     <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                </NavLink>
              </NavItem>
=======
             
>>>>>>> 13085ede4373e3a120b9fc1582a86d46ac9e0b97
              <NavItem>
                <NavLink to="/cart">
                  <img
                    src={
                      require("../../images/Icon feather-shopping-cart.svg")
                        .default
                    }
                    alt="Logo"
                  />
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
