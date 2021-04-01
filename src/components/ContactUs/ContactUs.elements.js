import styled from "styled-components";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiHeadphones } from "react-icons/fi";

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const TextTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: 400;
  letter-spacing: 1.2px;
  white-space: nowrap;
  margin-bottom: 10px;
`;

export const TextContent = styled.h2`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1.3px;
  margin-bottom: 25%;

  @media screen and (max-width: 962px) {
    margin-bottom: 32px;
  }
`;

export const PhoneIcon = styled(AiOutlinePhone)`
  display: flex;
  font-size: 25px;
  padding-right: 2%;
`;

export const MailIcon = styled(AiOutlineMail)`
  display: flex;
  font-size: 25px;
  padding-right: 2%;
`;

export const LocationIcon = styled(GoLocation)`
  display: flex;
  font-size: 18px;
  padding-right: 2%;
`;

export const TechnicalSupportIcon = styled(FiHeadphones)`
  display: flex;
  font-size: 23px;
  padding-right: 2%;
`;

export const TextInput = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  outline: none;
  max-width: 280px;
  min-width: 234px;
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

export const Messagelabel = styled.label`
  margin-bottom: 8px;
  display: flex;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
`;

export const MapContainer = styled.div`
  display: flex;
`;
