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


export const DecrementButton = styled.button`
  background: none;
  padding: 16px 0;
  border: 2px solid #fff;
  outline: none;
  border-radius: 4px;
  max-width: 50px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1.3px;
`;

export const IncrementButton = styled.button`
  background: none;
  padding: 16px 0;
  border: 2px solid #fff;
  outline: none;
  border-radius: 4px;
  max-width: 50px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1.3px;
`;

export const ResetButton = styled.button`
   background: #222126;
  padding: 16px 0;
  outline: none;
  border-radius: 4px;
  max-width: 80px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  border:none;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;

  :hover {
    background: #141317;
    border: 2px solid #1f1f1f;
    color: #fff;
  }
`;

export const MainCountTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  place-items: center;
  font-weight: 500;
  margin-bottom:5px;
  letter-spacing: 1px;
`

export const CountText = styled.h2`
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-left:1%;
  margin-right:1%;
  align-items: center;
  place-items: center;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 8px;
`;

export const CountButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content:center;
  align-items: center;
  place-items: center;
`;
