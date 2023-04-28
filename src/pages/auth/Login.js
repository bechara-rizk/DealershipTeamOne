import React, { useState } from "react";
import { Register } from "./Register";
import Footer from '@/components/Footer';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentForm, setCurrentForm] = useState("login");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password)
      router.push('/home/homescreen')
    } catch (e) {
      console.log(e)
    }
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