import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  Formlabel,
  FormWrap,
  SigninText,
} from "../../components/SignIn/SignIn.elements";


const ForgotPassword = () => {
 

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>New Password</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                type="text"
                placeholder="New Password"
                required
              />
             
              <FormButton type="submit">
                Change
              </FormButton>
              <SigninText to="/signin">Already have a account SignIn</SigninText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
   
    </>
  );
};

export default ForgotPassword;
