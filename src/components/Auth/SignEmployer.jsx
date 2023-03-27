import React, { useState } from "react";
const SignEmployer = () => {
  const [Company_type, setTypeComp] = useState("");
  const [Company_name, setNameComp] = useState("");
  const [Company_website, setWebComp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-content">
      <div className="auth-form">
        <h2>informations update</h2>
        <br />
        <p>Please fill in the fields to finalize the creation</p>
        <br />
        <form className="SignEmployer" onSubmit={handleSubmit}>
          <div className="select">
            <select name="Company_type" id="Company_type">
              <option selected disabled>
                Company type
              </option>
              <option value="one">one</option>
              <option value="two">two</option>
            </select>
          </div>

          <input
            className="input"
            value={Company_name}
            onChange={(e) => setNameComp(e.target.value)}
            type="text"
            placeholder="Company name"
            id="Company_name"
            name="Company_name"
          />
          <input
            className="input"
            value={Company_website}
            onChange={(e) => setWebComp(e.target.value)}
            type="text"
            placeholder="Company website"
            id="Company_website"
            name="Company_website"
          />
          <button className="btn" type="Submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignEmployer;
