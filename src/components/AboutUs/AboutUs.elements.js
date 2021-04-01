import styled from "styled-components";
import HeaderImage from "../../images/about-1.jpg";

export const MainDiv = styled.div`
  background: #141317;
  color: #fff;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

export const MainImage = styled.div`
  background-image: url(${HeaderImage});
  display: flex;
  opacity: 0.9;
  width:100vw;
  flex-direction: column;
  height:90vh;
  object-fit: cover;
  margin-top: 6%;
  background-position: center;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

export const MainTitle = styled.h1`
  font-size: 60px;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  margin-top: 10%;
  margin-left: 3%;
  letter-spacing: 1.3px;
  display: flex;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  margin-top: 5%;
  margin-bottom: 10%;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: #fff;
  opacity: 0.8;
  font-weight: 300;
  margin: 10px 30px;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 26px;
`;
