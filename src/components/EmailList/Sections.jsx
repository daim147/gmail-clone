import { motion } from "framer-motion";
import React from "react";
import "./Sections.css";

const section = {
  initial: {
    y: -200,
  },
  final: {
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

const Sections = ({ Icon, title, color, selected }) => {
  return (
    <motion.div
      variants={section}
      className={`section ${selected && "section--active"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </motion.div>
  );
};

export default Sections;
