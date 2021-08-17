import { Button, TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { isClose } from "../../features/mailReducer";
import { dataBase } from "../../Firebase";
import "./SendMail.css";
import LoaderSpinner from "../Loader/Loader";
import { useState } from "react";
const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setloading] = useState(true);

  const dispath = useDispatch();

  const onSubmit = async (data) => {
    setloading(false);
    try {
      await dataBase.collection("emails").add({
        ...data,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      await dispath(isClose());
    } catch (error) {
      alert(error);
    } finally {
      setloading(true);
    }
  };
  return (
    <div className="sendMail">
      {loading ? (
        <>
          <div className="sendMail__header">
            <h3> New Message</h3>

            <Close
              onClick={() => dispath(isClose())}
              className="senMail__close"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("to", { required: true })}
              className="sendMail__input"
              type="email"
              color="secondary"
              label="To"
              variant="outlined"
            />
            {errors.to && <p className="error_mail">To is Required</p>}
            <TextField
              {...register("subject", { required: true })}
              className="sendMail__input"
              label="Subject"
              color="secondary"
              variant="outlined"
              type="text"
            />
            {errors.subject && (
              <p className="error_mail">Subject is Required</p>
            )}
            <TextField
              {...register("message", { required: true })}
              className="sendMail__input"
              id="outlined-multiline-static"
              label="Message"
              color="secondary"
              multiline
              rows={4}
              variant="outlined"
            />
            {errors.message && (
              <p className="error_mail">Message is Required</p>
            )}
            {console.log(errors)}
            <div className="sendMail__options">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                className="senMail__send"
              >
                Send
              </Button>
            </div>
          </form>
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default SendMail;
