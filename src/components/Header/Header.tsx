import { Menu } from "@mui/icons-material";
import { Box, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ExpandableMenu from "../ExpandableMenu";
import {
  Logo,
  MenuBox,
  MenuButton,
  StyledAppBar,
  StyledToolbar,
} from "./styled";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Logo variant="h6">GUTU GALUPPO</Logo>
        {/* <MenuBox isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            Menu
            <Menu />
          </MenuButton>
          <Box sx={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.3s" }}>
            <MenuItem onClick={() => setIsOpen(false)}>Work</MenuItem>
            <MenuItem onClick={() => setIsOpen(false)}>About Me</MenuItem>
            <MenuItem onClick={() => setIsOpen(false)}>Contact</MenuItem>
          </Box>
        </MenuBox> */}
        <ExpandableMenu />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
