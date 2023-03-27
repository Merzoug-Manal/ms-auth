import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignGeneral from "./components/Auth/SignGeneral";
import "./App.css";
import Login from "./components/Auth/Login";
import SignEmployer from "./components/Auth/SignEmployer";
import SignApplicant from "./components/Auth/SignApplicant";
import ResetPsswd from "./components/Auth/ResetPsswd";
import CheckEmail from "./components/Auth/CheckEmail";
import Landing from "./components/Home/landing";
import AboutUs from "./components/AboutUS/AboutUs";
import AccountCreated from "./components/Auth/AccountCreated";

const App = () => {
  const [formType, setFormType] = useState("Login");

  const handleFormSwitch = (formType) => {
    setFormType(formType);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route path="/AccountCreated" >
              <AccountCreated/>
            </Route>   
          <Route exact path="/login">
            {formType === "Login" && <Login onFormSwitch={handleFormSwitch} />}
            {formType === "SignGeneral" && (
              <SignGeneral onFormSwitch={handleFormSwitch} />
            )}
          </Route>
          {/* <Route exact path="/SignGeneral" component={SignGeneral}/> */}
          <Route exact path="/SignEmployer">
            <SignEmployer />
          </Route>
          <Route exact path="/SignApplicant" component={SignApplicant} />
          <Route exact path="/ResetPsswd">
            <ResetPsswd />
          </Route>
          <Route exact path="/CheckEmail">
            <CheckEmail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
