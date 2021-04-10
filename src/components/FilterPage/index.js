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
    FormSelectDiv,
    FormSelect,
    FormSelectOption,
  } from "../AddProducts/AddProducts.elements";
  import {  Formlabel } from "./FilterPage.elements";
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
} from "../ProductsSection/ProductsSection.elements";

const Filter = () => {
  const [ProductData, setProductData] = useState([]);
  const [category,setCategory] = useState([])
  const [wholesaler,setWholsaler]=useState([])
  useEffect(() => {
    // Axious({
    //   method: "POST",
    //   url: "/products",
    // }).then((response) => {
    //   setProductData(response.data);
    // });
    Axious.get('/category').then(res=>setCategory(res.data))
    Axious.get('/wholesaler').then(res=>setWholsaler(res.data))
  }, []);

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
      console.log(response.data);
      scroll.scrollToTop();
    });
    
  }, [PageNo])

  const allProducts = ()=>{
    Axious({
      method: "POST",
      url: "/products",
      data: { page: PageNo },
    }).then((response) => {
      setProductData(response.data);
     
      scroll.scrollToTop();
    });
  }
  const categoryHandler = (e)=>{
    if(e.target.value === "ALL") allProducts()
    else Axious.post('/get-cat-products',{category:e.target.value}).then(res=>setProductData(res.data))
  }

  return (
    <>
      <MainDiv>
        <NavbarContainer>
      

    <FormSelectDiv>
    <Formlabel>Product Category </Formlabel>
    
    <FormSelect required onChange={categoryHandler}>
    <FormSelectOption >
       ALL
      </FormSelectOption>
      {category.map((cat,key)=>{
        return <FormSelectOption >
        {cat.categoryName}
      </FormSelectOption>

      })}
        
      </FormSelect>

      </FormSelectDiv>
        </NavbarContainer>
        {/* <NavbarContainer>
     

    <FormSelectDiv>
    <Formlabel>Wholesaler</Formlabel>
    <FormSelect required>
      {wholesaler.map((saler,index)=>{
        return <FormSelectOption >
        {saler.username}
      </FormSelectOption> 
      })}
        
      </FormSelect>

      </FormSelectDiv>
        </NavbarContainer> */}

        <CardContainer>
          {ProductData.map((item, index) => {
            return (
              <Card
                key={index}
                to={{ pathname: `product-details/${item.id}` }}
              >
                <ImageContainer src={`data:image/${item.images[0].type};base64,${item.images[0].data}`} />
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

export default Filter;
