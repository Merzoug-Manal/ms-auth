import React, { useState } from "react";

function ResetPsswd(props) {
  const [email, setEmail] = useState("");

  return (
    <div className="main-content">
      <div className="auth-form">
        <h2>Reset your password</h2>
        <br />
        <p>
          Enter your email address and we will send you instructions to reset
          your password
        </p>
        <form className="reset-form">
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
          <button
            className="btn"
            onClick={() => (window.location.href = "/CheckEmail")}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPsswd;
