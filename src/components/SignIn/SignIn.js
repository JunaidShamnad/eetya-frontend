import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
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
  Text,
  SigninText,
  FormSelectDiv,
  FormSelect,
  FormSelectOption,
} from "./SignIn.elements";

const SignIn = ({ setIsloggedIn }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        email: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      if (res.data.err) alert(res.data.err);
      if(res.data.unVerified){
        Swal.fire('Your account is under Admin verification.', 'Wait until Admin approves','warning')
        history.push('/')
      }
      else {
        setIsloggedIn(true);
        localStorage.user = JSON.stringify(res.data);
        let role = res.data.user.role;
        if (role === 3) {
          history.push("/admin");
        } else if (role === 1) {
          history.push("/home");
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
              <Text to="/forgot-password">Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
