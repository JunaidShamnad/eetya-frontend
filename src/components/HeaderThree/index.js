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
  TextContainer,
} from "./HeaderThree.elements";

import { useHistory } from "react-router-dom";
const HeaderThree = () => {
  const history = useHistory();

  return (
    <>
      <MainDiv>
        <MainContainer>
          <TextContainer>
            <MainTitle> Become A Member</MainTitle>
            <SecondaryText>Of This Growing Communtity</SecondaryText>
            <ShopButton
              onClick={() => {
                history.push("/signup");
              }}
            >
              {" "}
              Register Now <ShopBtnArrow />{" "}
            </ShopButton>
            <SecondBtn>Let's Talk</SecondBtn>
          </TextContainer>
          <MainImage />
        </MainContainer>
      </MainDiv>
    </>
  );
};

export default HeaderThree;
