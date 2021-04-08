import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'


export const ImageBox = styled.img`
 width:100px;
 height:100px;

`

export const CartTotalContainer = styled.div`
 display:flex;
 justify-content:space-between;
`
export const CartTotalText = styled.h2`
 font-size:25px;
font-weight:400;
color:#fff;
`
export const DeleteIcon = styled(AiOutlineDelete)`
color:#b50e02;
font-size:28px;
`
export const PriceTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  letter-spacing:1px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`
export const RightDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const FormButton = styled.button`
background: none;
padding: 16px 0;
border: 2px solid #fff;
outline: none;
margin-top: 30px;
border-radius: 4px;
max-width: 140px;
max-height: 50px;
min-width: 140px;
min-height: 50px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 18px;
cursor: pointer;
letter-spacing: 1.3px;
`;
