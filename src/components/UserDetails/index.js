import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  Form,
  FormContent,
  FormH1,
  Formlabel,
  FormWrap,
} from "../SignUp/SignUp.elements";
import { DeleteIcon, EditIcon } from "../AddCategory/AddCategory.elements";
import {
  TableTag,
  TableTd,
  TableTh,
  TableTr,
  TableDiv,
  Boxtitle,
} from "../Admin/Admin.elements";
import {
  TableContainer,
  UserDataText,
  CartTitle,
  MainDiv,
  Button,
} from "./UserDetails.elements";
import { useHistory } from "react-router";
import Axios from "../../axios";
import Swal from "sweetalert2";

const UserDetails = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //   if (!userData) {
  //     history.push("/signin");
  //   } else {
  //     let role = userData.user.role;
  //     if (role === 3) {
  //       history.push("/admin");
  //     } else if (role === 1 || role === 2) {
  //       history.push("/home");
  //     }
  //   }
  // }, []);
  useEffect(() => {
    
      Axios.post("/buyer/get-products", {
        id: userData.user._id,
      }).then((res) => setProducts(res.data));

      let getOrderRoute = '/buyer/get-orders'
      if(userData.user.role ===1){
        getOrderRoute = '/buyer/get-orders-buyer'
      }

      Axios.post(getOrderRoute, {
        id: userData.user._id,
      }).then((res) => {
        console.log(res.data);
        setOrders(res.data)})
  }, []);

  let role = userData.user.role;

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const deleteProduct = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: name + " will be deleted. You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios({
          url: "/buyer/remove-product",
          data: { id: id },
          method: "post",
        }).then((res) => {
          if (res.data.status) {
            Axios.post("/buyer/get-products", {
              id: userData.user._id,
            }).then((res) => {
              setProducts(res.data);
              Swal.fire("Deleted!", name + " has been deleted.", "success");
            });
          }
        });
      }
    });
  };

  return (
    <>
      <MainDiv>
        {role === 1 && (
          <TableContainer>
          <CartTitle>Orders</CartTitle>

          <TableDiv>
            <TableTag>
              <TableTr>
                <TableTh>No.</TableTh>
                <TableTh>Order ID</TableTh>
                <TableTh>Product name</TableTh>
                <TableTh>quantity</TableTh>
                <TableTh>Total Price</TableTh>
              </TableTr>
              {orders.map((order, i)=>{
                return (
                  <TableTr>
                <TableTd>{i+1}</TableTd>
                <TableTd># {order._id}</TableTd>
                <TableTd>{order.items[0].name}</TableTd>
                <TableTd>{order.items[0].quantity}</TableTd>
                <TableTd>$ {order.items[0].quantity * order.items[0].price}</TableTd>
              </TableTr>
                )
              })}
              
              {/* <TableTr>
                <TableTh>Total</TableTh>
                <TableTh></TableTh>
                <TableTh></TableTh>
                <TableTh></TableTh>
                <TableTh>$ 50</TableTh>
              </TableTr> */}
            </TableTag>
          </TableDiv>
        </TableContainer>
        )}
        {role === 2 && (
          <TableContainer>
            <CartTitle>Orders</CartTitle>

            <TableDiv>
              <TableTag>
                <TableTr>
                  <TableTh>No.</TableTh>
                  <TableTh>Order ID</TableTh>
                  <TableTh>Buyer Name</TableTh>
                  <TableTh>Buyer Email</TableTh>
                  <TableTh>Buyer Phone</TableTh>
                  <TableTh>Product name</TableTh>
                  <TableTh>Cart Total</TableTh>
                  <TableTh>Commission To Admin</TableTh>
                </TableTr>
                {orders.map((order, i)=>{
                  return (
                    <TableTr>
                  <TableTd>{i+1}</TableTd>
                  <TableTd>{order._id}</TableTd>
                  <TableTd>{order.name}</TableTd>
                  <TableTd>{order.email}</TableTd>
                  <TableTd>{order.phone}</TableTd>
                  <TableTd>{order.items[0].name}</TableTd>
                  <TableTd>$ {order.items[0].price * order.items[0].quantity}</TableTd>
                  <TableTd>$ {((order.items[0].price * order.items[0].quantity)*0.15).toFixed(2)}</TableTd>
                </TableTr>
                  )
                })}
                
                {/* <TableTr>
                  <TableTh>Total</TableTh>
                  <TableTh></TableTh>
                  <TableTh></TableTh>
                  <TableTh></TableTh>
                  <TableTh>$ 50</TableTh>
                </TableTr> */}
              </TableTag>
            </TableDiv>
          </TableContainer>
        )}
        {role === 2 && (
          <TableContainer>
            <CartTitle>Products</CartTitle>
            <Button to="/add-product">Add Product</Button>
            <TableDiv>
              <TableTag>
                <TableTr>
                  <TableTh>Product</TableTh>
                  <TableTh>Name</TableTh>
                  <TableTh>Price</TableTh>
                  <TableTh>Quantity</TableTh>

                  <TableTh></TableTh>
                  <TableTh></TableTh>
                </TableTr>

                {products.map((item, index) => {
                  return (
                    <TableTr>
                      <TableTd>{item.category}</TableTd>
                      <TableTd>{item.title}</TableTd>
                      <TableTd>{item.price}</TableTd>
                      <TableTd>
                        {item.minQuantity}-{item.maxQuantity}
                      </TableTd>

                      <TableTd>
                        <EditIcon
                          onClick={() => {
                            window.location.href = `/product-edit/${item._id}`;
                            toggleHome();
                          }}
                        />
                      </TableTd>
                      <TableTd>
                        <DeleteIcon
                          onClick={() => {
                            deleteProduct(item._id, item.title);
                          }}
                        />
                      </TableTd>
                    </TableTr>
                  );
                })}
              </TableTag>
            </TableDiv>
          </TableContainer>
        )}
        <Container>
          <FormWrap>
            <FormContent>
              <Form action="#">
                <TableDiv>
                  <FormH1>User Details</FormH1>
                  <div className="container">
                    <div className="left-sec">
                      <Formlabel htmlFor="for">User Name </Formlabel>
                      <UserDataText>{userData.user.username}</UserDataText>

                      <Formlabel htmlFor="for">Email</Formlabel>
                      <UserDataText>{userData.user.email}</UserDataText>

                      {/* <Formlabel htmlFor="for">Password</Formlabel>
                  <UserDataText>123456</UserDataText> */}

                      <Formlabel htmlFor="for">Primary Phone</Formlabel>
                      <UserDataText>{userData.user.primaryPhone}</UserDataText>

                      <Formlabel htmlFor="for">Secondary Number</Formlabel>
                      <UserDataText>
                        {userData.user.secondaryNumber}
                      </UserDataText>

                      <Formlabel htmlFor="for">Alternative Email</Formlabel>
                      <UserDataText>
                        {userData.user.alternativeEmail}
                      </UserDataText>
                    </div>

                    <div className="right-sec">
                      <Formlabel htmlFor="for">Company Name</Formlabel>
                      <UserDataText>{userData.user.companyName}</UserDataText>

                      <Formlabel htmlFor="for">Registration Number</Formlabel>
                      <UserDataText>
                        {userData.user.registrationNumber}
                      </UserDataText>

                      <Formlabel htmlFor="for">
                        Type of Store/Business
                      </Formlabel>
                      <UserDataText>
                        {userData.user.typeOfBusiness}
                      </UserDataText>

                      <Formlabel htmlFor="for">Website ( if any)</Formlabel>
                      <UserDataText>{userData.user.website}</UserDataText>

                      <Formlabel htmlFor="for">Billing Address</Formlabel>
                      <UserDataText>
                        {userData.user.billingAddress}
                      </UserDataText>

                      <Formlabel htmlFor="for">Shipping Address</Formlabel>
                      <UserDataText>
                        {userData.user.shippingAddress}
                      </UserDataText>
                    </div>
                  </div>
                  {/* <FormButton type="submit" >
                Sign Up
              </FormButton>

              <SignupText to="/signin">
                Already have a account Sign In
              </SignupText> */}
                </TableDiv>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </MainDiv>
    </>
  );
};

export default UserDetails;
