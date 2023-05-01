import React, { useState } from "react";
import PropTypes from "prop-types";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="main-content">
      <div className="auth-form">
        <h1>Log in</h1>
        <p>
          Don't have {" "}
          <button
            className="btn link-btn"
            onClick={() => props.onFormSwitch("SignGeneral")}
          >
            Sign Up
          </button>
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="password"
            name="password"
            required="required"
            placeholder="Password"
          />
          <button className="btn">Log In</button>
          <button
            className="btn forgot"
            onClick={() => (window.location.href = "/ResetPsswd")}
          >
            {" "}
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Login;
