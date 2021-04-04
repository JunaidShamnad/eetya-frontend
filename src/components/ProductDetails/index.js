import React, { useEffect, useState } from "react";
import { ProductShowcase } from "../../data/Products";
import { FadeText } from "../HomeProducts/HomeProducts.elements";
import Axios from 'axios'
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

const ProductDetails = ({ id }) => {
  const [count, setCount] = useState(1);
  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const [product, setData] = useState(null)

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    Axios({
      method: 'GET',
      url: 'http://localhost:4000/item/' + id
    }).then(({ data }) => {
      if (data.err) alert('Something wrong')
      else {
        console.log(data)
        setData(data)
      }
    })
  }, [])

  const addToCart = () => {
    Axios({
      url: 'http://localhost:4000/buyer/add-to-cart',
      data: {
        name: product.title,
        storeId: product.storeId,
        prodId: product._id,
        qnt: count
      },
      method: 'POST',
      withCredentials: true
    }).then(({ data }) => {
      console.log(data);
      if (data.loginErr) alert('Login failed')
      else if (data.err) alert(data.err)
      else {
        alert('added to cart')
        setCount(1)
      }
    })
  }

  if (!product) return <></>

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
                    <MainImageConatiner src={product.image} key={index} />
                  </MainImageDiv>
                  <SubImageDiv>
                    <SubImageConatiner src={product.image} />
                    <SubImageConatiner src={product.image} />
                    <SubImageConatiner src={product.image} />
                  </SubImageDiv>
                </>
              );
            })}
          </LeftDiv>

          <RightDiv>
            {/* <CompanyName>Hinoki Lab</CompanyName> */}
            <ProductName>{product.title} </ProductName>
            <ProductDesc>
              {product.description}.{" "}
            </ProductDesc>
            <ProductPrice>$ {product.price} </ProductPrice>
            <ReviewText>
              See Reviews <ReviewArrowIcon />
            </ReviewText>
            <MainCountTitle>Product Count</MainCountTitle>
            <CountButtonDiv>
              <DecrementButton onClick={handleDecrement}>-</DecrementButton>
              <CountText>{count}</CountText>
              <IncrementButton onClick={handleIncrement}>+</IncrementButton>
              <ResetButton onClick={() => setCount(1)}>Reset</ResetButton>
            </CountButtonDiv>

            <ButtonDiv>
              {/* <BuyButton>Buy Now</BuyButton> */}
              <CartButton onClick={addToCart} >Add to cart</CartButton>
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
