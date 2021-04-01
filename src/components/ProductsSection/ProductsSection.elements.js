import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscListFilter } from "react-icons/vsc";
import ImageCart from "../../images/Shop_Icon.svg";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export const MainDiv = styled.div`
  background: #141317;
  overflow-x: hidden;
  width: 100vw;
  position: relative;
`;

export const FadeText = styled.h1`
  color: #343434;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: -0.4rem;
  opacity: 0.3;
  text-transform: uppercase;

  @media screen and (max-width: 962px) {
    font-size: 80px;
  }
  @media screen and (max-width: 762px) {
    font-size: 60px;
  }
  @media screen and (max-width: 540px) {
    font-size: 45px;
  }
  @media screen and (max-width: 482px) {
    font-size: 40px;
  }
`;


export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  place-items:center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 2.3rem;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)`
  display: flex;
  text-decoration:none;
  border-radius:10px;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  max-width: 250px;
  max-height: 350px;
  min-width: 250px;
  min-height: 350px;
  margin-top:20px;
  padding: 20px;

  @media screen and (max-width:540px) {
    max-width: 320px;
    max-height: 350px;
    min-width: 320px;
    min-height: 350px;
  }
`;

export const ImageContainer = styled.img`
       display: flex;
   place-items:center;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 220px;
  max-height: 260px;
  min-width: 220px;
  min-height: 260px;

  @media screen and (max-width:540px) {
    display: flex;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    place-items:center;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 280px;
    min-width: 280px;
  }
`;

export const ProductUl = styled.ul`
  color: #fff;
  display: flex;
  place-items:center;
  max-height: 90px;
  max-width: 220px;
  min-height: 90px;
  min-width: 220px;
  justify-content: space-between;

  @media screen and (max-width:540px){
    max-width: 280px;
    min-width: 280px;
  }
`;

export const ProductLi = styled.li`
  color: #fff;
  display:inline-block;
  list-style-type: none;
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 500;
`;

export const ProductPrice = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export const FilterIcon = styled(VscListFilter)`
  display: flex;
  font-size: 25px;
  color: #fff;
`;

export const CartIcon = styled(Link)`
  background-image: url(${ImageCart});
  display: flex;
  place-items:center;
  object-fit: cover;
  background-position: center;
  width: 29px;
  height: 29px;
`;


export const PrevText = styled(Link)`
  color: #fff;
  place-items: center;
  font-size: 16px;
  padding: 6px;
  text-decoration: none;

  @media screen and (max-width: 482px) {
    font-size: 14px;
    padding: 4px;
  }
`;

export const LeftArrow = styled(HiOutlineArrowNarrowLeft)`
  display: inline-block;
  background-position: center;
  place-items: center;
  color: #fff;
`;

export const RightArrow = styled(HiOutlineArrowNarrowRight)`
  display: inline-block;
  background-position: center;
  place-items: center;
  color: #fff;
`;

export const ProductPageUl = styled.ul`
  color: #fff;
  display: flex;
  align-items: center;
  list-style-type: none;
  color: #fff;
  display: flex;
  max-width: 90vw;
  margin-right: auto;
  margin-left: auto;
  min-width: 90vw;
  justify-content: space-between;
  place-items:center;
`;

export const ProductPageLi = styled.li`
  place-items: center;
  color: #fff;
  display: flex;
  list-style-type: none;
`;
