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
import { Link, Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";

const HeaderOne = () => {
  const history = useHistory();
  return (
    <>
      <MainDiv>
        <MainContainer>
          <FashionLine />
          <FashionText> FASHION STYLE </FashionText>
          <FashionLineTwo />
          <MainTitle> SEASON SALE</MainTitle>
          <ShopButton
            onClick={() => {
              history.push("/products");
            }}
          >
            {" "}
            Shop Now <ShopBtnArrow />{" "}
          </ShopButton>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderOne;
