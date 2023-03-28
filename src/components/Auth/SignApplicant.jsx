import React, { useState } from "react";
const SignApplicant = () => {
  const [Number_phone, setNumber] = useState("");
  const [Birthday, setBirthday] = useState("");

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
          <input
            className="input"
            value={Number_phone}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Number phone"
            id="Number_phone"
            name="Number_phone"
          />
          <input
            className="input"
            value={Birthday}
            onChange={(e) => setBirthday(e.target.value)}
            type="date"
            placeholder="Birthday"
            id="Birthday"
            name="Birthday"
          />
          <div className="select">
            <select name="Company_type" id="Company_type">
              <option selected disabled>
                City of residence
              </option>
              <option value="one">Adrar</option>
              <option value="two">Chlef</option>
              <option value="two">Oran</option>
            </select>
          </div>
          <div className="select">
            <select name="Company_type" id="Company_type">
              <option selected disabled>
                {" "}
                what sector do you work in?
              </option>
              <option value="acad">Academe</option>
              <option value="stud">Student</option>
              <option value="Gover">Government</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button className="btn" type="Submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignApplicant;
