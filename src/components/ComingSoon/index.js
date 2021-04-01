import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
   ArrowIcon,
    LinkText,
    LinkContainer,
  MainContainer,
  MainDiv,
  MainTitle,
  SubTitle,
} from "./ComingSoon.elements";

const ComingSoon = () => {

        const toggleHome = () => {
          scroll.scrollToTop();
        };
      
  return (
    <>
      <MainDiv>
        <MainContainer>
          <MainTitle>Coming Soon</MainTitle>
          <SubTitle>This page will be avilable after next updates</SubTitle>
          <LinkContainer>
           <LinkText to="/" onClick={toggleHome}>Go to Home <ArrowIcon/> </LinkText>
          </LinkContainer>
         
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default ComingSoon;
