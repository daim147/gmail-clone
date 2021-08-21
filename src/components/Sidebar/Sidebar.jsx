import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { isOpen } from "../../features/mailReducer";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
const sideBar = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    },
  },
};
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="sidebar"
      variants={sideBar}
      initial="initial"
      animate="final"
    >
      <Button
        onClick={() => dispatch(isOpen())}
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions title="Inbox" Icon={Inbox} number={54} selected={true} />
      <SidebarOptions title="Starred" Icon={Star} number={54} />
      <SidebarOptions title="Snoozed" Icon={AccessTime} number={54} />
      <SidebarOptions title="Important" Icon={LabelImportant} number={54} />
      <SidebarOptions title="Sent" Icon={NearMe} number={54} />
      <SidebarOptions title="Drafts" Icon={Note} number={54} />
      <SidebarOptions title="More" Icon={ExpandMore} number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footer__icons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
