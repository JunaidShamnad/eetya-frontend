import styled from 'styled-components'

export const Formlabel = styled.label`
  margin-bottom: 8px;
  margin-right:20%;
  max-width:150px;
  min-width:150px;
  display: flex;
  padding-left:5%;
  justify-content: flex-start;
  align-items: flex-end;
  white-space:nowrap;
  display: flex;
  font-size: 18px;
  color: #fff;

  @media screen and (max-width:600px){
    max-width:100px;
   min-width:100px;
   padding-left:2%;
   font-size: 16px;
  }
`;
