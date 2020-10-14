import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import MenuNav from "../../../Menu";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuNav
        open={props}
        setOpen={setOpen}
        selectCard={props.selectCard}
        activeCard={props.activeCard}
        outSide={props.outSide}
        setOutSide={props.setOutSide}
      />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
