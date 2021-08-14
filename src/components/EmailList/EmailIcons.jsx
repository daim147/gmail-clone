import { IconButton } from "@material-ui/core";
import React from "react";

const EmailIcons = ({ icons }) => {
  const iconsBunle = icons.map((Icon, i) => (
    <IconButton key={i}>
      <Icon />
    </IconButton>
  ));
  return iconsBunle;
};

export default EmailIcons;
