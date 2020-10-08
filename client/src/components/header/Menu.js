import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {
  MenuMainDiv,
  MenuInnerContainer,
  MenuFirstLineContainer,
  MenuNumberContainer,
  MenuEmailContainer,
  MenuSocialContainer,
  MenuSecondLineContainer,
  MenuInnerNavigationContainer,
  MenuItem,
} from "./Menu.Styled";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = (props) => {

  function changeCard(card) {
    props.selectCard(card)
  }
  return (
    <MenuMainDiv>
      <MenuInnerContainer>
        <MenuFirstLineContainer>
          <MenuNumberContainer>
            <p>
              <span style={{ color: "#9A9A9A" }}>Telefón:</span> +421 908 728
              274
            </p>
          </MenuNumberContainer>
          <MenuEmailContainer>
            <p>
              <span style={{ color: "#9A9A9A" }}>E-mail:</span>{" "}
              pavel@superpreklady.sk
            </p>
          </MenuEmailContainer>
          <MenuSocialContainer>
            <p>Face, Twitter, Google+</p>
          </MenuSocialContainer>
        </MenuFirstLineContainer>
        <MenuSecondLineContainer>
          <MenuInnerNavigationContainer>
            <MenuItem>
              <NavLink to="/">Domov</NavLink>
            </MenuItem>
            <MenuItem><Link onClick={() => changeCard(0)} to="sectionUradnePreklady"  smooth={true}>Úradné preklady</Link></MenuItem>
            <MenuItem><Link onClick={() => changeCard(1)} to="sectionUradnePreklady"  smooth={true}>Neuradné preklady</Link></MenuItem>
            <MenuItem><Link onClick={() => changeCard(2)} to="sectionUradnePreklady"  smooth={true}>Tlmočenie</Link></MenuItem>
            <MenuItem><Link to="sectionOmne" smooth={true}>O mne</Link></MenuItem>
            <MenuItem>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </MenuItem>
          </MenuInnerNavigationContainer>
        </MenuSecondLineContainer>
      </MenuInnerContainer>
    </MenuMainDiv>
  );
};

export default Menu;
