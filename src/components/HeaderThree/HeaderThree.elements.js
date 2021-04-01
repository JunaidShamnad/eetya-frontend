import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeaderImage from "../../images/Images_.png";

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
  background: none;
  margin-top: 7rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  width: 90vw;
  height: 65vh;
  display: flex;
  position: relative;


`;
export const SecondaryText = styled.h3`
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1.2px;
  position: absolute;
  top: 50%;
  left: 5%;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    max-width: 200px;
    top: 43%;
  }
`;
export const MainTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 1.3px;
  text-align: left;
  position: absolute;
  top: 25%;
  left: 5%;

  @media screen and (max-width: 800px) {
    font-size: 30px;
    max-width: 200px;
    top: 15%;
  }
`;

export const ShopButton = styled(Link)`
  background: none;
  text-decoration: none;
  text-overflow: none;
  word-wrap: none;
  padding: 16px 0;
  border: 2.5px solid #fff;
  outline: none;
  border-radius: 40px;
  min-width: 200px;
  max-width: 200px;
  min-height: 50px;
  max-height: 50px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;
  position: absolute;
  top: 72%;
  left: 5%;

  @media screen and (max-width: 900px) {
    min-width: 175px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
    min-width: 175px;
    min-height: 40px;
    max-height: 42px;
    position: absolute;
    top: 62%;
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
  width: 30vw;
  height: 60vh;
  object-fit: cover;
  background-position: center;
  margin-left: auto;
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`;

export const SecondBtn = styled(Link)`
  border-radius: 40px;
  background: #fff8f0;
  text-decoration: none;
  padding: 16px 0px;
  color: #141317;
  font-size: 18px;
  outline: none;
  font-weight: 400;
  min-width: 135px;
  max-width: 135px;
  min-height: 46px;
  max-height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 72%;
  left: 24%;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #141317;
    color: #fff8f0;
  }

  @media screen and (max-width: 1100px) {
    position: absolute;
    top: 85%;
    left: 5%;
  }

  @media screen and (max-width: 986px) {
    position: absolute;
    top: 85%;
    left: 5%;
    font-size: 18px;
    min-width: 135px;
    max-width: 135px;
    min-height: 40px;
    max-height: 42px;
  }

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 75%;
    left: 5%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
`;
