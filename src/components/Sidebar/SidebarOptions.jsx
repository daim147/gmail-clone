import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ title, Icon, number, selected }) => {
  return (
    <div className={`sidebarOptions ${selected && "active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
