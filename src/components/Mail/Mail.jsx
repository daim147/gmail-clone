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
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { dataBase } from "../../Firebase";
import EmailIcons from "../EmailList/EmailIcons";
import LoaderSpinner from "../Loader/Loader";
import "./Mail.css";

const Mail = () => {
  const [email, setEmail] = useState(null);
  const history = useHistory();
  const { mailId } = useParams();

  useEffect(() => {
    const asyncFunc = async () => {
      const ref = await dataBase.doc(`emails/${mailId}`);
      const getReference = await ref.get();
      const data = getReference.data();
      setEmail({ ...data });
    };
    asyncFunc();
  }, [mailId]);

  console.log(mailId);
  return (
    <div className="mail">
      {email ? (
        <>
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
              <h2>{email.subject}</h2>
              <LabelImportant className="mail__important" />
              <p>{email.to}</p>
              <p>{new Date(email.timeStamp.seconds * 1000).toLocaleString()}</p>
            </div>
            <div className="mail__message">{email.message}</div>
          </div>
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default Mail;
