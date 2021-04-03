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

const SignIn = () => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = (e) => {
    e.preventDefault()
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      localStorage.user = JSON.stringify(res.data)
    });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <Formlabel htmlFor="for">User Name</Formlabel>
              <FormInput
                type="text"
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
