import React from "react";
import {
  MainDiv,
    MainImage,
  MainTitle,
  Paragraph,
  ParagraphContainer,
} from "../AboutUs/AboutUs.elements";
import { SubTitle } from "../PrivacyPolicy/PrivacyPolicy.elements";

const WhyMadeInUsa = () => {
  return (
    <>
      <MainDiv>
        <MainTitle>Why buy Made in USA</MainTitle>
        <MainImage />
        <ParagraphContainer>
   
          <Paragraph>
          According to a 2015 report by <a style={{textDecoration:"underline",color:"#fff"}}  href="https://www.consumerreports.org/cro/magazine/2015/05/made-in-america/index.htm"> Consumer Reports</a>, 80% of American shoppers say they prefer to buy goods made in the United States. More than 60% say they’d even be willing to pay 10% more for an American-made product. (Ref:<a style={{textDecoration:"underline",color:"#fff"}}  href="https://www.consumerreports.org/cro/magazine/2015/05/made-in-america/index.htm"> Consumer Reports</a> )
          </Paragraph>
   
          <Paragraph>
          Few of the reasons can be summed as under that motivates consumers buy USA made:
          </Paragraph>

          <SubTitle>Jobs for future generations – </SubTitle>
          <Paragraph>
          The future generation depends on what is done in the moment. The future springs out from here. As you sow, so shall you reap. What we do today with our economy will determine the wellbeing of our future generation. They come out of what we choose today. More and more people are getting aware and making conscious choices to contribute their share of reviving our future.
          </Paragraph>

    <SubTitle>American Independence –</SubTitle>
          <Paragraph>
          The demand of home made/grown products will increase the supply and hence less of imports and dependence on other countries. The less the imports the more the independence as a nation which has so many positive outcomes.
          </Paragraph>
 <SubTitle>Quality Products – </SubTitle>
          <Paragraph>
          Made in America has always been associated with quality as a hallmark.  While we import majorly from China,it’s a different story with chinese buyers 60% of whom prefer american products for its quality. The same applies to other parts of the world. Nations across the globe prefer our indegenous products for its high quality. 
          </Paragraph>
 <SubTitle>Less Pollution and lower carbon footprint- </SubTitle>
          <Paragraph>
          The world is moving forward towards a sustainable future. The US based companies follow the guidelines and adhere to the safety of the environment, considerably using less harmful chemicals and the process. The imported goods are shipped majority of the time, which wastes an extremely large amount of petroleum, producing unnecessary emissions into the atmosphere
          </Paragraph>
       <SubTitle>Human Rights- Guaranteed Safer and Fair Working Conditions</SubTitle>
          <Paragraph>
          A lot of the outsourced manufacturing destinations use unfair means of employment , sometimes utilizing children. Top of that, the standards for consumer protection are not at par with that of the USA. In the United States we have a strong employment policy and safety policies which companies have to adhere with.
          </Paragraph>
          <SubTitle>A stronger Economy</SubTitle>
          <Paragraph>
          Small and medium businesses are the backbone of any economy. In the United States with the increased outsourced manufacturing, the small and medium business are hit the most. Once you start buying the USA made products, it gives back to the economy. Increases jobs with that increases the purchasing capacity of people with circles back to more jobs as it balances the demand and supply. The stronger the economy, the stronger the nation with a strong economy. 
          </Paragraph>
          <SubTitle>Lowers Trade Deficit –</SubTitle>
          <Paragraph>
          In 2018, the U.S. had a $621 BILLION world trade deficit.3 This means we as a nation are buying a lot more products than other countries are buying from us. Doesn’t seem right, does it? Buying American increases the demand for Made in USA products. (Reff:<a style={{textDecoration:"underline",color:"#fff"}} href="https://www.madeinamerica.co/blogs/makers/10-reasons-to-buy-american">MadeinAmerica</a>) 
          </Paragraph>
        </ParagraphContainer>
      </MainDiv>
    </>
  );
};

export default WhyMadeInUsa;
