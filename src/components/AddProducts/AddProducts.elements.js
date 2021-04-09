import styled from 'styled-components'

export const FormSelectDiv = styled.div`
display:flex;
margin:0px 0px 32px 0px;
padding:16px;
max-width:500px;
padding-left:0;
border:none;
outline:none;
`

export const DetailBox = styled.div`
display: flex;
margin-top:50px;
background:#0D0D0F;
padding:25px;
flex-direction:column;
max-width:390px;
margin-left:15%;
`

export const Detaillabel = styled.label`
  margin-bottom: 8px;
  white-space:nowrap;
  display: flex;
  letter-spacing:1px;
  font-size: 15px;
  color: #fff;
`;

export const DetailInput = styled.input`
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

export const FormSelect = styled.select`
background-color:#141317;
color:#fff;
padding:16px;
font-size:15px;
font-weight:300;
letter-spacing:1px;
border:none;
border-bottom:1px solid #fff;
max-width:500px;
min-width:400px;
outline:none;
`

export const FormSelectOption = styled.option`
border:none;
outline:none;

`



