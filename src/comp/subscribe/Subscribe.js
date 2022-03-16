import React from "react";
import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>join Our DeFi Community</h2>
        <form action="https://getform.io/f/a26e693c-0ef3-4b77-920e-4070c87612b1" method="POST">
          <div className="form-container display-col ">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to receive email communications from DeFi</p>
          </div>
        </form>
      </div>
    </div>
  );
};
