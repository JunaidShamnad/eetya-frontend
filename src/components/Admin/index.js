import Axios from "../../axios";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'

import { Form, FormInput, Formlabel } from '../SignUp/SignUp.elements'

import {
  Button,
  MainDiv,
  TableContainer,
  TableTag,
  TableTd,
  TableTh,
  TableTr,
  AdminTitle,
  TableDiv,
  Boxtitle,
  CloseIcon,
  TickIcon,
} from "./Admin.elements";

const Admin = () => {
  const [newUsers, setnewUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const [newEmail,setNewEmail] = useState('admin@')

  useEffect(() => {
    Axios({
      url: "/admin/new-users",
      method: "GET",
    }).then((res) => {
      setnewUsers(res.data);
    });

    Axios({
      url: "/admin/orders",
      method: "get",
    }).then((res) => {
      setOrders(res.data);
    });

    Axios({
      url: "/admin/products",
      method: "get",
    }).then((res) => {
      setProducts(res.data);
    });

    Axios({
      url: "/admin/users",
      method: "get",
    }).then((res) => {
      setAllUsers(res.data);
    });

    Axios({
      url: '/admin/email',
      method: 'GET',
      withCredentials: true,
    }).then((res) => {
      console.log(res)
      setNewEmail(res.data)
    })


  }, []);

  

  const getNewUsers = () => {
    Axios({
      url: "/admin/new-users",
      method: "get",
    }).then((res) => {
      setnewUsers(res.data);
    });
  };

  const reject = (id) => {
    Axios({
      url: "/admin/reject",
      data: { id: id },
      method: "post",
    }).then((res) => {
      if (res.data.status) {
        getNewUsers();
      }
    });
  };

  const accept = (id) => {
    Axios({
      url: "/admin/accept",
      data: { id: id },
      method: "post",
    }).then((res) => {
      if (res.data.status) {
        getNewUsers();
      }
    });
  };

  const deleteUser = (id, name)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: name+" will be deleted. You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios({
          url: "/admin/remove-user",
          data: { id: id },
          method: "post",
        }).then((res) => {
          if(res.data.status){
            Axios({
              url: "/admin/users",
              method: "get",
            }).then((res) => {
              setAllUsers(res.data);
              Swal.fire(
                'Deleted!',
                name+' has been deleted.',
                'success'
              )
            });
          }
        });
        
      }
    })
    
  }

  

  const emailChangeHandler = async() => {
    console.log(newEmail)
    Axios({
      url: '/admin/email',
      data: { newEmail: newEmail },
      method: 'post',
      withCredentials:true
    }).then((res) => {
      if (res.data.status) {
        console.log('Email Updated')
        
      } else {
        console.log('Email not updated');
      }
    })
  }
  return (
    <>
      <MainDiv>
        <AdminTitle>Admin Page</AdminTitle>

        <TableDiv>
          <Boxtitle>New Users</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>User Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Mobile Number</TableTh>
                <TableTh>Role</TableTh>
                <TableTh></TableTh>
                <TableTh></TableTh>
              </TableTr>
              {newUsers.map((newUser, index) => {
                return (
                  <TableTr key={newUser.email}>
                    <TableTd>{newUser.username}</TableTd>
                    <TableTd>{newUser.email}</TableTd>
                    <TableTd>{newUser.primaryPhone}</TableTd>
                    {newUser.role === 1 ? (
                      <TableTd>Retailer</TableTd>
                    ) : (
                      <TableTd>Wholesaler</TableTd>
                    )}
                    <TableTd>
                      <TickIcon
                        onClick={() => {
                          accept(newUser._id)
                        }}
                      />
                    </TableTd>
                    <TableTd>
                      <CloseIcon
                        onClick={() => {
                          reject(newUser._id)
                        }}
                      />
                    </TableTd>
                  </TableTr>
                )
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>

        <TableDiv>
          <Boxtitle>All Orders</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>No.</TableTh>
                <TableTh>Dealer Name</TableTh>
                <TableTh>Dealer Phone</TableTh>
                <TableTh>Retailer Name</TableTh>
                <TableTh>Product Name</TableTh>
                <TableTh>Total Price</TableTh>
                <TableTh>Commission (15%)</TableTh>
              </TableTr>
              {orders.map((order, i) => {
                return (
                  <TableTr key={i}>
                    <TableTh>{i + 1}</TableTh>
                    <TableTd>{order.dealerName}</TableTd>
                    <TableTd>{order.dealerPhone}</TableTd>
                    <TableTd>{order.retailerName}</TableTd>
                    <TableTd>{order.items[0].name}</TableTd>
                    <TableTd>
                      ${order.items[0].price * order.items[0].quantity}
                    </TableTd>
                    <TableTd>
                      ${' '}
                      {(
                        order.items[0].price *
                        order.items[0].quantity *
                        0.15
                      ).toFixed(2)}
                    </TableTd>
                  </TableTr>
                )
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>
        <TableDiv>
          <Boxtitle>All Products</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>No.</TableTh>
                <TableTh>product Name</TableTh>
                <TableTh>Min. Quantity</TableTh>
                <TableTh>Max. Quantity</TableTh>
                <TableTh>Price</TableTh>
              </TableTr>
              {products.map((product, i) => {
                return (
                  <TableTr key={i}>
                    <TableTd>{i + 1}</TableTd>
                    <TableTd>{product.title}</TableTd>
                    <TableTd>{product.minQuantity}</TableTd>
                    <TableTd>{product.maxQuantity}</TableTd>
                    <TableTd>$ {product.price}</TableTd>
                  </TableTr>
                )
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>
        <TableDiv>
          <Boxtitle>All Users</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>No.</TableTh>
                <TableTh>User Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Role</TableTh>
                <TableTh></TableTh>
              </TableTr>
              {allUsers.map((user, i) => {
                return (
                  <TableTr key={i}>
                    <TableTd>{i + 1}</TableTd>
                    <TableTd>{user.username}</TableTd>
                    <TableTd>{user.email}</TableTd>
                    {user.role === 1 ? (
                      <TableTd>Buyer</TableTd>
                    ) : (
                      <TableTd>Dealer</TableTd>
                    )}
                    <TableTd>
                      {' '}
                      <CloseIcon
                        onClick={() => {
                          deleteUser(user._id, user.username)
                        }}
                      />
                    </TableTd>
                  </TableTr>
                )
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>

        {/* change email */}
        <TableDiv>
          <Boxtitle>Change Email</Boxtitle>
          <Form>
            <FormInput
              placeholder={newEmail}
              required
              type='text'
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </Form>
          <Button onClick={emailChangeHandler}>Change</Button>
        </TableDiv>

        <Button to='/news-letter'>Post NewsLetter</Button>
        <Button to='/products'>Product Page</Button>
      </MainDiv>
    </>
  )
};

export default Admin;
