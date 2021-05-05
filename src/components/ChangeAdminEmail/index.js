import React, { useState, useEffect } from "react";
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
import { Form } from "./ChangeAdminEmail.elements";
import OtpInput from "react-otp-input";
import Axios from "../../axios";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const ChangeAdminEmail = () => {
  const [otpInput, setOtpInput] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("change");
  const [functionTrigger, setFunctionTrigger] = useState(1);
  const [passwordErr, setPasswordErr] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('')
   
  useEffect(() => {
  if(JSON.parse(localStorage.getItem("user"))){
  setUserEmail(JSON.parse(localStorage.getItem("user")).user.email)
  }else{
    history.push('/signin');
  }
  }, [])

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const submitNewEmail = () => {
    if (email == "") {
      return setEmailErr("Enter new email!");
    }
    if (!validateEmail(email)) {
      return setEmailErr("Enter an valid email1");
    }
    setEmailErr("");

    Axios({
      url: "admin/change-email-create",
      method: "POST",
      data: { email: userEmail },
    }).then((res) => {
      if (res.data.status) {
        setOtpInput(true);
        setFunctionTrigger(2)
      }
    });
  };

  const submitOtp = () => {
    if (otp.length > 6) {
      return setOtpErr("Enter Otp!");
    }
    if (otp === "") {
      return setOtpErr("Otp is requried!");
    }

    Axios({
      method: "post",
      url: "admin/change-email-verify",
      data: {
        otp: otp,
        email: userEmail,
        newEmail: email,
      },
    }).then((res) => {
      if (res.data.status) {
        Swal.fire(
          "Sucessfully changed",
          "You have changed your email to " + email,
          "success"
        ).then(() => {
          dispatch({ type: "LOGOUT" });

          history.push("/signin");
        });
      }else if(res.data.status && res.data.otpErr){
        setOtpErr('Invalid OTP')
      }else{
      Swal.fire('Failed', 'Something went wrong try again later ..', 'warning')
      }

    });
  };
  const handleChange = (otp) => setOtp(otp);

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Change Email</FormH1>
              <Formlabel htmlFor="for"></Formlabel>
              <FormInput
                type="text"
                placeholder="New Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr != "" ? (
                <p style={{ color: "red", textalign: "center" }}>{emailErr}</p>
              ) : null}
              <div
                style={otpInput ? { display: "block" } : { display: "none" }}
              >
                <Formlabel style={{ marginTop: "15px" }} htmlFor="for">
                  Enter OTP sended on your email.
                </Formlabel>

                <OtpInput
                  isInputNum={true}
                  inputStyle="inputStyle"
                  value={otp}
                  hasErrored={otpErr}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span style={{ color: "white" }}>-</span>}
                />
                {otpErr != "" ? (
                  <p style={{ color: "red", textalign: "center" }}>{otpErr}</p>
                ) : null}
              </div>
              <FormButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (functionTrigger === 1) {
                    submitNewEmail();
                  } else if (functionTrigger === 2) {
                    submitOtp();
                  }
                }}
              >
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
