import React, { useState } from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  Formlabel,
  FormWrap,
  SigninText,
} from "../../components/SignIn/SignIn.elements";
import OtpInput from "react-otp-input";
import Axios from "../../axios";
import { Form } from "./ForgotPassword.elements";
import Swal from "sweetalert2"



const ForgotPassword = () => {
  const [newpassInput, setNewPassInput] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [emailErr, setEmailErr] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState('');
  const [otpErr, setOtpErr] = useState(false);
  const [submitBtn, setSubmitBtn] = useState('change');
  const [functionTrigger, setFunctionTrigger] = useState(1);
  const [passwordErr, setPasswordErr] = useState('');

  

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendEmail = () => {
    if (email === "") {
      setEmailErr("required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailErr("Enter an valid Email address");
      return;
    }

    Axios({
      url: 'buyer/change-pass-create',
      data:{email:email},
      method: 'POST'
    }).then((res)=>{
      if(!res.data.status){
        setEmailErr("email ID not found")
        return
      }
    setSubmitBtn('submit')
    setEmailErr("");
    setOtpInput(true);
    setFunctionTrigger(2)
    })



  };

  const submitOtp = () => {
    if(otp == ''){
       setOtpErr('Enter OTP');
       return
    }else{
      setOtpErr(false);
      if(otp.length < 5){
        return setOtpErr('invalid !')
      }
      Axios({
        url:'buyer/change-pass-verify',
        data:{email:email, otp:otp},
        method:'POST'
      }).then((res)=>{
        if(res.data.status){
          setNewPassInput(true)
          setOtpInput(false)
          setFunctionTrigger(3)
        }else{
          setOtpErr('Invalid OTP!')
        }
      })
    }


  };

  const submitNewPass = ()=>{
    if(newPassword ===''){
      setPasswordErr('Password is required')
      return
    }else{
      setPasswordErr('')
    }

    Axios({
      url:'buyer/change-pass-update',
      data:{email:email, password:newPassword},
      method:'POST'
    }).then((res)=>{
      if(res.data.status){
        Swal.fire('Password updated succesfully', 'You can now login with your new passsword', 'success').then(()=>{window.location.href='/signin'})
      }else{
        Swal.fire('Failed', 'Something went wrong try again later ..', 'warning')
      }
    })
  }

  const handleChange = (otp) => setOtp(otp);

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Change Password</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                disabled={otpInput}
                type="text"
                placeholder="Enter Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailErr != "" ? (
                <p style={{ color: "red", textalign: "center" }}>{emailErr}</p>
              ) : null}
              <div style={otpInput ? {display: "block"}: {display: "none"}}>
              <Formlabel style={{marginTop:'15px'}} htmlFor="for">Enter OTP sended on your email.</Formlabel>

              <OtpInput 
                isInputNum={true}
                inputStyle="inputStyle"
                value={otp}
                hasErrored={otpErr}
                onChange={handleChange}
                numInputs={6}
                isDisabled={newpassInput}
                separator={<span style={{ color: "white" }}>-</span>}
              />
              {otpErr !='' ? (
                <p style={{ color: "red", textalign: "center" }}>{otpErr}</p>
              ) : null}
              </div>
              
              <FormInput
                style={newpassInput ? { display: "flex", marginTop:'20px' } : { display: "none" }}
                type="text"
                placeholder="New Password"
                onChange={(e) =>{
                  setNewPassword(e.target.value)
                }}
              />
              {passwordErr !='' ? (
                <p style={{ color: "red", textalign: "center" }}>{passwordErr}</p>
              ) : null}

              <FormButton
                onClick={(e) => {
                  e.preventDefault();
                  if (functionTrigger ===1) {
                    sendEmail();
                  } else if (functionTrigger === 2) {
                    submitOtp();
                  }else if(functionTrigger===3){
                    submitNewPass();
                  }
                }}
              >
                {submitBtn}
              </FormButton>
              <SigninText to="/signin">
                Already have a account SignIn
              </SigninText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ForgotPassword;
