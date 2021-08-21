import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { auth } from "../../Firebase";
import "./Header.css";
import { motion } from "framer-motion";

// ! ANIMATION VARIANT
const headerAnimation = {
  initial: {
    y: -100,
  },
  final: {
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

const Header = () => {
  const user = useSelector((state) => state.userAuth.user);

  return (
    <motion.div
      variants={headerAnimation}
      initial="initial"
      animate="final"
      className="header"
    >
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
    </motion.div>
  );
};

export default Header;
