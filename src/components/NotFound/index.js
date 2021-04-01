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
} from "./NotFound.elements";

const NotFound = () => {

        const toggleHome = () => {
          scroll.scrollToTop();
        };
      
  return (
    <>
      <MainDiv>
        <MainContainer>
          <MainTitle>404 </MainTitle>
          <SubTitle>The page doesn't exist</SubTitle>
          <LinkContainer>
           <LinkText to="/" onClick={toggleHome}>Go to Home <ArrowIcon/> </LinkText>
          </LinkContainer>
         
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default NotFound;
