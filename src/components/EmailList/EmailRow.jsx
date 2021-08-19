import { Checkbox } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import EmailIcons from "./EmailIcons";
import "./EmailRow.css";

const EmailRow = ({ title, id, subject, description, time }) => {
  const history = useHistory();
  // const now = new Date().getSeconds();

  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
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
      <p className="emailRow__time">
        {time ? new Date(+`${time.seconds}000`).toLocaleString() : ""}
      </p>
    </div>
  );
};

export default EmailRow;
