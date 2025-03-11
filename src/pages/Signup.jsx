import React from "react";
import "../index.css";

const Signup = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
