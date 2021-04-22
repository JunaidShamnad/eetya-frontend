import React, { useEffect, useState } from "react";
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
import Axios from '../../axios'
import Swal from "sweetalert2";

const NewsLetter = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

 
  useEffect(() => {
    Axios({
      method:'get',
      url:'/admin/newsletter-count'
    }).then((res)=>{
      if(res.data.count){
      setCount(res.data.count)
      }
    })
  }, [])

  const submit =()=>{
    if(message === '')return
    Axios({
      method:'post',
      url:'/admin/sent-newsletter',
      data:{message:message}
    }).then((res)=>{
      if(res.data.status){
        Swal.fire('Sented', `The newsletter has sented Succesfully!`, 'success')
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
              <FormH1>News Letter</FormH1>
              <h3 style={{color:'white'}}>No of emails subscribed : {count}</h3>
              <TextInput value={message} onChange={(e)=>{
                setMessage(e.target.value)
              }} placeholder="New news letter"
                required/>
              <FormButton onClick={(e)=>{
                e.preventDefault()
                submit()
              }} >
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
