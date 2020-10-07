import React from "react";
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
        <Menu selectCard={props.selectCard} activeCard={props.activeCard} />
      </MenuContainer>
      <ButtonContainer>
        <Button><Link to="sectionKontakt" smooth={true}>KONTAKTUJTE MA</Link></Button>
      </ButtonContainer>
    </HeaderMainDiv>
  );
};

export default Header;
