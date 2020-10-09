import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderMainDiv,
  LogoContainer,
  MenuContainer,
  ButtonContainer,
  LogoInnerContainer,
  LogoInnerContainerContent,
  Heading,
  SubHeading,
  LogoImg,
  H3,
  H4,
  Button,
} from "./Header.styled";
import Menu from "./Menu";
import Logo from "../../images/superpreklady-logo.png";
import {Link} from "react-scroll";

const Header = (props) => {
  return (
    <HeaderMainDiv>
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
      <MenuContainer>
        <Menu selectCard={props.selectCard} activeCard={props.activeCard} outSide={props.outSide} setOutSide={props.setOutSide} />
      </MenuContainer>
      <ButtonContainer>
        <Link to="sectionKontakt" smooth={true}><Button>Konktaktujte ma</Button></Link>
      </ButtonContainer>
    </HeaderMainDiv>
  );
};

export default Header;
