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

const ProductsSection = () => {

  
  const [ProductData, setProductData] = useState([]);
  //  useEffect(() => {
    
  //   Axious({
  //     method: "POST",
  //     url: "/products",
  //   }).then((response) => {
  //     console.log("pro len",response.products)
  //     console.log("hello")
  //     setProductData(response.products);
  //   });
  
  //   console.log(ProductData);
  // }, []);
  

  const [PageNo, setPageNo] = React.useState(1);
  
  // const updateProductData =async (num) => {
  //   console.log("before: "+PageNo);
    
  //   await setPageNo(PageNo + num);
  //   console.log(PageNo);
  //   Axious({
  //     method: "POST",
  //     url: "/products",
  //     data: { page: PageNo },
  //   }).then((response) => {
  //     setProductData(response.data);
  //     console.log(response.data);
  //     scroll.scrollToTop();
  //   });
  // };

  useEffect(() => {
    Axious({
      method: "POST",
      url: "/products",
      data: { page: PageNo },
    }).then((response) => {
      setProductData(response.data);
      scroll.scrollToTop();
    });
    
  }, [PageNo])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
                <ImageContainer onClick={ ()=>{
                      window.location.href = `/product-details/${item.id}`
                      toggleHome()
                    } }  src={`data:image/${item.images[0].type};base64,${item.images[0].data}`}/>
               
                
                <ProductUl>
                  <ProductLi>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductLi>
                  <ProductLi>
                    <CartIcon onClick={ ()=>{
                      window.location.href = `/product-details/${item.id}`
                      toggleHome()
                    } }  />
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
