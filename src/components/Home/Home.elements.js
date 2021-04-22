import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageArrow from "../../images/Path-1.svg";
import ImageSmallLine from "../../images/Line-4.svg";
import ImageLinkArrow from "../../images/Icon-awesome-long-arrow-alt-right.svg";

export const HomeContainer = styled.div`
  background: #141317;
  height: 150vh;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  font-family: "Cormorant Unicase", serif;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-family: "Cormorant Unicase", serif;
  font-weight: 500;
  margin-top: 60px;
  position: absolute;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  font-size: 160px;
  z-index: 100;
  left: 20%;
  cursor: default;
  @media screen and (max-width: 962px) {
    font-size: 95px;
  }
  @media screen and (max-width: 762px) {
    font-size: 80px;
  }
  @media screen and (max-width: 482px) {
    font-size: 65px;
    left: 15%;
  }
`;

export const SubText = styled.h4`
  color: #fff;
  font-size: 15px;
  position: absolute;
  letter-spacing: 1.1px;
  font-weight: 400;
  font-style: italic;
  top: 18%;
  right: 30%;
  z-index: 2;
  @media screen and (max-width: 1147px) {
    display: flex;
    top: 15%;
    right: 10%;
  }

  @media screen and (max-width: 800px) {
    top: 25%;
  }
  @media screen and (max-width: 762px) {
    display: flex;
    top: 25%;
    left: 5%;
  }
`;
export const SideText = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.3px;
  font-style: italic;
  position: absolute;
  top: 43%;
  left: 35%;
  @media screen and (max-width: 1147px) {
    display: none;
  }
`;

export const SmallLine = styled.i`
  display: flex;
  cursor: pointer;
  background-image: url(${ImageSmallLine});
  background-position: center;
  width: 76px;
  height: 2px;
  position: absolute;
  top: 44%;
  left: 29%;

  @media screen and (max-width: 1147px) {
    display: none;
  }
`;

export const ShopCircle = styled(Link)`
  width: 80px;
  height: 80px;
  text-decoration:none;
  cursor: pointer;
  border-radius: 50%;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  right: 10%;
`;

export const MainImage = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 157px;
  height: 441px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  object-fit: contain;
  position: absolute;
  top: 25%;
  right: 19%;
  z-index: 1;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 400px;
    height: 550px;
    object-fit: contain;
    top: 28%;
    left: -10%;
  }
  @media screen and (max-width: 762px) {
    width: 350px;
    height: 500px;
    top: 28%;
    left: -40%;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 70%;
  text-align: left;
  .sweaters {
    margin-left: 20%;
  }

  @media screen and (max-width: 1147px) {
    display: block;
    left: 0%;
    top: 80%;
  }
`;

export const LinkText = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  font-size: 16px;
  padding: 20px;
  font-weight: 400;
  letter-spacing: 1.3px;
  position: relative;
`;

export const LinkArrow = styled.i`
  display: flex;
  background-image: url(${ImageLinkArrow});
  background-position: center;
  width: 45px;
  height: 11px;
  position: absolute;
  top: 43%;
  left: 120%;
  cursor: pointer;
`;

export const Arrow = styled.i`
  display: flex;
  background-image: url(${ImageArrow});
  background-position: center;
  width: 370px;
  height: 3px;
  position: absolute;
  left: 10%;
  cursor: pointer;
`;
