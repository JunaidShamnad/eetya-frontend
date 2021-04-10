import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Axious from "../../axios";
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

const ProductsSection = ({setIsloggedIn}) => {
  
  const [ProductData, setProductData] = useState([]);
  const [PageNo, setPageNo] = React.useState(1);
  
  

  useEffect(() => {
    Axious({
      method: "POST",
      url: "/products",
      data: { page: PageNo },
    }).then((response) => {
      setProductData(response.data);
      console.log(response.data);
      console.log("koii")
      scroll.scrollToTop();
    });
    
  }, [PageNo])
  

  return (
    <>
      <MainDiv>
        <NavbarContainer>
          <FadeText>Products</FadeText>
          <NavMenu>
            <NavItem>
              <NavLink to="/filter">
               <FilterIcon />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <CardContainer>
          {ProductData.map((item, index) => {
            return (
              <Card
                key={index}
                to={{ pathname: `/product-details/${item.id}` }}
              >
                <ImageContainer src={`data:image/${item.images[0].type};base64,${item.images[0].data}`}/>
               
                
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
        <ProductPageUl>
          <ProductPageLi
            onClick={() => {
              setPageNo(PageNo - 1)
              // updateProductData(-1);
            }}
          >
            
            <LeftArrow /> <PrevText>Previous Page</PrevText>
          </ProductPageLi>
          <ProductPageLi
            onClick={() => {
              setPageNo(PageNo + 1)
              // updateProductData(+1);
            }}
          >
            
            <PrevText>Next Page</PrevText> <RightArrow />
          </ProductPageLi>
        </ProductPageUl>
      </MainDiv>
    </>
  );
};

export default ProductsSection;
