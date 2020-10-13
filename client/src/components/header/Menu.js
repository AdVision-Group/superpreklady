import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuInnerNavigationContainer,
  MenuItem,
} from "./Menu.Styled";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = (props) => {

  function changeCard(card) {
    props.selectCard(card)
      try{
          props.setOpen(false)
      }
      catch (e) {
        return null
      }
  }

    function closeResponsiveMenu() {
        try{
            props.setOpen(false)
        }
        catch (e) {
            return null
        }
    }

  return (
          <React.Fragment>
            <MenuItem><NavLink onClick={() => closeResponsiveMenu()} to="/"><b>Domov</b></NavLink></MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(0)} to="sectionSluzby"  smooth={true}><b>Úradné preklady</b></Link> : <NavLink to="/"><b>Úradné preklady</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(1)} to="sectionSluzby"  smooth={true}><b>Neúradné preklady</b></Link> : <NavLink to="/"><b>Neúradné preklady</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => changeCard(2)} to="sectionSluzby"  smooth={true}><b>Tlmočenie</b></Link> : <NavLink to="/"><b>Tlmočenie</b></NavLink>  }</MenuItem>
            <MenuItem>{props.outSide? <Link onClick={() => closeResponsiveMenu()} to="sectionOmne" smooth={true}><b>O mne</b></Link> : <NavLink to="/"><b>O mne</b></NavLink>}</MenuItem>
            <MenuItem><NavLink to="/kontakt"><b>Firemné údaje</b></NavLink></MenuItem>
          </React.Fragment>
  );
};


export default Menu;
