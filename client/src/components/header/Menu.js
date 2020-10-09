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
          <MenuInnerNavigationContainer>
            <MenuItem><NavLink to="/"><b>Domov</b></NavLink></MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(0)} to="sectionSluzby"  smooth={true}><b>Úradné preklady</b></Link> : <NavLink to="/"><b>Úradné preklady</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(1)} to="sectionSluzby"  smooth={true}><b>Neuradné preklady</b></Link> : <NavLink to="/"><b>Neuradné preklady</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(2)} to="sectionSluzby"  smooth={true}><b>Tlmočenie</b></Link> : <NavLink to="/"><b>Tlmočenie</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link to="sectionOmne" smooth={true}><b>O mne</b></Link> : <NavLink to="/"><b>O mne</b></NavLink>}</MenuItem>
            <MenuItem><NavLink to="/kontakt"><b>Firemné údaje</b></NavLink></MenuItem>
          </MenuInnerNavigationContainer>
        </MenuSecondLineContainer>
      </MenuInnerContainer>
    </MenuMainDiv>
  );
};

export default Menu;

/*
<MenuItem>
              {props.outside ? <NavLink onClick={() => changeOutside()} to="/kontakt">Kontakt</NavLink> : <NavLink to="/">Kontakt</NavLink> }
            </MenuItem>

            <MenuItem><Link to="sectionOmne" smooth={true}>O mne</Link></MenuItem>

            outSide={outSide} setOutSide={setOutSide}
* */
