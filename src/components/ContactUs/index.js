import React from "react";
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

  const handleForm=(e)=>{ 
    e.preventDefault()
    console.log('form handler');
    let formData = {
      name: Name,
      phone: Phone,
      email: Email
    }
    if(Message){
      formData.message = Message
    }
    Axios.post('/contact', formData)
    .then((res)=>{
      console.log(res.data);
    })
    }

  

  const [Name, SetName ] = React.useState()
  const [Phone, SetPhone] = React.useState()
  const [Email, SetEmail] = React.useState()
  const [Message, SetMessage] = React.useState()

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleForm}>
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
                  <FormInput onChange={ (e) => SetName(e.target.value)} type="text" required />

                  <Formlabel htmlFor="for">Contact Number</Formlabel>
                  <FormInput onChange={ (e) => SetPhone(e.target.value)} type="tel" required />

                  <Formlabel htmlFor="for">Email</Formlabel>
                  <FormInput onChange={ (e) => SetEmail(e.target.value)} type="email" required />

                  <Messagelabel htmlFor="for">Message</Messagelabel>
                  <TextInput onChange={ (e) => SetMessage(e.target.value)} />
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
