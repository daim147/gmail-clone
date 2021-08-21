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
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { dataBase } from "../../Firebase";
import LoaderSpinner from "../Loader/Loader";
import EmailIcons from "./EmailIcons";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Sections from "./Sections";

const EmailList = () => {
  const [emails, setEmails] = useState(null);
  // const [loading, setLoading] = useState(null);

  useEffect(() => {
    const unsubsribe = dataBase
      .collection("emails")
      .orderBy("timeStamp", "desc")
      .onSnapshot((emails) => {
        setEmails(
          emails.docs.map((email) => ({ id: email.id, ...email.data() }))
        );
      });

    return () => unsubsribe();
  }, []);

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
      <AnimateSharedLayout>
        <motion.div layout className="emailList__lists">
          {emails ? (
            emails.map(({ to, id, subject, message, timeStamp }, index) => (
              <EmailRow
                title={to}
                key={id}
                index={index}
                id={id}
                subject={subject}
                description={message}
                time={
                  timeStamp
                    ? new Date(timeStamp.seconds * 1000).toLocaleString()
                    : ""
                }
              />
            ))
          ) : (
            <LoaderSpinner />
          )}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default React.memo(EmailList);
