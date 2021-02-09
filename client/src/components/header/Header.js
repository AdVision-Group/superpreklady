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
  H3,
  H4,
  Button,
} from "./Header.styled";

import MenuX from "./Menu";
import Logo from "../../images/superpreklady-about-image.jpg";
import { Link } from "react-scroll";
import {
  MenuEmailContainer,
  MenuFirstLineContainer,
  MenuInnerContainer,
  MenuMainDiv,
  MenuNumberContainer,
  MenuSecondLineContainer,
} from "./Menu.Styled";
import { useOnClickOutside } from "./navigation/navigation/hooks";
import { Burger, Menu } from "./navigation/navigation";
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
      </LogoContainer>
      <MenuContainer>
        <MenuMainDiv>
          <MenuInnerContainer>
            <MenuFirstLineContainer>
              <LogoInnerContainerContent>
                <Heading>
                  <H3><b>SUPERPREKLADY</b></H3>
                </Heading>
                <SubHeading>
                  <H4><b>Ing.Pavel Polónyi</b></H4>
                </SubHeading>
              </LogoInnerContainerContent>
              <MenuNumberContainer>
                <p style={{marginTop:'0'}}>
                  <span style={{ color: "#000000" }}>
                    <b>Telefón:</b>
                  </span>{" "}
                  <span style={{ color: "#b5b5b5" }}>
                    <b>
                  +421 908 728 274
                      </b>
                  </span>
                </p>
              </MenuNumberContainer>
              <MenuEmailContainer>
                <p style={{marginTop:'0'}}>
                  <span style={{ color: "#000000" }}>
                    <b>E-mail:</b>
                  </span >{" "}
                  <span style={{ color: "#b5b5b5" }}><b>
                    pavel@superpreklady.sk
                    </b>
                  </span>
                </p>
              </MenuEmailContainer>
              <ButtonContainer>
                <NavLink to="/kontakt" >
                  <Button>Napíšte mi</Button>
                </NavLink>
              </ButtonContainer>
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
    </HeaderMainDiv>
  );
};

export default Header;

/*

* <MenuSocialContainer>
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
              </MenuSocialContainer>*/