import React from "react";

import {
  Arrow,
  HomeContainer,
  HomeTitle,
  LinkArrow,
  LinkContainer,
  LinkText,
  MainImage,
  ShopCircle,
  SideText,
  SmallLine,
  SubText,
} from "./Home.elements";

const Home = () => {
  

  return (
    <>
      
      <HomeContainer>
        <HomeTitle>
          Soft <br /> Brushed
        </HomeTitle>
        <SubText>Sweaters </SubText>
        <SmallLine />
        <SideText>Relaxed Fit</SideText>

        <ShopCircle to="/home">Shop</ShopCircle>
        <LinkContainer>
          <LinkText>Jackets</LinkText>
          <Arrow />
          <LinkText className="sweaters">
            Sweaters <LinkArrow />
          </LinkText>
          <Arrow />
          <LinkText>Jeans</LinkText>
        </LinkContainer>

        <MainImage />
      </HomeContainer>
     
    </>
  );
};

export default Home;
