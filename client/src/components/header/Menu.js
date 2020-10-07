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
              <span style={{ color: "#e4e4e4e0" }}>Telefón:</span> +421 908 728
              274
            </p>
          </MenuNumberContainer>
          <MenuEmailContainer>
            <p>
              <span style={{ color: "#e4e4e4e0" }}>E-mail:</span>{" "}
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
              <NavLink to="/">DOMOV</NavLink>
            </MenuItem>
            <MenuItem><Link onClick={() => changeCard(0)} to="sectionUradnePreklady"  smooth={true}>ÚRADNÉ PREKLADY</Link></MenuItem>
            <MenuItem><Link onClick={() => changeCard(1)} to="sectionUradnePreklady"  smooth={true}>NEÚRADNÉ PREKLADY</Link></MenuItem>
            <MenuItem><Link onClick={() => changeCard(2)} to="sectionUradnePreklady"  smooth={true}>TLMOČENIE</Link></MenuItem>
            <MenuItem><Link to="sectionOmne" smooth={true}>O MNE</Link></MenuItem>
            <MenuItem>
              <NavLink to="/kontakt">KONTAKT</NavLink>
            </MenuItem>
          </MenuInnerNavigationContainer>
        </MenuSecondLineContainer>
      </MenuInnerContainer>
    </MenuMainDiv>
  );
};

export default Menu;
