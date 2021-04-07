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
import {TextInput} from './NewsLetter.elements'

const NewsLetter = () => {
 

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>News Letter</FormH1>
              <TextInput placeholder="New news letter"
                required/>
              <FormButton type="submit">
                Send
              </FormButton>

              <SigninText to="/admin">Go to Admin Page </SigninText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
   
    </>
  );
};

export default NewsLetter;
