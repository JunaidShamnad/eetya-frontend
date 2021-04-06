import React, { useState } from "react";
import Axios from "../../axios";
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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SignUp = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPrimaryPhone, setRegisterPrimaryPhone] = useState("");
  const [registerSecondaryNumber, setRegisterSecondaryNumber] = useState("");
  const [registerAlternativeEmail, setRegisterAlternativeEmail] = useState("");
  const [registerCompanyName, setRegisterCompanyName] = useState("");
  const [registerRegistrationNumber, setRegisterRegistrationNumber] = useState(
    ""
  );
  const [registerTypeOfBusiness, setRegisterTypeOfBusiness] = useState("");
  const [registerWebsite, setRegisterWebsite] = useState("");
  const [registerBillingAddress, setRegisterBillingAddress] = useState("");
  const [registerShippingAddress, setRegisterShippingAddress] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
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
      url: "/register",
    }).then((res) => {
      console.log(res);
    });

    
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up</FormH1>
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
              <Formlabel htmlFor="for">Seller / Buyer</Formlabel>

              {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}

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
