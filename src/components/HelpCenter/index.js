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


const HelpCenter = () => {
 

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Help Center</FormH1>
              <Formlabel htmlFor="for">How can we help you?</Formlabel>
              <FormInput
                type="text"
                placeholder="Describe your issue"
                required
              />
             
              <FormButton type="submit">
                Submit
              </FormButton>
              <SigninText to="/contact-us">Facing any issues , Contact Us </SigninText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
   
    </>
  );
};

export default HelpCenter;
