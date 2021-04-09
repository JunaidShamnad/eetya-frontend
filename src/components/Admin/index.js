import Axios from "../../axios";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    Axios({
        url: "/admin/new-users",
        method: "GET",
      }).then((res) => {
        setnewUsers(res.data);
        console.log(res.data);
      });
      console.log(newUsers);
  }, []);

  const getNewUsers = () => {
    Axios({
      url: "/admin/new-users",
      method: "get",
    }).then((res) => {
      setnewUsers(res.data);
    });
  };

  const reject=(id)=>{
      Axios({
          url:'/admin/reject',
          data:{id:id},
          method:'post'
      }).then((res)=>{
          if(res.data.status){
            getNewUsers()
          }
      })
  }

  const accept=(id)=>{
    Axios({
        url:'/admin/accept',
        data:{id:id},
        method:'post'
    }).then((res)=>{
        if(res.data.status){
          getNewUsers()
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
                  <TableTr>
                    <TableTd>{newUser.username}</TableTd>
                    <TableTd>{newUser.email}</TableTd>
                    <TableTd>{newUser.primaryPhone}</TableTd>
                    {newUser.email.role === 1 ?
                    <TableTd>Retailer</TableTd>
                    :
                    <TableTd>Wholesaler</TableTd>

                }
                    <TableTd>
                      <TickIcon onClick={()=>{
                          accept(newUser._id)
                      }} />
                    </TableTd>
                    <TableTd>
                      <CloseIcon onClick={()=>{
                          reject(newUser._id)
                      }} />
                    </TableTd>
                  </TableTr>
                );
              })}
            </TableTag>
          </TableContainer>
        </TableDiv>
        <TableDiv>
          <Boxtitle>All Orders</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>User Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Cart</TableTh>
              </TableTr>
              <TableTr>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
              </TableTr>
            </TableTag>
          </TableContainer>
        </TableDiv>
        <TableDiv>
          <Boxtitle>All Products</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>User Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Cart</TableTh>
              </TableTr>
              <TableTr>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
              </TableTr>
            </TableTag>
          </TableContainer>
        </TableDiv>
        <TableDiv>
          <Boxtitle>All Users</Boxtitle>
          <TableContainer>
            <TableTag>
              <TableTr>
                <TableTh>User Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Cart</TableTh>
                <TableTh></TableTh>
              </TableTr>
              <TableTr>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
                <TableTd>hi</TableTd>
                <TableTd>
                  {" "}
                  <CloseIcon />
                </TableTd>
              </TableTr>
            </TableTag>
          </TableContainer>
        </TableDiv>

        <Button to="/news-letter">Post NewsLetter</Button>
        <Button to="/products">Product Page</Button>
      </MainDiv>
    </>
  );
};

export default Admin;
