import React, { useEffect, useState } from "react";
import { FadeText } from "../HomeProducts/HomeProducts.elements";
import {
  DetailBox,
  DetailInput,
  Detaillabel,
} from "../AddProducts/AddProducts.elements";
import { useParams } from "react-router";
import Axios from "../../axios";
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
  MainCountTitle,
} from "./ProductDetails.elements";
import Swal from "sweetalert2";

const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState();
  const [user, setUser] = useState("");
  const [addedToCart, setAddedToCart] = useState();

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (product.maxQuantity <= count) setCount(product.maxQuantity);
    else if (count < product.minQuantity) setCount(product.minQuantity);
    else setCount((prevCount) => prevCount + 1);
  };
  let { id } = useParams();

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (product.minQuantity < count) setCount((prevCount) => prevCount - 1);
    else setCount(product.minQuantity);
  };
  useEffect(() => {
    Axios.post(`/Product`, { id: id }).then((response) => {
      console.log(response);

      setProduct(response.data.Product);
      setUser(response.data.User);
      setCount(response.data.Product.minQuantity);
    });

    let userId = JSON.parse(localStorage.getItem("user")).user._id;
    console.log("id:" + userId + " productId: " + id);
    Axios({
      method: "post",
      url: "/buyer/confirm-product",
      data: {
        id: userId,
        productId: id,
      },
    }).then((res) => {
      if (res.data.status) {
        setAddedToCart(true);
      }
    });
  }, []);

  const addToCart = () => {
    let quantity = count < product.minQuantity ? product.minQuantity : count;
    let userId = JSON.parse(localStorage.getItem("user")).user._id;
    Axios({
      url: "/buyer/add-to-cart",
      method: "post",
      data: {
        prodId: product.id,
        userId: userId,
        name: product.title,
        qnt: quantity,
        price: product.price,
        storeId: user.id,
      },
    }).then((res) => {
      if (!res.data.err) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${product.title} has added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        setAddedToCart(true);
      }
    });
  };

  const buyNow = () => {
    let userId = JSON.parse(localStorage.getItem("user")).user._id;
    Swal.fire({
      title: "Are you sure?",
      text: `${product.title} will order Now!`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order!",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        Axios({
          method: "POST",
          url: "/order/buy-now",
          data: {
            productId: id,
            storeId: user.id,
            userId: userId,
            price: product.price * count,
            quantity: count,
            name:product.title,
            dealerEmail:user.email,
            userEmail:JSON.parse(localStorage.getItem("user")).user.email
          },
        }).then((res) => {
          if (!res.data.status) {
            Swal.showValidationMessage(`something went wrong`);
          }else{
            Swal.fire(
              'Item Ordered',
              `contact dealer
              name: ${user.name}
              email: ${user.email}
              phone: ${user.number}`,
              'success'
            )
          }
        });
      },
    });
  };

  return (
    <>
      <MainDiv>
        <FadeText>Details</FadeText>
        <Row>
          <LeftDiv>
            <>
              <MainImageDiv>
                {product.images ? (
                  <MainImageConatiner
                    src={`data:image/${product.images[0].type};base64,${product.images[0].data}`}
                  />
                ) : (
                  ""
                )}
              </MainImageDiv>
              <SubImageDiv>
                {product.images
                  ? product.images.map((img, index) => {
                      return (
                        <SubImageConatiner
                          src={`data:image/${img.type};base64,${img.data}`}
                        />
                      );
                    })
                  : ""}
              </SubImageDiv>
            </>
            <DetailBox>
              <Detaillabel>Wholesaler Name</Detaillabel>
              <DetailInput value={user.name} required type="text" />

              <Detaillabel>Wholesaler Email</Detaillabel>
              <DetailInput value={user.email} required type="text" />

              <Detaillabel>Wholesaler Number</Detaillabel>
              <DetailInput value={user.number} required type="text" />
            </DetailBox>
          </LeftDiv>

          <RightDiv>
            <CompanyName>{user.companyname}</CompanyName>
            <ProductName>{product.title} </ProductName>
            <ProductDesc>{product.description + ". "}</ProductDesc>
            <ProductPrice>$ {product.price}</ProductPrice>
            {/* <ReviewText>
              See Reviews <ReviewArrowIcon />
            </ReviewText> */}
            <MainCountTitle>Product Count</MainCountTitle>
            <CountButtonDiv>
              <DecrementButton onClick={handleDecrement}>-</DecrementButton>
              <CountText>{count}</CountText>
              <IncrementButton onClick={handleIncrement}>+</IncrementButton>
              <ResetButton onClick={() => setCount(product.minQuantity)}>
                Reset
              </ResetButton>
            </CountButtonDiv>

            <ButtonDiv>
              <BuyButton onClick={buyNow}>Buy Now</BuyButton>
              {addedToCart ? (
                <CartButton to="/cart">Go to cart</CartButton>
              ) : (
                <CartButton
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to cart
                </CartButton>
              )}
            </ButtonDiv>
            <QuestionDiv>
              <QuestionTextWrapper>
                <QuestionText to="/help-center">
                  Dispatched in 5-7 weeks.
                  <br /> Why the longer lead time?
                </QuestionText>
                <QuestionArrowIcon />
              </QuestionTextWrapper>
              <LongLine />
              <QuestionTextWrapper>
                <QuestionText to="/help-center">Any Questions </QuestionText>{" "}
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
