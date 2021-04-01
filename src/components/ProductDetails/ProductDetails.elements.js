import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageLongLine from "../../images/Line_12.svg";
import { IoIosArrowForward } from "react-icons/io";

export const MainDiv = styled.div`
  background: #141317;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #fff;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 953px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
export const RightDiv = styled.div`
  max-width: 60vw;
  min-width: 58vw;
  margin-right: 8%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  text-align: left;

  @media screen and (max-width: 1100px) {
    padding-right: 2%;
    padding-left: 8%;
    margin-left: 6%;
  }

  @media screen and (max-width: 853px) {
    border: none;
    padding: 0;
    margin-left: 8%;
  }

  @media screen and (max-width: 540px) {
    margin-left: 8%;
  }
`;

export const LeftDiv = styled.div`
  max-width: 45vw;
  min-width: 42vw;
  border-right: 1px solid #fff;
  margin-right: 3%;
  margin-bottom: 40px;

  @media screen and (max-width: 1095px) {
    border: none;
  }
`;

export const MainImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MainImageConatiner = styled.img`
  display: flex;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 10%;
  margin-left: 15%;
  max-width: 400px;
  max-height: 360px;
  min-width: 395px;
  min-height: 360px;

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    object-fit: cover;
    place-items: center;
    margin-right: 10%;
    margin-left: 15%;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 310px;
    min-width: 300px;
    max-height: 320px;
    min-height: 300px;
  }
`;

export const SubImageDiv = styled.div`
  display: flex;
  margin-right: 10%;
  margin-left: 15%;
  margin-top: 6%;
  margin-bottom: 5%;
  justify-content: flex-start;
  align-items: center;
  place-items: center;
`;

export const SubImageConatiner = styled.img`
  display: flex;
  object-fit: cover;
  margin-right: 5%;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 120px;
  max-height: 120px;
  min-width: 120px;
  min-height: 120px;

  @media screen and (max-width: 480px) {
    max-width: 100px;
    min-width: 100px;
    max-height: 100px;
    min-height: 100px;
  }
`;

export const CompanyName = styled.h3`
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 15px;
  letter-spacing: 1.1px;

  @media screen and (max-width: 1100px) {
    font-size: 21px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 25px;
  letter-spacing: 1.3px;

  @media screen and (max-width: 1100px) {
    font-size: 26px;
  }
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }

  @media screen and (max-width: 540px) {
    font-size: 22px;
  }
`;

export const ProductDesc = styled.p`
  font-size: 16px;
  font-weight: 300;
  min-width: 290px;
  padding-bottom: 10px;
  line-height: 28px;

  @media screen and (max-width: 1100px) {
    font-size: 15.5px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15.5px;
  }

  @media screen and (max-width: 540px) {
    font-size: 14.5px;
  }
`;

export const ProductPrice = styled.h2`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 1.1px;
  padding-bottom: 4px;
`;

export const ReviewText = styled(Link)`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  place-items: center;
  padding-bottom: 20px;
  font-weight: 300;
  color: #fff;
`;

export const ReviewArrowIcon = styled(IoIosArrowForward)`
  display: flex;
  color: #fff;
  font-size: 15px;
  display: inline-block;
  background-position: center;
  place-items: center;
  @media screen and (max-width: 560px) {
    font-size: 13px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  padding: 0 5px;
`;

export const BuyButton = styled.button`
  background: none;
  margin:  5px 0;
  padding: 16px 0;
  border: 2px solid #fff;
  outline: none;
  margin-top: 30px;
  text-decoration: none;
  max-width: 140px;
  min-width: 140px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;

  &:hover {
    background: #fff8f0;
    color: #141317;
  }

  @media screen and (max-width: 962px) {
    margin-left: -5px;
    margin-top: 3px;
    margin-bottom: 15px;
  }
`;

export const CartButton = styled(Link)`
  background: #222126;
  padding: 16px 0;
  outline: none;
  margin-left: 10%;
  margin-right: 5%;
  border: none;
  text-decoration: none;
  margin-top: 30px;
  max-width: 140px;
  min-width: 140px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.3px;

  &:hover {
    background: #141317;
    border: 2px solid #1f1f1f;
    color: #fff;
  }

  @media screen and (max-width: 962px) {
    margin-top: 3px;
    margin-bottom: 15px;
  }
`;

export const QuestionDiv = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 10px;
  justify-content: flex-start;
  flex-direction: column;
`;

export const QuestionTextWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  min-width: 280px;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
`;

export const QuestionText = styled(Link)`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  line-height: 30px;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;

  @media screen and (max-width: 1100px) {
    font-size: 15.5px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15.5px;
    font-weight: 300;
  }

  @media screen and (max-width: 540px) {
    font-size: 14.5px;
  }
`;

export const LongLine = styled.i`
  background-image: url(${ImageLongLine});
  display: flex;
  justify-content: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  width: 490px;
  height: 4px;
`;

export const QuestionArrowIcon = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 20px;
  background-position: center;
  place-items: center;
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
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
  font-size: 18px;
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
  font-size: 18px;
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
  padding: 5px;
  margin-bottom:50px;
  align-items: center;
  place-items: center;
`;
