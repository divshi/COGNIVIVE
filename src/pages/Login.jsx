import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "user") navigate("/user-dashboard");
    else if (role === "psychologist") navigate("/psychologist-dashboard");
    else navigate("/psychiatrist-dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="psychologist">Psychologist</option>
        <option value="psychiatrist">Psychiatrist</option>
      </select>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
