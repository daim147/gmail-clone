import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmailList from "./components/EmailList/EmailList";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { auth } from "./Firebase";
import { login, logout } from "./features/userReducer";
import LoaderSpinner from "./components/Loader/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const mailOpen = useSelector((state) => state.mailOpen.mail);
  const user = useSelector((state) => state.userAuth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  if (user === "pending") {
    return (
      <div style={{ height: "100vh" }}>
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <Router>
      {user ? (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <EmailList />
              </Route>
              <Route path="/mail/:mailId">
                <Mail />
              </Route>
            </Switch>
          </div>
          <AnimatePresence>{mailOpen && <SendMail />}</AnimatePresence>
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
