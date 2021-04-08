import styled from 'styled-components'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'

export const TableContainer = styled.div`
  display: flex;
  color:#fff;
  justify-content: center;
  margin: 5% auto 10% auto;
  align-items: center;
  max-width:90vw;
`;
export const TableTag = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableTr = styled.tr`
  text-align:center;
  display:flex;
  align-items:center;
justify-content:center;
 `;
export const TableTh = styled.th`
  padding:16px;
  font-weight:600;
  font-size:16px;
  max-width:45vw;
  min-width:45vw;
  display:flex;
  justify-content:flex-start;
  letter-spacing:1.3px;
  border-collapse: collapse;
  
`;
export const TableTd = styled.td`
   padding:12px;
   max-width:20vw;
   padding-bottom:20px;
   text-transform: capitalize;
   min-width:20vw;
  border-collapse: collapse;
  
`;

export const DeleteIcon = styled(AiOutlineDelete)`
color:#b50e02;
font-size:23px;
margin-left:-80%;
opacity:0.9;
`

export const EditIcon = styled(AiOutlineEdit)`
color:#0871c2;
font-size:23px;
opacity:0.9;
margin-right:-80%;
`