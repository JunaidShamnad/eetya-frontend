import React from "react";
import {
  MainDiv,
  MainImage,
  MainTitle,
  Paragraph,
  ParagraphContainer,
} from "./AboutUs.elements";

const AboutUs = () => {
  return (
    <>
      <MainDiv>
        <MainTitle>About Us</MainTitle>
        <MainImage />
        <ParagraphContainer>
          <Paragraph>
            Based in the sunshine state, we are serious and determined to
            encourage and sustain our home/grown brands, “The made in USA”
            brands. We are proud of millions of small and medium businesses run
            or led by never-give-up staunch entrepreneurs, who would keep the
            economy running, who would keep people engaged with something
            purposeful. We are one of the many such small and medium businesses,
            upbeat and excited to create some big and positive impact, keeping
            intact the American Dream.
          </Paragraph>
          <Paragraph>
            We value personal relationships as much as we do business
            connections. Yes, our industry is about sales and brands and
            products – but we never forget that it’s still a people business. We
            work and treat people like the way we would love to be treated.
            Perpetual relationships are what we love to build on.
          </Paragraph>

          <Paragraph>
            We want to be a part of the awakening Americans who want to
            contribute towards the country with any small acts that matter.
            Promoting the usa made products has a long term effect on our
            economy, employment, quality of living, lower trade deficits,
            stronger economy, human rights, environment to name a few. These are
            enough for one to understand the importance of helping the local
            manufacturers grow. Everything is connected. We are doing our part
            to make this wheel spin.
          </Paragraph>
          <Paragraph>
            We would love to discuss how we may work and grow together. Let’s do
            business.
          </Paragraph>
        </ParagraphContainer>
      </MainDiv>
    </>
  );
};

export default AboutUs;
