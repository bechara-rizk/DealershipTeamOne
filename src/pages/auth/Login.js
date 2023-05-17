import React, { useState } from "react";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
import ReCAPTCHA from "react-google-recaptcha";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null); // <-- Add this line
  const router = useRouter();

  const [error, setError] = useState("");

  const onChange = (value) => {
    setRecaptchaValue(value); // <-- Add this line
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check recaptchaValue before signing in
    if (!recaptchaValue) {
      setError('Please verify the reCAPTCHA.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, username, password);
      router.push('/home/homescreen');
    } catch (e) {
      console.log(e);
      const errorCode = e.code;
      const errorMessage = e.message;
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        setError('Incorrect username or password');
      } else {
        setError('Invalid Input!');
      }
    }
  };

  const toggleForm = () => {
    router.push('/auth/Register');
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
                placeholder="Email"
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
              <ReCAPTCHA
                sitekey="6LfkQdclAAAAANwmYDcPupslwLU3cvuadhc8oC9x"
                onChange={onChange}
              />,
            <button className="Submitbutton" type="submit">Login</button>
            <button className="togglebutton" onClick={() => toggleForm()}>Don't have an account? Sign up here.</button>
            
            </form>
            {error && <div className="error">{error}</div>}
            </div>
          </div>
      
    </div>
    
    
    
  );
};
export default Login;