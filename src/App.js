import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmailList from "./components/EmailList/EmailList";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import { useSelector } from "react-redux";

function App() {
  const mailOpen = useSelector((state) => state.mailOpen.mail);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <EmailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>
        {mailOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
