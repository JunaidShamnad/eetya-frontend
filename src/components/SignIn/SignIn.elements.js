import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow-x: hidden;
  background: linear-gradient(
    108deg,
    rgba(20, 19, 23, 1) 0%,
    rgba(20, 19, 23, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #141317;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 55px;
  font-weight: 500;
  white-space:nowrap;
  letter-spacing: 1.9px;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 962px) {
    font-size: 44px;
    font-weight: 500;
    letter-spacing: 1.2px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 482px) {
    font-size: 38px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const Formlabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  display: flex;
  white-space:nowrap;
  letter-spacing: 1.2px;
  font-weight: 300;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 2px solid #707070;
  border-radius: 0px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1.1px;

  :focus {
    color: #fff;
  }
  ::placeholder {
    color: #fff;
    font-size: 15px;
    opacity: 0.5;
    letter-spacing: 1.2px;
    font-weight: 300;
  }
`;

export const FormButton = styled.button`
  background: none;
  padding: 16px 0;
  border: 2px solid #fff;
  outline: none;
  margin-top: 30px;
  border-radius: 4px;
  max-width: 140px;
  max-height: 50px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;

  &:hover {
    background: #fff8f0;
    color: #141317;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 15px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
`;

export const SigninText = styled(Link)`
  margin-top: 130px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 15px;
  @media screen and (max-width: 480) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
