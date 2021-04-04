import React, { useEffect, useState } from "react";
import Axios from 'axios'

import {
    Container,
    Form,
    FormContent,
    FormH1,
    Formlabel,
    FormWrap,
} from "../components/SignUp/SignUp.elements";
import { UserDataText, MainDiv, TableContainer, TableTag, TableTd, TableTh, TableTr, CartTitle } from "../components/UserDetails/UserDetails.elements";

const UserDetails = () => {

    const [items, setItems] = useState(null)
    const [userData, setUserData] = useState(null)
    const [order, setOrder] = useState(null)
    const [grandTotal, setGrandTotal] = useState(0)

    useEffect(() => {
        Axios({
            url: 'http://localhost:4000/dealer/',
            method: 'GET',
            withCredentials: true
        }).then(res => {
            console.log(res.data);
            if (res.data.loginErr) alert('Login failed')
            else if (res.data.verified === false) alert('email not verified , if you are already verified please logout and log in again')
            else if (res.data.approved === false) alert('Account not approved yet')
            else {
                setItems(res.data[0])
                setUserData(res.data[2])
                setOrder(res.data[1])
            }
        })
    }, [])


    useEffect(() => {
        let total = 0
        if (order) {
            order.forEach(order => total += order.bill)
            setGrandTotal(total)
        }
    }, [order])






    return (
        <>
            <MainDiv>
                <Container>
                    <FormWrap>
                        <FormContent>
                            {userData && (
                                <Form action="#">
                                    <FormH1>Seller Details</FormH1>
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