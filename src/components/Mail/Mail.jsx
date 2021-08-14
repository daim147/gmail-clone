import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import EmailIcons from "../EmailList/EmailIcons";
import "./Mail.css";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <EmailIcons
            icons={[
              MoveToInbox,
              Error,
              Delete,
              Email,
              WatchLater,
              CheckCircle,
              LabelImportant,
              MoreVert,
            ]}
          />
        </div>
        <div className="mail__toolsRight">
          <EmailIcons icons={[UnfoldMore, Print, ExitToApp]} />
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mail__important" />
          <p>Title</p>
          <p>Time</p>
        </div>
        <div className="mail__message">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ratione,
          accusamus quae incidunt dignissimos saepe voluptatum magni itaque, ut
          expedita ex totam vitae sint ullam, unde aliquam nam cupiditate
          voluptatem dolorem non cum dolorum illum distinctio? Obcaecati, modi
          veniam quam accusantium pariatur repudiandae expedita dolores maxime
          repellendus. Nobis voluptates mollitia temporibus ea qui ducimus
          tenetur voluptate labore ratione nulla aut facere voluptatum sapiente
          tempora officia veritatis officiis, laboriosam corporis? Consequuntur
          quae saepe suscipit ullam, hic atque officia sit explicabo iste eaque
          at, omnis obcaecati deleniti voluptas error fuga dolore vel quaerat
          nulla reprehenderit earum veniam nam nisi repudiandae. Ut, esse?
        </div>
      </div>
    </div>
  );
};

export default Mail;
