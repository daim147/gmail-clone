import { Checkbox } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React from "react";
import EmailIcons from "./EmailIcons";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Sections from "./Sections";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <EmailIcons icons={[ArrowDropDown, Redo, MoreVert]} />
        </div>
        <div className="emailList__settingsright">
          <EmailIcons
            icons={[ChevronLeft, ChevronRight, KeyboardHide, Settings]}
          />
        </div>
      </div>
      {/* Email Sections */}
      <div className="email__sections">
        <Sections Icon={Inbox} title="Primary" color="red" selected />
        <Sections Icon={People} title="Social" color="#1A73e8" />
        <Sections Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__lists">
        <EmailRow
          title="Hello"
          id="hee"
          subject="HELLLO WORLD"
          description="WORLD IS DUMP  WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLD WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLD"
          time="10:00pm"
        />
        <EmailRow
          title="Hello"
          id="hee"
          subject="HELLLO WORLD"
          description="WORLD IS DUMP  WORLDHELLLO WORLDHELLLO WORLDHELLLO WORLDHELLLO "
          time="10:00pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
