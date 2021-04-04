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
  Text,
  SigninText,
} from "./SignIn.elements";

const SignIn = ({ path }) => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  if (path === 'buyer' || path === 'dealer' || path === 'admin') {
    if (localStorage.isLoggedIn === 'true') {
      if (localStorage.role === 'a') window.location.replace('/admin')
      else if (localStorage.role === 'd') window.location.replace('/dealer-products')
      else if (localStorage.role === 'b') window.location.replace('/home')
    }
  }
  else window.location.replace('/')

  const login = (e) => {
    e.preventDefault()
    Axios({
      method: "POST",
      data: {
        email: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: `http://localhost:4000/${path}/login`,
    }).then(({ data }) => {
      if (data.err) alert(data.err)
      else {
        console.log(data.role);
        if (path === 'dealer') {
          localStorage.role = 'd'
          localStorage.isLoggedIn = 'true'
          window.location.replace('/dealer-products')
        }
        else if (path === 'buyer') {
          localStorage.role = 'b'
          localStorage.isLoggedIn = 'true'
          window.location.replace('/home')
        }
        else if (path === 'admin') {
          localStorage.role = 'a'
          localStorage.isLoggedIn = 'true'
          window.location.replace('/admin')
        }
      }

    });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <Formlabel htmlFor="for">Email</Formlabel>
              <FormInput
                type="email"
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
              <Formlabel htmlFor="for">Password</Formlabel>
              <FormInput
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <FormButton type="submit" onClick={login}>
                Sign In
              </FormButton>
              <SigninText to="/signup">Don't have a account Sign Up</SigninText>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
