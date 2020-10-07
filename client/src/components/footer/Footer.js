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
  SocialIcon,
  ScopeContainerModule,
  Menu,
  ContactContainerModule,
  ContactContent,
  Phone,
} from "./Footer.Styled";
import {
  H3,
  H4,
  HeaderMainDiv,
  LogoImg,
  LogoInnerContainer,
  LogoInnerContainerContent,
  SubHeading,
} from "../header/Header.styled";
import Logo from "../../images/superpreklady-logo.png";
import PhoneIcon from "../../images/phone-black-18dp.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <RowOneContainer>
          <LogoContainer>
            <LogoInnerContainer>
              <LogoImg src={Logo} alt="mainLogo" />
            </LogoInnerContainer>
            <LogoInnerContainerContent>
              <Heading>
                <H3>SUPERPREKLADY</H3>
              </Heading>
              <SubHeading>
                <H4>Ing.Pavel Polónyi</H4>
              </SubHeading>
            </LogoInnerContainerContent>
          </LogoContainer>
          <PhoneContainer>
            <IconContainer>
              <Phone src={PhoneIcon} alt="mainLogo"></Phone>
            </IconContainer>
            <PhoneContactContainer>
              <Number>
                <h1>+421 908 72 82 74</h1>
              </Number>
              <Content>
                <p>Som vám k dispozícií neustále</p>
              </Content>
            </PhoneContactContainer>
          </PhoneContainer>
        </RowOneContainer>
        <RowTwoContainer>
          <AboutContainerModule>
            <Heading>
              <h3>O MNE</h3>
            </Heading>
            <Separator />
            <AboutContent>
              <p>
                <span> five centuries, but also the leap</span><br/>
                <span>into electronic typesetting,
                remaining essenti</span><br/>
                <span>into electronic typesetting,
                remaining essenti</span><br/>

              </p>
            </AboutContent>
            <SocialContainer>
              <SocialIcon>
                <p>Facebook</p>
              </SocialIcon>
              <SocialIcon>
                <p>Twitter</p>
              </SocialIcon>
              <SocialIcon>
                <p>Google+</p>
              </SocialIcon>
            </SocialContainer>
          </AboutContainerModule>
          <ScopeContainerModule>
            <Heading>
              <h3>OBSAH</h3>
            </Heading>
            <Separator />
            <Menu>
              <ul>
                <li>Domov</li>
                <li>Sluzby</li>
                <li>Cennik</li>
                <li>O mne</li>
                <li>Kontatk</li>
              </ul>
            </Menu>
          </ScopeContainerModule>
          <ContactContainerModule>
            <Heading>
              <h3>KONTAKT</h3>
            </Heading>
            <Separator />
            <ContactContent>
              <p>
                <span>Ambroseho 10, 851 02 Bratislava 5</span><br/>
                <span>+421 908 82 74</span><br/>
                <span>pavel@superpreklady.sk</span>
              </p>
            </ContactContent>
          </ContactContainerModule>
        </RowTwoContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
