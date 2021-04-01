import React, { useState, useEffect } from "react";
// import { Products } from "../../data/Products";
import Axios from "axios";
import {
  Logo,
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
  Maintitle,
  ImageContainer,
  ProductTitle,
  ProductPrice,
  ProductUl,
  ProductLi,
} from "./HomeProducts.elements";

const HomeProducts = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/items",
    }).then((res) => {
      setProductData(res.data);
      console.log(res.data);
    });
  }, []);
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
              <NavLink to="/">
                <img
                  className="search_icon"
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
          {productData.map((item, index) => {
            return (
              <Card>
                <ImageContainer key={index} />
                <ProductUl>
                  <ProductLi>
                    <ProductTitle>{item.title}</ProductTitle>
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
