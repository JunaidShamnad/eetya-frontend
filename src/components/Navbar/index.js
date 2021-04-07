import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLink,
  NavMenu,
  NavItem,
  NavbarContainer,
  MobileIcon,
  Logo,
} from "./Navbar.elements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

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
              <NavItem>
                <NavLink to="/">
                  <img
                    className="search"
                    src={
                      require("../../images/Icon feather-search.svg").default
                    }
                    alt="Logo"
                  />
                </NavLink>
              </NavItem>
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
