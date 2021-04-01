import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#141317" : "#FFF8F0")};
  white-space: nowrap;
  outline: none;
  min-width: 140px;
  max-width: 200px;
  max-height: 50px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1.3px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 0px" : "14px 0px")};
  color: ${({ primary }) => (primary ? "#FFF8F0" : "#2A2B2B")};
  border: ${({ border }) => (border ? "2px solid #FFF8F0" : "none")};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "0px")};
  font-size: ${({ big }) => (big ? "18px" : "14px")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF8F0" : "#141317")};
    color: ${({ primary }) => (primary ? "#141317" : "#FFF8F0")};
  }
`;

export const FormButton = styled.button`
  background: none;
  padding: 16px 0;
  border: 2px solid #fff;
  outline: none;
  margin-top: 30px;
  border-radius: 4px;
  max-width: 140px;
  max-height: 50px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;
`;
