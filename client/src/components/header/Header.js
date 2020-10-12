import React, {useRef, useState} from "react";
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

import MenuX from "./Menu";
import Logo from "../../images/superpreklady-logo.png";
import {Link} from "react-scroll";
import {
  MenuEmailContainer,
  MenuFirstLineContainer,
  MenuInnerContainer,
  MenuMainDiv,
  MenuNumberContainer, MenuSecondLineContainer, MenuSocialContainer
} from "./Menu.Styled";
import {useOnClickOutside} from "./navigation/navigation/hooks";
import {Burger, Menu} from "./navigation/navigation";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderMainDiv>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu selectCard={props.selectCard} activeCard={props.activeCard} outSide={props.outSide} setOutSide={props.setOutSide} open={open} setOpen={setOpen} id={menuId} />
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
        <MenuMainDiv>
        <MenuInnerContainer>
          <MenuFirstLineContainer>
            <MenuNumberContainer>
              <p>
                <span style={{ color: "#9A9A9A" }}><b>Telefón:</b></span> +421 908 728
                274
              </p>
            </MenuNumberContainer>
            <MenuEmailContainer>
              <p>
                <span style={{ color: "#9A9A9A" }}><b>E-mail:</b></span>{" "}
                pavel@superpreklady.sk
              </p>
            </MenuEmailContainer>
            <MenuSocialContainer>
              <p><b>Face, Twitter, Google+</b></p>
            </MenuSocialContainer>
          </MenuFirstLineContainer>
          <MenuSecondLineContainer>
          <MenuX selectCard={props.selectCard} activeCard={props.activeCard} outSide={props.outSide} setOutSide={props.setOutSide} />
          </MenuSecondLineContainer>
        </MenuInnerContainer>
      </MenuMainDiv>
      </MenuContainer>
      <ButtonContainer>
        <Link to="sectionKontakt" smooth={true}><Button>Konktaktujte ma</Button></Link>
      </ButtonContainer>
    </HeaderMainDiv>
  );
};

export default Header;
