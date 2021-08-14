import React from "react";
import "./Sections.css";

const Sections = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && "section--active"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      {title}
    </div>
  );
};

export default Sections;
