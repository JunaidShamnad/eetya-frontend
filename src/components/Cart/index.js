import React, { useEffect, useState } from "react";
import {
  MainDiv,
  TableContainer,
  TableTag,
  TableTd,
  TableTh,
  TableTr,
  AdminTitle,
  TableDiv,
  Boxtitle,
  
} from "../Admin/Admin.elements";

import {
  ImageBox,
  CartTotalContainer,
  CartTotalText,
  PriceTitle,
  FormButton,
  RightDiv,
  DeleteIcon,
  DecrementButton,
  IncrementButton,
  ResetButton,
  CountText,
  CountButtonDiv,
  MainCountTitle,
} from "./Cart.elements";
import Axios from "../../axios";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [totalPrice, settotalPrice] = useState(0);
  let userId;
  if (userData) {
    userId = JSON.parse(localStorage.getItem("user")).user._id;
  }
  const [cart, setCart] = useState([]);

  useEffect(() => {
    Axios({
      method: "POST",
      url: "/buyer/cart",
      data: { id: userId },
    }).then((res) => {
      if (res.data.cart) {
          console.log(res.data.cart.items)
        setCart(res.data.cart.items);
        console.log(res.data);
        let Total = 0;
        res.data.cart.items.map((item, i) => {
          let price = item.price * item.quantity;
          Total = Total + price;
        });
        settotalPrice(Total);
      }
      if (res.data.error) {
        setCart(null);
      }
    });
  }, []);

  const changeQuantity = (value, productId, userId) => {
    Axios({
      url: "/buyer/change-qnt",
      method: "POST",
      data: { value, productId, userId },
    }).then((res) => {
      if (res.data.status) {
        document.getElementById(productId).innerHTML =
          parseInt(document.getElementById(productId).innerHTML) + value;
        let Total = 0;
        const items = res.data.cart.items;
        items.map((item, i) => {
          let price = item.price * item.quantity;
          Total = Total + price;
        });
        settotalPrice(Total);
      }
    });
  };

  const refreshPrice = () => {
    let Total = 0;
    console.log(cart);
    cart.map((item, i) => {
      let price = item.price * item.quantity;
      console.log(price);
      Total = Total + price;
      console.log(Total);
    });
    settotalPrice(Total);
  };

  const deleteItem = (prodId, userId)=>{
    Axios({
        url:'/buyer/removeItem',
        method:'post',
        data:{prodId, userId}
    }).then((res)=>{
        if(!res.data.err){
            console.log(res.data);
            setCart(res.data.cart.items)
        }
    })
  }

  return (
    <>
      <MainDiv>
        <AdminTitle>Cart Page</AdminTitle>

        {cart === null ? (
          <h2>you dont have any items</h2>
        ) : (
          <TableDiv>
            <Boxtitle>All Orders</Boxtitle>
            <TableContainer>
              <TableTag>
                <TableTr>
                  <TableTh>Name</TableTh>
                  <TableTh>Price</TableTh>
                  <TableTh>Quantity</TableTh>
                  <TableTh></TableTh>
                </TableTr>
                {cart.map((item, i) => {
                  return (
                    <TableTr>
                      <TableTd>{item.name}</TableTd>
                      <TableTd>$ {item.price}</TableTd>

                      <TableTd>
                        {" "}
                        <CountButtonDiv>
                          <DecrementButton
                            key={i}
                            onClick={(e) => {
                              changeQuantity(
                                -1,
                                item.productId,
                                item.userId
                              );
                            }}
                          >
                            -
                          </DecrementButton>
                          <CountText id={`${item.productId}`}>
                            {item.quantity}
                          </CountText>
                          <IncrementButton
                            key={i}
                            onClick={() => {
                              changeQuantity(
                                +1,
                                item.productId,
                                item.userId
                            
                              );
                            }}
                          >
                            +
                          </IncrementButton>
                        </CountButtonDiv>
                      </TableTd>
                      
                      <TableTd>
                        <DeleteIcon onClick={()=>{
                            deleteItem(item.productId, item.userId)
                        }} />
                      </TableTd>
                    </TableTr>
                  );
                })}
              </TableTag>
            </TableContainer>
          </TableDiv>
        )}
        <TableDiv>
          <CartTotalContainer>
            <PriceTitle>Total</PriceTitle>
            <RightDiv>
              <CartTotalText> $ {totalPrice} </CartTotalText>

              <FormButton onClick={refreshPrice}>Checkout</FormButton>
            </RightDiv>
          </CartTotalContainer>
        </TableDiv>
      </MainDiv>
    </>
  );
};

export default Cart;
