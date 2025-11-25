import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, CssBaseline, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

import LogoImage from "@/components/LogoImage";
import GlobalSearch from "./Navbar/global-search";
import NavbarActions from "./Navbar/navbar-actions";

import { AppDispatch } from "@/store";
import { toggleSidebar } from "@/store/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <CssBaseline />
      <AppBar className="navbar">
        <Box className="sidebar-controler">
          <Box component={Link} href="/dashboard" className="logo-container">
            <LogoImage />
          </Box>
          <Toolbar disableGutters>
            <IconButton
              className="action-btn"
              aria-label="open drawer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>

        <Box component="main" className="main-nav">
          <GlobalSearch />
          <NavbarActions />
        </Box>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
