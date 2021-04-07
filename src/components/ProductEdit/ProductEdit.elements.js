import styled from "styled-components";
import { Link } from "react-router-dom";
import {AiOutlineDelete} from 'react-icons/ai'


export const FadeText = styled.h1`
  color: #343434;
  font-size: 90px;
  font-weight: 600;
  margin-bottom: -0.4rem;
  opacity: 0.3;
  padding: 0 2rem;
  text-transform: uppercase;

  @media screen and (max-width: 962px) {
    font-size: 75px;
  }
  @media screen and (max-width: 762px) {
    font-size: 55px;
  }
  @media screen and (max-width: 540px) {
    font-size: 40px;
  }
  @media screen and (max-width: 482px) {
    font-size: 35px;
    padding: 0 1.9rem;
  }
`;

export const RightDiv = styled.div`
   max-width: 60vw;
   min-width: 58vw;
   margin-right: 8%;
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   text-align: left;

  @media screen and (max-width: 1100px) {
    padding-right: 5%;
    padding-left: 3%;
    margin-left: 2%;
  }

  @media screen and (max-width: 853px) {
    border: none;
    padding: 0;
    margin-left:3%;
    margin-right:5%;
  }

  @media screen and (max-width: 540px) {
    margin-left:2%;
  }
`;



export const DeleteIcon = styled(AiOutlineDelete)`
  display: flex;
  color: #fff;
  font-size: 25px;
  background-position: center;
  margin-left:auto;
  
  @media screen and (max-width: 560px) {
    font-size: 22px;
    margin-right:5%;
  }
`;

export const Maintitle = styled(Link)`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  text-decoration:none;
  margin-left:13%;
  padding-bottom:30px;
  @media screen and (max-width: 962px) {
    font-size: 21px;
  }
  @media screen and (max-width: 762px) {
    font-size: 20px;
    margin-left:10%;
  }
  @media screen and (max-width: 540px) {
    font-size: 19px;
    margin-left:11%;
  }
  @media screen and (max-width: 482px) {
    font-size: 18px;
  }
`;