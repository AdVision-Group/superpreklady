import React, { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks";
import { Burger, Menu } from "./index";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  const handleCLick = () => {
    setOpen(false);
  };
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu click={handleCLick} open={open} setOpen={setOpen} id={menuId} />
    </div>
  );
};

export default MobileNavigation;
