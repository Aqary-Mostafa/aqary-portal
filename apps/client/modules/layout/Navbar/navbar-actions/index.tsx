import { Box, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import { BsFullscreen } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { handleLogout, toggleFullSceen } from "../helpers";
import AccessLinks from "./access-links";
import LanguagePopper from "./language";
import Notification from "./notification";
import ProfileSetting from "./profile-setting";

import { closeConnection } from "@/store/slices/notification";

const NavbarActions = () => {
  const mobileSize = useMediaQuery("(max-width:700px)");
  const dispatch = useDispatch();

  return (
    <Box className="nav-actions">
      <Box className="actions">
        {!mobileSize && <AccessLinks />}
        <LanguagePopper />
        <Notification />
        <IconButton
          className="action-btn"
          onClick={() => {
            handleLogout();
            dispatch(closeConnection(true));
          }}
        >
          <IoLogOutOutline />
        </IconButton>
        <IconButton className="action-btn" onClick={() => toggleFullSceen()}>
          <BsFullscreen />
        </IconButton>
      </Box>
      <ProfileSetting />
    </Box>
  );
};

export default NavbarActions;
