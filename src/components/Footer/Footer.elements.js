import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaTelegramPlane} from 'react-icons/fa'

export const FooterContainer = styled.footer`
  background-color: #161619;
  display: grid;
  padding-right: 10px;
  grid-template-columns: 2fr 1fr 1.2fr;
  grid-template-rows: 1fr;
  padding-bottom: 10px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

export const FooterLinksContainer = styled.div`
  justify-content: center;
  margin-top: 40px;
  grid-column-start: 2;
  grid-column-end: 3;

  @media screen and (max-width: 900px) {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-top: 10px;
  }

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    margin: 0 15%;
    margin-bottom: 30px;
    padding: 0;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 15px;
  letter-spacing: 1.2px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight:300;
  &:hover {
    color: #fff8f0;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  grid-column: 1/2;
  width: 100%;
  display:flex;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    grid-column: 1/2;
    grid-row: 1/2;
    margin-left:auto;
    margin-right:auto;
    justify-content: center;
    place-items:center;
   align-items: center;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 40px;
  margin-left: 10%;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    place-items: center;
    justify-content: flex-start;
    margin: 0 10%;
    padding: 0;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-weight: 300;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 22px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const InputDiv = styled.div`
  grid-column: 3/4;
  padding: 0 10px;
  margin-top: 40px;
  margin-bottom: 15px;

  @media screen and (max-width: 900px) {
    grid-column: 1/2;
    grid-row: 3/4;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    margin: 0 10%;
    padding: 0;
  }
`;

export const InputSubdiv = styled.div`
position:relative;
 /* display:flex;
 flex-direction:column;
 max-width:260px; */
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
`;

export const InputTilte = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-left: 1%;
  font-weight: 400;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    text-align: left;
    place-items:center;
  }
`;
export const FooterInputDiv = styled.div`
position:relative;
display:flex;
max-width:236px;
@media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    text-align: left;
    place-items:center;
  }
`
export const FooterInput = styled.input`
  padding: 8px 15px;
  margin-top: 15px;
  margin-bottom: 32px;
  border: 2px solid #9F9F9F;
  outline: none;
  background: #1F1F1F;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1.1px;

  :focus {
    color: #fff;
  }

  ::placeholder {
    color: #fff;
    font-size: 14px;
    opacity: 0.9;
    letter-spacing: 1px;
    font-weight: 300;
  }
`;
export const PlaneIcons = styled(FaTelegramPlane)`
  position:absolute;
  top:28%;
  right:8%;
  font-size:25px;
  color: #fff;
`;