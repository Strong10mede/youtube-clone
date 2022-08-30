import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
          alt=""
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="Mede" src="ss" />
      </div>
    </div>
  );
}

export default Header;
