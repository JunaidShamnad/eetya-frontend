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

export const TableContainer = styled.div`
  display: flex;
  justify-content:center;
  margin:10% auto;
  align-items: center;
  max-width: 90vw;
`;
export const TableTag = styled.table`
 border:2px solid #fff;
 width:100%;
 border-collapse: collapse;
`;

export const TableTr = styled.tr`

 `;
export const TableTh = styled.th`
  padding:16px;
  font-weight:600;
  font-size:16px;
  letter-spacing:1.3px;
  border-collapse: collapse;
  border:1px solid #fff;
`;
export const TableTd = styled.td`
padding:12px;
  border-collapse: collapse;
  border:1px solid #fff;
`;
