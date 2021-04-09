import React, { useState, useEffect } from "react";
import Axios from '../../axios';
import { animateScroll as scroll } from "react-scroll";
import {
  Logo,
  NavbarContainer,
  NavItem,
  NavMenu
} from "../Navbar/Navbar.elements";
import {
  Card,
  NavLink,
  CardContainer,
  CartIcon,
  FadeText,
  FilterIcon,
  MainDiv,
  Maintitle,
  ImageContainer,
  ProductTitle,
  ProductPrice,
  ProductUl,
  ProductLi,
} from "./HomeProducts.elements";
import {
  PrevText,
  RightArrow,
} from "../ProductsSection/ProductsSection.elements";
import Products from "../../data/Products"

const HomeProducts = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    // Axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: "http://localhost:4000/items",
    // }).then((res) => {
    //   setProductData(res.data);
    //   console.log(res.data);
    // });
    setProductData(Products)
    console.log(ProductData);
  }, []);

  
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MainDiv>
        <FadeText>Discover the</FadeText>

        <NavbarContainer>
          <Logo to="/">
            <Maintitle>New arrivals</Maintitle>
          </Logo>

          <NavMenu>
            <NavItem>
              <NavLink to="/products">
              <PrevText to="/products" onClick={toggleHome} >Product Page</PrevText> <RightArrow />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <CardContainer>
          {ProductData.map((item, index) => {
            return (
              <Card>
                <ImageContainer src={item.image} key={index} />
                <ProductUl>
                  <ProductLi>
                    <ProductTitle>{item.heading}</ProductTitle>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductLi>
                  <ProductLi>
                    <CartIcon />
                  </ProductLi>
                </ProductUl>
              </Card>
            );
          })}
        </CardContainer>
      </MainDiv>
    </>
  );
};

export default HomeProducts;
