import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMainContainer,
  NavigationContainer,
  NavigationContactContainer,
  NavigationContext,
  NavigationBundlerContainer,
} from "./Navigation.styled";

export default function TheNavigation(props) {
  return (
    <NavigationMainContainer>
      <NavigationBundlerContainer>
        <NavigationContext>
          <span style={{ color: "#2362D4" }}>MENU</span>
        </NavigationContext>
        <NavigationContainer>
          <NavLink onClick={props.clickClick} to="/">
            Landing
          </NavLink>
          <NavLink onClick={props.clickClick} to="/projects">
            Projects
          </NavLink>
          <NavLink onClick={props.clickClick} to="/store">
            Store
          </NavLink>
          <NavLink onClick={props.clickClick} to="/about">
            About
          </NavLink>
        </NavigationContainer>
      </NavigationBundlerContainer>
      <NavigationContactContainer />
    </NavigationMainContainer>
  );
}
