import { Checkbox } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import EmailIcons from "./EmailIcons";
import "./EmailRow.css";

const rowAnimation = {
  initial: {
    opacity: 0,
    y: -50,
  },
  final: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
    },
  }),
};

const EmailRow = ({ title, id, subject, description, time, index }) => {
  const history = useHistory();

  return (
    <motion.div
      layout
      variants={rowAnimation}
      initial="initial"
      animate="final"
      custom={index}
      onClick={() => history.push(`/mail/${id}`)}
      className="emailRow"
    >
      <div className="emailRow__options">
        <Checkbox />
        <EmailIcons icons={[StarBorderOutlined, LabelImportantOutlined]} />
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject} - {""}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </motion.div>
  );
};

export default EmailRow;
