import React, { useState } from "react";
import Axios from "axios";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  Formlabel,
  FormWrap,
  SignupText,
} from "./SignUp.elements";

const SignUp = ({ root }) => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPrimaryPhone, setRegisterPrimaryPhone] = useState("");
  const [registerSecondaryNumber, setRegisterSecondaryNumber] = useState("");
  const [registerAlternativeEmail, setRegisterAlternativeEmail] = useState("");
  const [registerCompanyName, setRegisterCompanyName] = useState("");
  const [registerRegistrationNumber, setRegisterRegistrationNumber] = useState("");
  const [registerTypeOfBusiness, setRegisterTypeOfBusiness] = useState("");
  const [registerWebsite, setRegisterWebsite] = useState("");
  const [registerBillingAddress, setRegisterBillingAddress] = useState("");
  const [registerShippingAddress, setRegisterShippingAddress] = useState("");

  const register = (e) => {
    e.preventDefault()
    Axios({
      method: "POST",
      data: {
        name: registerUsername,
        email: registerEmail,
        password: registerPassword,
        primaryPhone: registerPrimaryPhone,
        secondaryNumber: registerSecondaryNumber,
        alternativeEmail: registerAlternativeEmail,
        companyName: registerCompanyName,
        registrationNumber: registerRegistrationNumber,
        typeOfBusiness: registerTypeOfBusiness,
        website: registerWebsite,
        billingAddress: registerBillingAddress,
        shippingAddress: registerShippingAddress,
      },
      withCredentials: true,
      url: root ? "http://localhost:4000/dealer/signUp" : "http://localhost:4000/buyer/signUp",
    }).then((res) => {
      console.log(res);
      if (res.data.err) alert(res.data.err)
      else {
        alert(res.data.msg)
        localStorage.isLoggedIn = 'true'
        localStorage.role = res.data.role
        if (localStorage.role === 'b') window.location.replace('/products')
        else window.location.replace('/dealer-products')
      }
    });
  };
  if (localStorage.isLoggedIn === 'true') {
    if (localStorage.role === 'b') window.location.replace('/products')
    else window.location.replace('/dealer-products')
  }
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>{root && 'Seller'} Sign Up</FormH1>
              <div className="container">
                <div className="left-sec">
                  <Formlabel htmlFor="for">User Name</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Email</Formlabel>
                  <FormInput
                    type="email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Password</Formlabel>
                  <FormInput
                    type="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Primary Phone</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterPrimaryPhone(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Secondary Number</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterSecondaryNumber(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Alternative Email</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) =>
                      setRegisterAlternativeEmail(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="right-sec">
                  <Formlabel htmlFor="for">Company Name</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterCompanyName(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Registration Number</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) =>
                      setRegisterRegistrationNumber(e.target.value)
                    }
                    required
                  />

                  <Formlabel htmlFor="for">Type of Store/Business</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterTypeOfBusiness(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Website ( if any)</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterWebsite(e.target.value)}
                  />

                  <Formlabel htmlFor="for">Billing Address</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterBillingAddress(e.target.value)}
                    required
                  />

                  <Formlabel htmlFor="for">Shipping Address</Formlabel>
                  <FormInput
                    type="text"
                    onChange={(e) => setRegisterShippingAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <FormButton type="submit" onClick={register}>
                Sign Up
              </FormButton>

              <SignupText to="/signin">
                Already have a account Sign In
              </SignupText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
