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


const ChangeAdminEmail = () => {
 

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Change Email</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                type="text"
                placeholder="New Email"
                required
              />
             
              <FormButton type="submit">
                Change
              </FormButton>
              <SigninText to="/admin">Go to Admin page</SigninText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
   
    </>
  );
};

export default ChangeAdminEmail;
