import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import React from "react";
import youTubeLogo from "./assets/asset 0.svg";
import myAvatar from './assets/me.jpg'
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="herder__left">
        <MenuIcon />
        <img className="header__logo" src={youTubeLogo} alt="" />
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon className="searchIcon" />
        <MicIcon className = "mic" />
      </div>
      

      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
      
    </div>
  );
};

export default Header;
