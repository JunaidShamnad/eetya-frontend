import styled from "styled-components";
import { Link } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'

export const MainDiv = styled.div`
  background: #141317;
  color: #fff;
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  font-weight: 500;
  letter-spacing: 1.3px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
 
  margin:0 auto;
  letter-spacing: 1px;
  white-space: nowrap;
  margin-top:10px;
  color: #fff;
`;


export const LinkText = styled(Link)`
  font-size: 16px;
  font-weight: 300;
  margin-right:2%;
  padding:0;
  display:flex;
  place-items:center;
justify-content: center;
  letter-spacing: 1px;
  white-space: nowrap;
  margin:30%;
  text-decoration:underline;
  color: #fff;

`
export const LinkContainer = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
place-items:center;
`

export const ArrowIcon = styled(IoIosArrowForward)`
display: flex;
place-items:center;
justify-content: center;
`