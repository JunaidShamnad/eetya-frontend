import React from "react";
import ImageOne from "../../images/eetya-new.png";

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
          <LinkText to="/products">Gadgets</LinkText>
          <Arrow />
          <LinkText to="/products" className="sweaters">
          Books<LinkArrow to="/products" />
          </LinkText>
          <Arrow />
          <LinkText to="/products">Food Items</LinkText>
        </LinkContainer>

        <MainImage src={ImageOne} />
      </HomeContainer>
     
    </>
  );
};

export default Home;
