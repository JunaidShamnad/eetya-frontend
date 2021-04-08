import styled from "styled-components";
import {Link} from 'react-router-dom'

export const UserDataText = styled.p`
  font-size: 16px;
  cursor: default;
  font-weight: 300;
  line-height: 30px;
  padding: 16px 0px;
  max-width: 400px;
  color: #fff;
  text-align: left;
  border: none;
  outline: none;
  background: none;
  border-bottom: 2px solid #707070;
  margin-bottom: 32px;
  text-decoration: none;
  letter-spacing: 1.3px;
`;
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
export const Button = styled(Link)`
  background: #141317;
  white-space: nowrap;
  outline: none;
  min-width: 140px;
  max-width: 160px;
  max-height: 50px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1.3px;
  transition: 0.3s;
  display:flex;
  flex-direction:row;
  margin-left:auto;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  color: #fff;
  border: 2px solid #FFF8F0;
  
  font-size:18px;

`;
export const TableContainer = styled.div`
  display: flex;
  overflow-x:auto;
  overflow-y:hidden;
  flex-direction:column;
  justify-content: center;
  margin: 10% auto;
  max-width: 90vw;
`;
export const CartTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom:10px;
  display: flex;
  text-align:left;
  justify-content: flex-start;
`;

export const TableTag = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableTr = styled.tr`
border-bottom: 1px solid #ddd;
`;
export const TableTh = styled.th`
  padding: 16px ;
  empty-cells:hide;
  font-weight: 600;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1.3px;
  border-collapse: collapse;
  
`;
export const TableTd = styled.td`
  padding:10px  16px ;

  border-collapse: collapse;
  text-align: left;
  vertical-align:center;
`;
