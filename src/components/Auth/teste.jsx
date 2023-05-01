import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import "./SignGeneral.css";

const SignGeneral = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const history = useHistory();

  const handleChange1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  useEffect(() => {
    if (isChecked1) {
      history.push({
        pathname: "/SignEmployer",
        state: { from: "signup" },
      });
    }
    if (isChecked2) {
      history.push({
        pathname: "/SignApplicant",
        state: { from: "signup" },
      });
    }
  }, [isChecked1, isChecked2, history]);

  return (
    <div className="main-content">
      <div className="auth-form">
        <h1>Sign Up</h1>
        <p>
          Already have an account?{" "}
          <button
            className="link-btn btn"
            onClick={() => props.onFormSwitch("Login")}
          >
            Login
          </button>
        </p>
        <form className="signup-form">
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            required="required"
            placeholder="Username"
          />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required="required"
          />
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required="required"
            id="password"
            name="password"
            placeholder="password"
          />
          <input
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
            required="required"
            id="passwordconf"
            name="passwordconf"
          />
          <div className="checkbox-group">
            <div className="box1">
              <label className="checkbox-container">
                <input
                  className="input"
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleChange1}
                />
                <span className="checkmark"></span>
                Employer
              </label>
            </div>
            <label className="checkbox-container">
              <input
                className="input"
                type="checkbox"
                checked={isChecked2}
                onChange={handleChange2}
              />
              <span className="checkmark"></span>
              Applicant
            </label>
          </div>
          <button className="btn" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignGeneral;
