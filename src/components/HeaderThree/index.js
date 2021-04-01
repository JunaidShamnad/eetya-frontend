import React from "react";
import {
  MainContainer,
  MainDiv,
  MainTitle,
  ShopButton,
  ShopBtnArrow,
  MainImage,
  SecondaryText,
  SecondBtn,
  TextContainer
} from "./HeaderThree.elements";

const HeaderThree = () => {
  return (
    <>
      <MainDiv>
        <MainContainer>
          <TextContainer>
          <MainTitle> Become A Member</MainTitle>
          <SecondaryText>Of This Growing Communtity</SecondaryText>
          <ShopButton> Register Now <ShopBtnArrow /> </ShopButton>
          <SecondBtn>Let's Talk</SecondBtn>
          </TextContainer>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderThree;
