import React from "react";
import {
  Container,
  Form,
  FormContent,
  FormH1,
  Formlabel,
  FormWrap,
} from "../SignUp/SignUp.elements";
import { UserDataText,MainDiv,TableContainer,TableTag,TableTd,TableTh,TableTr, CartTitle } from "./UserDetails.elements";

const UserDetails = () => {
  return (
    <>
    <MainDiv>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>User Details</FormH1>
              <div className="container">
                <div className="left-sec">
                  <Formlabel htmlFor="for">User Name </Formlabel>
                  <UserDataText>Junaid</UserDataText>

                  <Formlabel htmlFor="for">Email</Formlabel>
                  <UserDataText>info@intelpik.com</UserDataText>

                  <Formlabel htmlFor="for">Password</Formlabel>
                  <UserDataText>123456</UserDataText>

                  <Formlabel htmlFor="for">Primary Phone</Formlabel>
                 <UserDataText>852369741</UserDataText>

                  <Formlabel htmlFor="for">Secondary Number</Formlabel>
                  <UserDataText>741258963</UserDataText>


                  <Formlabel htmlFor="for">Alternative Email</Formlabel>
                  <UserDataText>support@intelpik.com</UserDataText>

                </div>

                <div className="right-sec">
                  <Formlabel htmlFor="for">Company Name</Formlabel>
                  <UserDataText>Intelpik</UserDataText>


                  <Formlabel htmlFor="for">Registration Number</Formlabel>
                  <UserDataText>8521</UserDataText>

                  <Formlabel htmlFor="for">Type of Store/Business</Formlabel>
                  <UserDataText>Non-profit</UserDataText>


                  <Formlabel htmlFor="for">Website ( if any)</Formlabel>
                  <UserDataText>https://intelpik.com </UserDataText>


                  <Formlabel htmlFor="for">Billing Address</Formlabel>
                  <UserDataText>Junaid Manzil Derppakkadu Ayirakuzhy Po Kadakkal</UserDataText>


                  <Formlabel htmlFor="for">Shipping Address</Formlabel>
                  <UserDataText>Kadakkal Chithara Po 691559</UserDataText>

                </div>
              </div>
              {/* <FormButton type="submit" >
                Sign Up
              </FormButton>

              <SignupText to="/signin">
                Already have a account Sign In
              </SignupText> */}
            </Form>
          </FormContent>
        </FormWrap>

        
      </Container>
      
      <TableContainer>
      <CartTitle>Cart</CartTitle>
      <TableTag>
        <TableTr>
            <TableTh>Product</TableTh>
            <TableTh>Name</TableTh>
            <TableTh>Price</TableTh>
            <TableTh>Quantity</TableTh>
            <TableTh>Total</TableTh>
   
        </TableTr>
        <TableTr>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
            <TableTd>hi</TableTd>
     
        </TableTr>
        <TableTr>
            <TableTh>Total</TableTh>
            <TableTh></TableTh>
            <TableTh></TableTh>
            <TableTh></TableTh>
            <TableTh>$ 50</TableTh>
         
   
        </TableTr>
    </TableTag>
        </TableContainer>
        </MainDiv>
    </>
  );
};

export default UserDetails;
