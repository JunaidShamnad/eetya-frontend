import React, {useState} from "react";
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
import Axios from '../../axios'
import Swal from "sweetalert2";


const HelpCenter = () => {
   const [message, setMessage] = useState('')

   const submit =()=>{
    if(message === '')return
    Axios({
      method:'post',
      url:'/help-center',
      data:{message:message, email: JSON.parse(localStorage.getItem("user")).user.email}
    }).then((res)=>{
      if(res.data.status){
        Swal.fire('Sented!', `The issue has marked Succesfully! we will contact you soon..`, 'success')
        setMessage('')
      }else{
        Swal.fire('Error', `Something went wrong`, 'warning')

      }
    })
  }

  return (
    <>
  
      <Container>
        <FormWrap>
          <FormContent>
            <Form >
              <FormH1>Help Center</FormH1>
              <Formlabel htmlFor="for">How can we help you?</Formlabel>
              <FormInput
                type="text"
                placeholder="Describe your issue"
                required
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
              />
             
              <FormButton onClick={(e)=>{
                e.preventDefault()
                submit()
              }}>
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
