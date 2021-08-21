import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../Firebase";
import "./Header.css";
const Header = () => {
  const user = useSelector((state) => state.userAuth.user);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDown className="header__carrot" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={() => auth.signOut()} src={user.photoUrl} />
      </div>
    </div>
  );
};

export default Header;
