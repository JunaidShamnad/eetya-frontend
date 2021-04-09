import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  background: #141317;
  height: 80px;
  display: flex;
  position: sticky;
  overflow-x: hidden;
  border-bottom: 1px solid rgba(112, 112, 112, 0.1);
  top: 0;
  padding: 0.5rem calc((80vw - 1000px) / 2);
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const UserNameTag = styled(LinkR)`
font-size:18px;
font-weight:400;
text-decoration:none;
color:#fff;
padding-left:2%;
padding-right:2%;
cursor:pointer;
text-transform:capitalize;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const MobileIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Logo = styled(LinkR)`
  color: #fff;
  display: flex;
  font-size: 24px;

  letter-spacing: 1.5px;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-bottom: 6px;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    margin-left: 0;
  }
`;

export const NavLink = styled(LinkR)`
  /* If you need smooth scroll change (LinkR) to (LinkS) */
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-bottom: 6px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  &:hover {
    color: #24a7ff;
    transition: 0.3s ease-in-out;
  }

  .search {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right:20px;
`;

export const NavItem = styled.li`
  list-style-type: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  background: rgb(37, 108, 225);
  background: linear-gradient(
    117deg,
    rgba(37, 108, 225, 1) 0%,
    rgba(22, 98, 224, 1) 20%,
    rgba(8, 83, 204, 1) 41%,
    rgba(2, 76, 195, 1) 59%,
    rgba(12, 79, 189, 1) 85%
  );
  padding: 10px 22px;
  white-space: nowrap;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
