import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  InputDiv,
  InputTilte,
  FooterInput,
  InputSubdiv,
  PlaneIcons,
  FooterInputDiv
} from "./Footer.elements";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            Eetya
          </SocialLogo>

          <WebsiteRights>
            Eetya © {new Date().getFullYear()} All rights reserved
          </WebsiteRights>

          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>

      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Company </FooterLinkTitle>
            <FooterLink to="/about-us"  onClick={toggleHome}>About Us</FooterLink>
            <FooterLink to="/coming-soon"  onClick={toggleHome}>Blogs</FooterLink>
            <FooterLink to="/contact-us"  onClick={toggleHome}>Contact Us</FooterLink>
            <FooterLink to="/what-we-do"  onClick={toggleHome}>What we Do</FooterLink>
            <FooterLink to="/why-buy-made-in-usa"  onClick={toggleHome}>Why Buy Made In USA</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Support</FooterLinkTitle>
            <FooterLink to="/help-center"  onClick={toggleHome}>Help Center</FooterLink>
            <FooterLink to="/terms-of-service"  onClick={toggleHome}>Terms of service</FooterLink>
            <FooterLink to="/disclaimer"  onClick={toggleHome}>Disclaimer</FooterLink>
            <FooterLink to="/privacy-policy"  onClick={toggleHome}>Privacy Policy</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <InputDiv>
        <InputSubdiv>
          <InputTilte>Stay upto Date</InputTilte>
           <FooterInputDiv>
          <FooterInput placeholder="Your email address" />
           <PlaneIcons/>
           </FooterInputDiv>
        </InputSubdiv>
      </InputDiv>
    </FooterContainer>
  );
};

export default Footer;
