import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  NavbarContainer,
  NavItem,
  NavMenu,
  NavLink,
} from "../Navbar/Navbar.elements";

import {
  Card,
  CardContainer,
  CartIcon,
  FadeText,
  FilterIcon,
  MainDiv,
  ImageContainer,
  ProductTitle,
  ProductPrice,
  ProductUl,
  ProductLi,
  LeftArrow,
  PrevText,
  ProductPageLi,
  ProductPageUl,
  RightArrow,
} from "./ProductsSection.elements";

import Products from "../../data/Products"
const ProductsSection = () => {
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

  return (
    <>
      <MainDiv>
        <NavbarContainer>
          <FadeText>Products</FadeText>
          <NavMenu>
            <NavItem>
              <NavLink to="/">
                <img
                  class="search_icon"
                  src={require("../../images/Icon feather-search.svg").default}
                  alt="Logo"
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                <FilterIcon />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <CardContainer>
          {ProductData.map((item, index) => {
            return (
              <Card key={index} to={{pathname: `product-details/${item._id}`}}>
                <ImageContainer src={item.image}  />
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
        <ProductPageUl>
          <ProductPageLi>
            <LeftArrow /> <PrevText>Previous Page</PrevText>{" "}
          </ProductPageLi>
          <ProductPageLi>
            {" "}
            <PrevText>Next Page</PrevText> <RightArrow />
          </ProductPageLi>
        </ProductPageUl>
      </MainDiv>
    </>
  );
};

export default ProductsSection;
