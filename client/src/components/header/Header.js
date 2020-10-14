import React, { useRef, useState } from "react";
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
  SocialIconContainer,
  Icon,
  H3,
  H4,
  Button,
} from "./Header.styled";

import MenuX from "./Menu";
import Logo from "../../images/superpreklady-logo.png";
import { Link } from "react-scroll";
import {
  MenuEmailContainer,
  MenuFirstLineContainer,
  MenuInnerContainer,
  MenuMainDiv,
  MenuNumberContainer,
  MenuSecondLineContainer,
  MenuSocialContainer,
} from "./Menu.Styled";
import { useOnClickOutside } from "./navigation/navigation/hooks";
import { Burger, Menu } from "./navigation/navigation";

import faTwitter from "../../images/twitter-square-brands.svg";
import faFacebook from "../../images/facebook-brands.svg";
import faGooglePlus from "../../images/google-plus-g-brands.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderMainDiv>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu
        selectCard={props.selectCard}
        activeCard={props.activeCard}
        outSide={props.outSide}
        setOutSide={props.setOutSide}
        open={open}
        setOpen={setOpen}
        id={menuId}
      />
      <LogoContainer>
        <LogoInnerContainer>
          <NavLink to="/">
            <LogoImg src={Logo} alt="mainLogo" />
          </NavLink>
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
                  <span style={{ color: "#9A9A9A" }}>
                    <b>Telefón:</b>
                  </span>{" "}
                  +421 908 728 274
                </p>
              </MenuNumberContainer>
              <MenuEmailContainer>
                <p>
                  <span style={{ color: "#9A9A9A" }}>
                    <b>E-mail:</b>
                  </span>{" "}
                  pavel@superpreklady.sk
                </p>
              </MenuEmailContainer>
              <MenuSocialContainer>
                <SocialIconContainer>
                  <a href="https://www.facebook.com/" rel={"noopener"}>
                    <Icon src={faFacebook} />
                  </a>
                </SocialIconContainer>
                <SocialIconContainer>
                  <a href="https://www.facebook.com/" rel={"noopener"}>
                    <Icon src={faTwitter} />
                  </a>
                </SocialIconContainer>
                <SocialIconContainer>
                  <a href="https://www.facebook.com/" rel={"noopener"}>
                    <Icon src={faGooglePlus} />
                  </a>
                </SocialIconContainer>
              </MenuSocialContainer>
            </MenuFirstLineContainer>
            <MenuSecondLineContainer>
              <MenuX
                stylePadding={props.stylePadding}
                selectCard={props.selectCard}
                activeCard={props.activeCard}
                outSide={props.outSide}
                setOutSide={props.setOutSide}
              />
            </MenuSecondLineContainer>
          </MenuInnerContainer>
        </MenuMainDiv>
      </MenuContainer>
      <ButtonContainer>
        <Link to="sectionKontakt" smooth={true}>
          <Button>Konktaktujte ma</Button>
        </Link>
      </ButtonContainer>
    </HeaderMainDiv>
  );
};

export default Header;
