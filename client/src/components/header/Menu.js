import React from "react";
import { NavLink } from "react-router-dom";
import { MenuInnerNavigationContainer, MenuItem } from "./Menu.Styled";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = (props) => {
  function changeCard(card) {
    props.selectCard(card);
    try {
      props.setOpen(false);
    } catch (e) {
      return null;
    }
  }

  function closeResponsiveMenu() {
    try {
      props.setOpen(false);
    } catch (e) {
      return null;
    }
  }

  return (
    <React.Fragment>
      <MenuItem style={props.stylePadding}>
        <NavLink onClick={() => closeResponsiveMenu()} to="/">
          <b>Domov</b>
        </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
          <NavLink onClick={() => closeResponsiveMenu()} to="/uradneoverenepreklady">
            <b>Úradné preklady</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
            <NavLink onClick={() => closeResponsiveMenu()} to="/neuradneoverenepreklady">
            <b>Neúradné preklady</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
            <NavLink onClick={() => closeResponsiveMenu()} to="/tlmocenie">
            <b>Tlmočenie</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
        {props.outSide ? (
          <Link
            onClick={() => closeResponsiveMenu()}
            to="sectionOmne"
            smooth={true}
          >
            <b>O mne</b>
          </Link>
        ) : (
          <NavLink to="/">
            <b>O mne</b>
          </NavLink>
        )}
      </MenuItem>
      <MenuItem style={props.stylePadding}>
        <NavLink onClick={() => closeResponsiveMenu()} to="/kontakt">
          <b>Kontakt</b>
        </NavLink>
      </MenuItem>
    </React.Fragment>
  );
};

export default Menu;
