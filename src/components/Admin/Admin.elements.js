import styled from "styled-components";

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
  font-size: 20px;
  font-weight: 400;
  letter-spacing:1px;
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
