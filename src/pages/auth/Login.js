import React, { useState } from "react";
import { Register } from "./Register";
import Footer from '@/components/Footer';

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
    <section className="Loginsec">
    <div className="Login-Reg">
      {currentForm === "login" ? (
        <div className="LoginRegwrapper">
          <div className="auth-form-container">
           
            <form className="loginform" onSubmit={handleSubmit}>
            <h2> Login </h2>
              <input className="Inputs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                id="username"
                name="username"
              />
              <input className="Inputs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              
            <button className="Submitbutton" type="submit">Login</button>
            <button className="togglebutton" onClick={() => toggleForm("register")}>Don't have an account? Sign up here.</button>
            
            </form>
            
            
            <Footer/>
            
            </div>
          </div>
        

      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
    
    </section>
    
  );
};
export default Login;