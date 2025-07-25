import React, { useState } from "react";
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Paper,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(
  ({ theme, expanded }: { theme?: any; expanded: boolean }) => ({
    borderRadius: expanded ? "25px 25px 0 0" : "25px",
    transition: "all 0.1s ease-in-out",
    minWidth: expanded ? "200px" : "120px",
    height: "48px",
    backgroundColor: "#1F2937",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: "#1F2937",
    },
  }),
);

const MenuContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  overflow: "hidden",
  boxShadow: theme.shadows[4],
}));

const MenuList = styled(List)(
  ({ theme, expanded }: { theme?: any; expanded: boolean }) => ({
    padding: expanded ? "16px" : "0",
    color: "white",
    backgroundColor: "#1F2937",
  }),
);

const MenuListItem = styled(ListItemButton)(({ theme }) => ({
  padding: "8px 24px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface ExpandableMenuProps {
  onMenuItemClick?: (item: string) => void;
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({ onMenuItemClick }) => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = ["About Me", "Works", "Contact"];

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleMenuItemClick = (item: string) => {
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
    setExpanded(false); // Close menu after selection
  };

  return (
    <Box sx={{ display: "inline-block" }}>
      <MenuContainer>
        <StyledButton
          expanded={expanded}
          onClick={handleToggle}
          endIcon={<MenuIcon />}
          variant="contained"
          fullWidth
        >
          <Typography variant="button" fontWeight="bold">
            MENU
          </Typography>
        </StyledButton>

        <Collapse in={expanded} timeout={300}>
          <MenuList expanded={expanded}>
            {menuItems.map((item, index) => (
              <ListItem key={item} disablePadding>
                <MenuListItem
                  onClick={() => handleMenuItemClick(item)}
                  sx={{
                    borderTop:
                      index === 0 ? "1px solid rgba(0, 0, 0, 0.12)" : "none",
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: "2rem",
                    }}
                  />
                </MenuListItem>
              </ListItem>
            ))}
          </MenuList>
        </Collapse>
      </MenuContainer>
    </Box>
  );
};

export default ExpandableMenu;
