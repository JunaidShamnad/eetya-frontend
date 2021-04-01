import React from "react";
import {
  MainDiv,
  MainTitle,
  Paragraph,
  ParagraphContainer,
} from "../AboutUs/AboutUs.elements";
import { SubTitle } from "../PrivacyPolicy/PrivacyPolicy.elements";

const Disclaimer = () => {
  return (
    <>
      <MainDiv>
        <MainTitle>Disclaimer</MainTitle>
        <ParagraphContainer>
       
          <Paragraph>
          If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at info@eetya.com.
          </Paragraph>
          <SubTitle>Disclaimers for Eetya</SubTitle>
          <Paragraph>
          All the information on this website - https://eetya.com - is published in good faith and for general information purpose only. Eetya does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Eetya), is strictly at your own risk. Eetya will not be liable for any losses and/or damages in connection with the use of our website.
<br/>
From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
<br/>
Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information
          </Paragraph>

          <SubTitle>Consent</SubTitle>
          <Paragraph>
          By using our website, you hereby consent to our disclaimer and agree to its terms.
          </Paragraph>

          <SubTitle>Update</SubTitle>
          <Paragraph>
          Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </Paragraph>
        </ParagraphContainer>
      </MainDiv>
    </>
  );
};

export default Disclaimer;
