import React, { useEffect, useState } from "react";
import { ProductShowcase } from "../../data/Products";
import { FadeText } from "../HomeProducts/HomeProducts.elements";
import { DetailBox, DetailInput, Detaillabel } from "../AddProducts/AddProducts.elements";
import { useParams } from "react-router";
import Axios from "../../axios"
import {
  CompanyName,
  LeftDiv,
  MainDiv,
  ProductName,
  RightDiv,
  Row,
  ProductDesc,
  ProductPrice,
  BuyButton,
  CartButton,
  ButtonDiv,
  QuestionDiv,
  QuestionText,
  LongLine,
  QuestionArrowIcon,
  ReviewText,
  ReviewArrowIcon,
  QuestionTextWrapper,
  MainImageConatiner,
  SubImageConatiner,
  SubImageDiv,
  MainImageDiv,
  DecrementButton,
  IncrementButton,
  ResetButton,
  CountText,
  CountButtonDiv,
  MainCountTitle
} from "./ProductDetails.elements";

const ProductDetails = (props) => {
  const [count, setCount] = useState(0);
  const [product,setProduct] = useState("")
  const [user,setUser] = useState("")
  
  // Create handleIncrement event handler
  const handleIncrement = () => {
    if(product.maxQuantity<=count) setCount(product.maxQuantity)
    else if(count<product.minQuantity) setCount(product.minQuantity)
    else setCount((prevCount) => prevCount + 1);
  };
  let { id } = useParams();
  
  
  //Create handleDecrement event handler
  const handleDecrement = () => {
   if(product.minQuantity<count) setCount((prevCount) => prevCount - 1);
   else setCount(product.minQuantity) 
  };
  useEffect(()=>{
    Axios.post(`/Product`,{id:id}).then((response)=>{
     setProduct(response.data.Product);
     setUser(response.data.User)
     
    })
  },[])

  return (
    <>
    
      <MainDiv>
        <FadeText>Details</FadeText>
        <Row>
          <LeftDiv>
          <>
                  <MainImageDiv>
                    {product?<MainImageConatiner src={`data:image/${product.images[0].type};base64,${product.images[0].data}`} />:""}
                  </MainImageDiv>
                  <SubImageDiv>
                  {product?product.images.map((img,index) => { 
                    
              return (
               
                  
                    <SubImageConatiner src={`data:image/${img.type};base64,${img.data}`}/>
                 
               
              );
            }):""}
             </SubImageDiv>
             </>
             <DetailBox>

<Detaillabel>Wholesaler Name</Detaillabel>
<DetailInput value ={user.name} required type="text" />

<Detaillabel>Wholesaler Email</Detaillabel>
<DetailInput value ={user.email} required type="text" />

<Detaillabel>Wholesaler Number</Detaillabel>
<DetailInput value ={user.number} required type="text" />

</DetailBox>
          </LeftDiv>

          <RightDiv>
            <CompanyName>{user.companyname}</CompanyName>
            <ProductName>{product.title} </ProductName>
            <ProductDesc>
              { product.description+". "}
            </ProductDesc>
            <ProductPrice>$ {product.price}</ProductPrice>
            <ReviewText>
              See Reviews <ReviewArrowIcon />
            </ReviewText>
            <MainCountTitle>Product Count</MainCountTitle>
              <CountButtonDiv>
            <DecrementButton onClick={handleDecrement}>-</DecrementButton>
           <CountText>{count}</CountText>
           <IncrementButton onClick={handleIncrement}>+</IncrementButton>
          <ResetButton onClick={() => setCount(product.minQuantity)}>Reset</ResetButton>
          </CountButtonDiv>      
          
            <ButtonDiv>
              <BuyButton>Buy Now</BuyButton>
              <CartButton>Add to cart</CartButton>
            </ButtonDiv>
            <QuestionDiv>
              <QuestionTextWrapper>
                <QuestionText>
                  Dispatched in 5-7 weeks.
                  <br /> Why the longer lead time?
                </QuestionText>
                <QuestionArrowIcon />
              </QuestionTextWrapper>
              <LongLine />
              <QuestionTextWrapper>
                <QuestionText>Any Questions </QuestionText>{" "}
                <QuestionArrowIcon />{" "}
              </QuestionTextWrapper>
            </QuestionDiv>
          </RightDiv>
        </Row>
      </MainDiv>
    </>
  );
};

export default ProductDetails;
