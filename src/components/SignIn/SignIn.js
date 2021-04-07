import React, { useState } from "react";
import Axios from '../../axios';
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

const SignIn = ({setIsloggedIn}) => {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = (e) => {
    e.preventDefault()
    Axios({
      method: "POST",
      data: {
        email: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/admin/login",
    }).then((res) => {
      if(res.data.err) alert(res.data.err)
     else {
      setIsloggedIn(true)
      localStorage.user = JSON.stringify(res.data)
      console.log(res);
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
