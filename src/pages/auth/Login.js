import React, { useState } from "react";
import { Register } from "./Register";


export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentForm, setCurrentForm] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Login">
      {currentForm === "login" ? (
        <div className="Loginwrapper">
          <div className="auth-form-container">
            <h2> Login </h2>
            <form className="loginform" onSubmit={handleSubmit}>
              <input className="UsernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                id="username"
                name="username"
              />
              <input className="PassInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              
              
            </form>
            <div className="Loginbuttons">
            <button className="Submitbutton" type="submit">Login</button>
            <button className="togglebutton" onClick={() => toggleForm("register")}>
              Don't have an account? Sign up here.
            </button>
            </div>
          </div>
        </div>

      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
export default Login;