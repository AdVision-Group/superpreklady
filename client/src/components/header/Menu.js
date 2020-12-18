import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./Menu.Styled";

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
        <NavLink exact activeStyle={{
            fontWeight: "bold",
            color: "#3250d1"
        }} onClick={() => closeResponsiveMenu()} to="/">
          <b>Domov</b>
        </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
          <NavLink activeStyle={{
              fontWeight: "bold",
              color: "#3250d1"
          }} onClick={() => closeResponsiveMenu()} to="/uradneoverenepreklady">
            <b>Úradné preklady</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "#3250d1"
            }} onClick={() => closeResponsiveMenu()} to="/neuradneoverenepreklady">
            <b>Neúradné preklady</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "#3250d1"
            }} onClick={() => closeResponsiveMenu()} to="/tlmocenie">
            <b>Tlmočenie</b>
          </NavLink>
      </MenuItem>
      <MenuItem style={props.stylePadding}>
          <NavLink activeStyle={{
              fontWeight: "bold",
              color: "#3250d1"
          }}
            onClick={() => closeResponsiveMenu()} to="/zivotopis"
          >
            <b>Životopis</b>
          </NavLink>
      </MenuItem>
        <MenuItem style={props.stylePadding}>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "#3250d1"
            }} onClick={() => closeResponsiveMenu()} to="/referencie">
                <b>Referencie</b>
            </NavLink>
        </MenuItem>
      <MenuItem style={props.stylePadding}>
        <NavLink activeStyle={{
            fontWeight: "bold",
            color: "#3250d1"
        }} onClick={() => closeResponsiveMenu()} to="/kontakt">
          <b>Kontakt</b>
        </NavLink>
      </MenuItem>
    </React.Fragment>
  );
};

export default Menu;
