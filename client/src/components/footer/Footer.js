import React from "react";
import {
  FooterContainer,
  FooterInnerContainer,
  RowOneContainer,
  LogoContainer,
  PhoneContainer,
  IconContainer,
  PhoneContactContainer,
  Number,
  Content,
  RowTwoContainer,
  AboutContainerModule,
  Heading,
  Separator,
  AboutContent,
  SocialContainer,
  ScopeContainerModule,
  Menu,
  ContactContainerModule,
  ContactContent,
  Phone,
    H3F,
    H1F,
    PF
} from "./Footer.Styled";

import {
  Icon,
  LogoImg,
  LogoInnerContainer,
  LogoInnerContainerContent, SocialIconContainer,
  SubHeading,
} from "../header/Header.styled";

import Logo from "../../images/superpreklady-logo.png";
import PhoneIcon from "../../images/phone-black-18dp.svg";
import faFacebook from "../../images/facebook-brands.svg";
import faTwitter from "../../images/twitter-square-brands.svg";
import faGooglePlus from "../../images/google-plus-g-brands.svg";
import MenuNavigation from '../header/Menu'

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <RowOneContainer>
          <LogoContainer>
            <LogoInnerContainer style={{paddingRight:"25px"}}>
              <LogoImg src={Logo} alt="mainLogo" />
            </LogoInnerContainer>
            <LogoInnerContainerContent>
              <Heading>
                <H1F>SUPERPREKLADY</H1F>
              </Heading>
              <SubHeading>
                <H3F>Ing.Pavel Polónyi</H3F>
              </SubHeading>
            </LogoInnerContainerContent>
          </LogoContainer>
          <PhoneContainer>
            <IconContainer>
              <Phone src={PhoneIcon} alt="mainLogo"/>
            </IconContainer>
            <PhoneContactContainer>
              <Number>
                <H1F>+421 908 72 82 74</H1F>
              </Number>
              <Content>
                <PF style={{marginTop:"5px"}}>Som vám k dispozícií neustále</PF>
              </Content>
            </PhoneContactContainer>
          </PhoneContainer>
        </RowOneContainer>
        <RowTwoContainer>
          <AboutContainerModule>
            <Heading>
              <H1F>O mne</H1F>
            </Heading>
            <Separator />
            <AboutContent>
              <PF>
                <span>Chcel by som byť maliarom.<br/> Dal som sa ale na polygrafiu,<br/> skôr priemysel </span>
              </PF>
            </AboutContent>
            <SocialContainer>
              <SocialIconContainer>
                <a href='https://www.facebook.com/' rel={'noopener'}>
                  <Icon src={faFacebook}/>
                </a>
              </SocialIconContainer>
              <SocialIconContainer>
                <a href='https://www.facebook.com/' rel={'noopener'}>
                  <Icon src={faTwitter}/>
                </a>
              </SocialIconContainer>
              <SocialIconContainer>
                <a href='https://www.facebook.com/' rel={'noopener'}>
                  <Icon src={faGooglePlus}/>
                </a>
              </SocialIconContainer>
            </SocialContainer>
          </AboutContainerModule>
          <ScopeContainerModule>
            <Heading>
              <H1F>Obsah</H1F>
            </Heading>
            <Separator />
            <Menu>
              <MenuNavigation selectCard={props.selectCard} activeCard={props.activeCard} outSide={props.outSide} setOutSide={props.setOutSide}/>
            </Menu>
          </ScopeContainerModule>
          <ContactContainerModule>
            <Heading>
              <H1F>Kontakt</H1F>
            </Heading>
            <Separator />
            <ContactContent>
              <PF>
                <span>Ambroseho 10, 851 02 Bratislava 5</span><br/>
                <span>+421 908 82 74</span><br/>
                <span>pavel@superpreklady.sk</span>
              </PF>
            </ContactContent>
          </ContactContainerModule>
        </RowTwoContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
