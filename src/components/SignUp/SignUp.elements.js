import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: auto;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(20, 19, 23, 1) 0%,
    rgba(20, 19, 23, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
   margin-left:auto;
   margin-right:auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    height: 80%;
    
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  place-items:center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Form = styled.form`
  background: #141317;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  padding: 80px 32px;
  border-radius: 4px;

  .container {
    display: grid;
    grid-gap: 0 0px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    
    margin:0 auto;
    align-items: center;

    .left-sec {
      grid-column-start: 1;
      grid-column-end: 2;
      border-right: 1px solid #707070;
      padding-right: 70px;
    }

    .right-sec {
      padding-left: 70px;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    @media screen and (max-width: 962px) {
      .conatiner {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 400px;
        grid-gap: 0px;
        padding: 0;
        margin: 0;
      }

      .left-sec {
        grid-column-start: 1;
        grid-column-end: 2;
        border: none;
        padding: 0;
      }

      .right-sec {
        grid-column-start: 1;
        grid-column-end: 2;
        padding: 0;
      }
    }
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 55px;
  margin-left: auto;
  margin-right: auto;
  white-space:nowrap;
  font-weight: 500;
  letter-spacing: 1.9px;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 962px) {
    font-size: 44px;
    font-weight: 500;
    letter-spacing: 1.2px;
    margin-left: -5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-left: -5px;
  }
  @media screen and (max-width: 482px) {
    font-size: 38px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const Formlabel = styled.label`
  margin-bottom: 8px;
  white-space:nowrap;
  display: flex;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  outline: none;
  max-width:500px;
  min-width:300px;
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
  min-width: 140px;
  max-height: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction:row;
  place-items:center;
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

  @media screen and (max-width: 962px) {
    margin-left: -5px;
    margin-top: 3px;
    margin-bottom: 15px;
  }
`;

export const SignupText = styled(Link)`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  @media screen and (max-width: 962px) {
    margin-left: -5px;
    margin-top: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-left: -5px;
    margin-top: 20px;
  }
`;
