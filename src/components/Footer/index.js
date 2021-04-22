import React, { useState } from "react";
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
  FooterInputDiv,
} from "./Footer.elements";
import Axios from "../../axios";
import Swal from "sweetalert2";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [newsLetter, setNewsLetter] = useState("");
  const [emailError, setemailErrorr] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleNewsletter = () => {
    let isError = validateEmail(newsLetter);
    if (!isError) {
      setemailErrorr(true);
      setNewsLetter('')
      return;
    } else {
      setemailErrorr(false);
    }

    Axios({
      method: "post",
      url: "/add-newsletter",
      data: { email:newsLetter },
    }).then((res) => {
      if (res.data.status) {
        Swal.fire(
          "Added",
          `your email ${newsLetter} added to our Newletter list`,
          "success"
        );
        setNewsLetter('');
      } else {
        Swal.fire("Error", "something went wrong, try again later!", "error");
        setNewsLetter('');
      }
    });
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
            <FooterLink to="/about-us" onClick={toggleHome}>
              About Us
            </FooterLink>
            <FooterLink to="/coming-soon" onClick={toggleHome}>
              Blogs
            </FooterLink>
            <FooterLink to="/contact-us" onClick={toggleHome}>
              Contact Us
            </FooterLink>
            <FooterLink to="/what-we-do" onClick={toggleHome}>
              What we Do
            </FooterLink>
            <FooterLink to="/why-buy-made-in-usa" onClick={toggleHome}>
              Why Buy Made In USA
            </FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Support</FooterLinkTitle>
            <FooterLink to="/help-center" onClick={toggleHome}>
              Help Center
            </FooterLink>
            <FooterLink to="/terms-of-service" onClick={toggleHome}>
              Terms of service
            </FooterLink>
            <FooterLink to="/disclaimer" onClick={toggleHome}>
              Disclaimer
            </FooterLink>
            <FooterLink to="/privacy-policy" onClick={toggleHome}>
              Privacy Policy
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <InputDiv>
        <InputSubdiv>
          <InputTilte>Stay upto Date</InputTilte>
          <FooterInputDiv>
            <FooterInput
              type="email"
              value={newsLetter}
              placeholder="Your email address"
              onChange={(e) => {
                setNewsLetter(e.target.value);
              }}
            />

            <PlaneIcons onClick={handleNewsletter} />
          </FooterInputDiv>
          {emailError ? (
            <div style={{ color: "red" }}>email incorrect</div>
          ) : (
            ""
          )}
        </InputSubdiv>
      </InputDiv>
    </FooterContainer>
  );
};

export default Footer;
