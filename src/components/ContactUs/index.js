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
} from "../SignUp/SignUp.elements";
import {
  TextTitle,
  TextContent,
  PhoneIcon,
  MailIcon,
  LocationIcon,
  TechnicalSupportIcon,
  TextWrap,
  TextInput,
  Messagelabel
} from "./ContactUs.elements";

const ContactUs = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Contact Us </FormH1>
              <div className="container">
                <div className="left-sec">
                  <TextWrap>
                    <TextTitle>
                      <PhoneIcon /> Office Number
                    </TextTitle>
                    <TextContent>621-254-2147</TextContent>
                  </TextWrap>
                  <TextWrap>
                    <TextTitle>
                      <LocationIcon /> Location
                    </TextTitle>
                    <TextContent>Street Name, FL 54785 </TextContent>
                  </TextWrap>
                  <TextWrap>
                    <TextTitle>
                      <TechnicalSupportIcon /> Technical Support
                    </TextTitle>
                    <TextContent>8590 302905 </TextContent>
                  </TextWrap>
                  <TextTitle>
                    <MailIcon /> Email
                  </TextTitle>
                  <TextContent>info@eetya.com</TextContent>
                </div>

                <div className="right-sec">
                  <Formlabel htmlFor="for"> Name</Formlabel>
                  <FormInput type="text" required />

                  <Formlabel htmlFor="for">Contact Number</Formlabel>
                  <FormInput type="tel" required />

                  <Formlabel htmlFor="for">Email</Formlabel>
                  <FormInput type="email" required />

                  <Messagelabel htmlFor="for">Message</Messagelabel>
                  <TextInput />
                </div>
              </div>
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactUs;
