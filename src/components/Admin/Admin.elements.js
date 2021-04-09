import styled from "styled-components";
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import {Link} from 'react-router-dom';

export const MainDiv = styled.div`
  background: #141317;
  color: #fff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
font-size:25px;
color:red;
`
export const TickIcon = styled(IoIosCheckmarkCircleOutline)`
 font-size:28px;
 color:green;
margin-right:-50%;
`


export const AdminTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  letter-spacing:1.4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
`;
export const Button = styled(Link)`
  background: #141317;
  white-space: nowrap;
  outline: none;
  min-width: 190px;
  max-width: 190px;
  max-height: 50px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1.3px;
  transition: 0.3s;
  display:flex;
  margin-right:auto;
  margin-left:auto;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  color: #fff;
  margin-top:80px;
  margin-bottom:80px;
  border: 2px solid #FFF8F0;
  
  font-size:18px;

`;
export const TableDiv = styled.div`
  background:#0d0d0f;
  padding:80px;
  min-width:85vw;
  max-width:85vw;
  margin-bottom:8%;
  border-radius:4px;
  margin: 10px auto;
  justify-content:center;
  align-items:center;

`
export const Boxtitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  padding-bottom:20px;
  letter-spacing:1.2px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5% auto 10% auto;
  align-items: center;
  max-width: 90vw;
`;
export const TableTag = styled.table`
  
  width: 100%;
  border-collapse: collapse;
`;

export const TableTr = styled.tr`
  text-align:center;
 `;
export const TableTh = styled.th`
  padding:16px;
  font-weight:600;
  font-size:16px;
  letter-spacing:1.3px;
  border-collapse: collapse;
  border-bottom:1px solid #fff;
`;
export const TableTd = styled.td`
   padding:12px;
  border-collapse: collapse;
  border-bottom:1px solid #fff;
`;
