  import React from "react";
  import img from "../../assets/email1.png"
  function CheckEmail(){
    return (
      <div className="main-content">
        <div className="resend-form">
            <img src={img}/>
            <h2>Check Your Email</h2><br/><br/>
            <p>Please check your email address for instructions to reset your password </p><br/>
            <button className="btn resend_mail">Resend email</button>
        </div>
        </div>
    );
  }
  export default CheckEmail;
