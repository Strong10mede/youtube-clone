import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header">
      <MenuIcon />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
        alt=""
        className="header__logo"
      />
      <input type="text" />
      <SearchIcon />
    </div>
  );
}

export default Header;
