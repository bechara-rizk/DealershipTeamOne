import React, { useState } from "react";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const toggleForm = () => {
      router.push('/auth/Register')
    };

  return (
    
    <div className="Login-Reg">
      <div className="LoginHeader">
      <img src='/images/logo.jpg' alt='logo' className='LoginLogo'/>
      <Navbar />
      </div>
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
            <button className="togglebutton" onClick={() => toggleForm()}>Don't have an account? Sign up here.</button>
            
            </form>
            </div>
          </div>
      
    </div>
    
    
    
  );
};
export default Login;