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
} from "./HeaderOne.elements";

const HeaderOne = () => {
  return (
    <>
      <MainDiv>
        <MainContainer>
          <FashionLine />
          <FashionText> FASHION STYLE </FashionText>
          <FashionLineTwo />
          <MainTitle> SEASON SALE </MainTitle>
          <ShopButton to='/products'> Shop Now <ShopBtnArrow /> </ShopButton>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderOne;
