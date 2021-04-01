import React, { useState } from "react";
import { ProductShowcase } from "../../data/Products";
import { FadeText } from "../HomeProducts/HomeProducts.elements";
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

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <MainDiv>
        <FadeText>Cart</FadeText>
        <Row>
          <LeftDiv>
            {ProductShowcase.map((item, index) => {
              return (
                <>
                  <MainImageDiv>
                    <MainImageConatiner src={item.image} key={index} />
                  </MainImageDiv>
                  <SubImageDiv>
                    <SubImageConatiner src={item.image} />
                    <SubImageConatiner src={item.image} />
                    <SubImageConatiner src={item.image} />
                  </SubImageDiv>
                </>
              );
            })}
          </LeftDiv>

          <RightDiv>
            <CompanyName>Hinoki Lab</CompanyName>
            <ProductName>Aroma Mist </ProductName>
            <ProductDesc>
              This natural and refreshing spray will soothes your mood.{" "}
            </ProductDesc>
            <ProductPrice>$ 50.15</ProductPrice>
            <ReviewText>
              See Reviews <ReviewArrowIcon />
            </ReviewText>
            <MainCountTitle>Product Count</MainCountTitle>
              <CountButtonDiv>
            <DecrementButton onClick={handleDecrement}>-</DecrementButton>
           <CountText>{count}</CountText>
          <IncrementButton onClick={handleIncrement}>+</IncrementButton>
          <ResetButton onClick={() => setCount(0)}>Reset</ResetButton>
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
