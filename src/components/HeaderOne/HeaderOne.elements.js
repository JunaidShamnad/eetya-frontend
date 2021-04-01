import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageFashionLine from "../../images/Path-81.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeaderImage from "../../images/Model_Image.png";

export const MainDiv = styled.div`
  background: #141317;
  color: #fff;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  background: #1f1e23;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  width: 90vw;
  height: 60vh;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 70px;
  font-weight: 500;
  letter-spacing: 1.3px;
  text-align: left;
  position: absolute;
  top: 35%;
  left: 5%;

  @media screen and (max-width: 800px) {
    font-size: 40px;
    max-width: 40px;
    top: 30%;
  }
`;

export const FashionText = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  padding: 0 0 8px 0;
  letter-spacing: 2px;
  text-align: left;
  margin-top: 20px;
  position: absolute;
  top: 8%;
  left: 5%;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    top: 10%;
  }
`;

export const FashionLine = styled.i`
  background-image: url(${ImageFashionLine});
  display: flex;
  object-fit: contain;
  background-position: center;
  position: absolute;
  top: 12%;
  left: 4.5%;
  width: 175px;
  height: 4px;

  @media screen and (max-width: 1047px) {
    display: none;
  }
`;

export const FashionLineTwo = styled.i`
  background-image: url(${ImageFashionLine});
  display: flex;
  object-fit: contain;
  background-position: center;
  position: absolute;
  top: 21.5%;
  left: 4.5%;
  width: 175px;
  height: 4px;

  @media screen and (max-width: 1047px) {
    display: none;
  }
`;

export const ShopButton = styled(Link)`
  background: none;
  text-decoration: none;
  padding: 16px 0;
  border: 2.5px solid #fff;
  outline: none;
  border-radius: 40px;
  min-width: 180px;
  max-width: 180px;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;
  position: absolute;
  top: 70%;
  left: 5%;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    min-width: 140px;
    min-height: 40px;
    max-height: 42px;
    border: 2px solid #fff;
  }
`;

export const ShopBtnArrow = styled(HiArrowNarrowRight)`
  display: flex;
  margin-left: 9%;
  object-fit: contain;
  background-position: center;
`;

export const MainImage = styled.div`
  background-image: url(${HeaderImage});
  display: flex;
  justify-content: flex-end;
  width: 50vw;
  height: 60vh;
  object-fit: contain;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 60vw;
  }
`;
