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
import {useHistory} from "react-router-dom"

const HeaderTwo = () => {
  const history = useHistory();
  return (
    <>
      <MainDiv>
        <MainContainer>
          <FashionLine />
          <FashionText> FASHION STYLE </FashionText>
          <FashionLineTwo />
          <SecondaryText>Sell Your</SecondaryText>
          <MainTitle>  Products </MainTitle>
          <ShopButton  onClick={() => {
                history.push("/signup");
              }}> Register Now <ShopBtnArrow /> </ShopButton>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderTwo;
