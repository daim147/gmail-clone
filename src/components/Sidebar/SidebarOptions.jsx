import { motion } from "framer-motion";
import React from "react";
import "./SidebarOptions.css";
const optionAnimate = {
  initial: {
    x: -300,
  },
  final: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
};
const SidebarOptions = ({ title, Icon, number, selected }) => {
  return (
    <motion.div
      variants={optionAnimate}
      className={`sidebarOptions ${selected && "active"}`}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </motion.div>
  );
};

export default SidebarOptions;
