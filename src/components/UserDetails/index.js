import React, { useEffect, useState } from "react";
import Axios from 'axios'

import {
  Container,
  Form,
  FormContent,
  FormH1,
  Formlabel,
  FormWrap,
} from "../SignUp/SignUp.elements";
import { UserDataText, MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr, CartTitle } from "./UserDetails.elements";

const UserDetails = () => {

  const [cart, setCart] = useState(null)
  const [items, setItems] = useState(null)
  const [userData, setUserData] = useState(null)
  const [order, setOrder] = useState(null)
  const [grandBill, setGrandBill] = useState(0)
  const [store, setStore] = useState(null)
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(() => {
    Axios({
      url: 'http://localhost:4000/buyer/',
      method: 'GET',
      withCredentials: true
    }).then(res => {
      if (res.data.loginErr) alert('Login failed')
      else if (res.data.verified === false) alert('email not verified , if you are already verified please logout and log in again')
      else if (res.data.approved === false) alert('Account not approved yet')
      else {
        console.log(res.data);
        setCart(res.data[1])
        setItems(res.data[0])
        setUserData(res.data[4])
        setOrder(res.data[2])
        setStore(res.data[3])
      }
    })
  }, [])

  const getStore = (id) => {
    const stor = store.find(s => s._id === id)
    return `${stor?.name}, ${stor?.email}`
  }
  const getOrderTotal = (items) => {
    let total = 0
    items.forEach(i => total += i.price * i.qnt)
    setGrandTotal(v => v + total)
    return total
  }
  let displayedStore = []

  const getAllProductFromStore = (id) => {
    // let result = [{ name: 'he', quantity: 10, price: 34 }, { name: 'hello', quantity: 30, price: 98 }]

    let result = []
    cart.items.forEach((it, i) => {
      if (it.storeId === id) {
        const prod = items.find(p => p._id === it.productId)
        prod.quantity = it.quantity
        result.push(prod)
      }
    })
    displayedStore.push(id)
    return result
  }

  useEffect(() => {
    if (items && cart) setGrandBill(getGrandBill())
    if (order) {
      let total = 0
      order.forEach(o => total += o.bill)
      setGrandTotal(total)
    }
  }, [items, cart, order])

  const getStoreTotal = (id) => {
    let storeTotal = 0
    // let cartProductQnt = []
    cart.items.forEach(it => {
      if (it.storeId === id) {
        const reqProd = items.find(p => p._id === it.productId)
        storeTotal += reqProd.price * it.quantity
      }
    })
    return storeTotal
  }

  const getGrandBill = () => {
    let total = 0
    cart.items.forEach(item => {
      const foundItem = items.find(it => it._id === item.productId)
      if (foundItem) total += foundItem.price * item.quantity
    })
    return total
  }
  const checkout = (storeId) => {
    Axios({
      url: 'http://localhost:4000/buyer/place-order/' + storeId,
      method: 'GET',
      withCredentials: true
    }).then(res => {
      if (res.data.loginErr) alert('Login failed')
      else if (res.data.err) alert(res.data.err)
      else {

        const newCart = cart.items.filter(v => v.storeId != res.data.storeId)
        cart.items = newCart
        setCart(cart)

        setOrder([...order, res.data])
        alert('order placed successfully')
      }
    })
  }

  const deleteOneStore = (storeId) => {
    Axios({
      url: 'http://localhost:4000/buyer/delete-store/' + storeId,
      method: 'GET',
      withCredentials: true
    }).then(res => {
      if (res.data.loginErr) alert('Login failed')
      else if (res.data.err) alert(res.data.err)
      else {
        setCart(res.data)
        alert('Deleted successfully')
      }
    })
  }

  return (
    <>
      <MainDiv>
        <Container>
          <FormWrap>
            <FormContent>
              {userData && (
                <Form action="#">
                  <FormH1>User Details</FormH1>
                  <div className="container">
                    <div className="left-sec">
                      <Formlabel htmlFor="for">User Name </Formlabel>
                      <UserDataText>{userData.name}</UserDataText>

                      <Formlabel htmlFor="for">Email </Formlabel>
                      <UserDataText>{userData.email} </UserDataText>

                      <Formlabel htmlFor="for">Password</Formlabel>
                      <UserDataText></UserDataText>

                      <Formlabel htmlFor="for">Primary Phone</Formlabel>
                      <UserDataText>{userData.primaryPhone} </UserDataText>

                      <Formlabel htmlFor="for">Secondary Number</Formlabel>
                      <UserDataText>{userData.secondaryNumber}</UserDataText>


                      <Formlabel htmlFor="for">Alternative Email</Formlabel>
                      <UserDataText>{userData.alternativeEmail} </UserDataText>

                    </div>

                    <div className="right-sec">
                      <Formlabel htmlFor="for">Company Name</Formlabel>
                      <UserDataText>{userData.companyName} </UserDataText>


                      <Formlabel htmlFor="for">Registration Number</Formlabel>
                      <UserDataText>{userData.registrationNumber} </UserDataText>

                      <Formlabel htmlFor="for">Type of Store/Business</Formlabel>
                      <UserDataText>{userData.typeOfBusiness} </UserDataText>


                      <Formlabel htmlFor="for">Website ( if any)</Formlabel>
                      <UserDataText>{userData.website} </UserDataText>


                      <Formlabel htmlFor="for">Billing Address</Formlabel>
                      <UserDataText>{userData.billingAddress} </UserDataText>


                      <Formlabel htmlFor="for">Shipping Address</Formlabel>
                      <UserDataText>{userData.shippingAddress} </UserDataText>

                    </div>
                  </div>
                  {/* <FormButton type="submit" >
                Sign Up
              </FormButton>

              <SignupText to="/signin">
                Already have a account Sign In
              </SignupText> */}
                </Form>

              )}
            </FormContent>
          </FormWrap>


        </Container>

        <TableContainer>
          <CartTitle>Cart</CartTitle>
          <TableTag>
            <TableTr>
              <TableTh>Store</TableTh>
              <TableTh>Products</TableTh>
              <TableTh>Price</TableTh>
              <TableTh>Quantity</TableTh>
              <TableTh>Total</TableTh>
              <TableTh>Actions</TableTh>
            </TableTr>
            {
              cart && store ? cart.items.map((item, i) => {

                const isCartAlreadyDisplayed = displayedStore.find(st => st == item.storeId)
                if (!isCartAlreadyDisplayed) {
                  return (
                    <TableTr key={i}>
                      <TableTh>{getStore(item.storeId)}</TableTh>
                      <TableTh><ul>{getAllProductFromStore(item.storeId).map((pro, i) => (
                        <p key={i}>{pro.title} </p>
                      ))}</ul></TableTh>
                      <TableTh><ul>{getAllProductFromStore(item.storeId).map((pro, i) => (
                        <p key={i}>{pro.price} </p>
                      ))}</ul> </TableTh>
                      <TableTh><ul>{getAllProductFromStore(item.storeId).map((pro, i) => (
                        <p key={i}>{pro.quantity} </p>
                      ))}</ul> </TableTh>
                      <TableTh >$ {getStoreTotal(item.storeId)} </TableTh>
                      <TableTh><button onClick={() => {
                        checkout(item.storeId)
                      }}>Checkout</button>
                        <button onClick={() => {
                          deleteOneStore(item.storeId)
                        }}
                        >delete</button></TableTh>
                    </TableTr>
                  )
                }

              }) : <></>
            }
            <TableTr>
              <TableTh>Total</TableTh>
              <TableTh></TableTh>
              <TableTh></TableTh>
              <TableTh></TableTh>
              <TableTh></TableTh>
              <TableTh>$ {grandBill} </TableTh>
              <TableTh></TableTh>
            </TableTr>
          </TableTag>
        </TableContainer>

        <TableContainer>
          <CartTitle>All Orders</CartTitle>
          <TableTag>
            <TableTr>
              <TableTh>Order_Id</TableTh>
              <TableTh>Date</TableTh>
              <TableTh>Bill</TableTh>

            </TableTr>
            {
              order ? order.map((item, i) => {

                return (
                  <TableTr key={i}>
                    <TableTh>{item._id} </TableTh>
                    <TableTh>{new Date(item.date_added).toLocaleDateString()} </TableTh>
                    <TableTh>$ {item.bill} </TableTh>
                  </TableTr>

                )
              }) : <></>
            }
            <TableTr>
              <TableTh>Total</TableTh>
              <TableTh></TableTh>
              <TableTh>$ {grandTotal} </TableTh>
            </TableTr>
          </TableTag>
        </TableContainer>

      </MainDiv>
    </>
  );
};

export default UserDetails;

///////////////////////////////////////////