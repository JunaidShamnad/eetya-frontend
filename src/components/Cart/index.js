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
} from "./Cart.elements";
import Axios from "../../axios";

const Cart = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [totalPrice, settotalPrice] = useState(0)
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
        setCart(res.data.cart.items);
          console.log(res.data);
          let Total;
        const items = res.data.cart.items
        items.map((item, i)=>{
            let price = item.price * item.quantity
            console.log(price);
        })
        // for( i in items){
        //     let price = items[i].price * items[i].quantity
        //     console.log(price);
        // }
      }
      if (res.data.error) {
        setCart(null);
      }
    });
  }, []);
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
                  <TableTh>Image</TableTh>
                  <TableTh></TableTh>
                </TableTr>
                {cart.map((item, i) => {
                  return (
                    <TableTr>
                      <TableTd>{item.name}</TableTd>
                      <TableTd>$ {item.price}</TableTd>
                      <TableTd>{item.quantity}</TableTd>
                      <TableTd>
                        <ImageBox src="" alt="Product-name" />
                      </TableTd>
                      <TableTd>
                        <DeleteIcon />
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
              <CartTotalText> $45 </CartTotalText>

              <FormButton>Checkout</FormButton>
            </RightDiv>
          </CartTotalContainer>
        </TableDiv>
      </MainDiv>
    </>
  );
};

export default Cart;
