import React, { useState } from "react";
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
import OtpInput from "react-otp-input";
import Axios from "../../axios";


const ForgotPassword = () => {
  const [newpassInput, setNewPassInput] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [emailErr, setEmailErr] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState('');
  const [otpErr, setOtpErr] = useState(false);
  const [submitBtn, setSubmitBtn] = useState('change');

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
        setEmailErr("Something went wrong try agin later.")
        return
      }
    setSubmitBtn('submit')
    setEmailErr("");
    setOtpInput(true);
    })



  };

  const submitOtp = () => {
    if(otp == ''){
      setOtpErr('Enter OTP');
    }else{
      setOtpErr(false);

    }
  };

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
                separator={<span style={{ color: "white" }}>-</span>}
              />
              {otpErr !='' ? (
                <p style={{ color: "red", textalign: "center" }}>{otpErr}</p>
              ) : null}
              </div>
              
              <FormInput
                style={newpassInput ? { display: "flex" } : { display: "none" }}
                type="text"
                placeholder="New Password"
              />

              <FormButton
                onClick={(e) => {
                  e.preventDefault();
                  if (!otpInput) {
                    sendEmail();
                  } else if (otpInput) {
                    submitOtp();
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
