import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {  useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    color:'#fff',
    fontSize:'20px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    color:'#fff',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '180px',
      },
    },
  },
}));

const Navbar = ({ toggle }) => {
    const classes = useStyles();
  
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
              
              <NavItem>
                <NavLink to="/">
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
