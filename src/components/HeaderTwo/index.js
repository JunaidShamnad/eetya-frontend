import React from "react";
import {
  MainContainer,
  MainDiv,
  MainTitle,
  FashionText,
  FashionLine,
  FashionLineTwo,
  ShopButton,
  ShopBtnArrow,
  MainImage,
  SecondaryText
} from "./HeaderTwo.elements";

const HeaderTwo = () => {
  return (
    <>
      <MainDiv>
        <MainContainer>
          <FashionLine />
          <FashionText> FASHION STYLE </FashionText>
          <FashionLineTwo />
          <SecondaryText>Sell Your</SecondaryText>
          <MainTitle>  Products </MainTitle>
          <ShopButton to='/signup-seller'> Register Now <ShopBtnArrow /> </ShopButton>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderTwo;
