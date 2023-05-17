import React, { useState } from "react";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import AuthButtons from "@/components/AuthButtonsComp";
import ReCAPTCHA from "react-google-recaptcha";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [Number, setNum] = useState("");
  const [Name, setName] = useState("");
  const [LastName, setLastN] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setError("Please verify the reCAPTCHA.");
      return;
    }

    if (!username || !password || !email || !Number || !Name || !LastName) {
      setError("Please fill in all fields.");
      return;
    }

    // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Check phone number format
  const phonePattern = /^\d{8}$/;

  if (!Number.match(phonePattern)) {
    setError("Please enter a valid phone number (XXXXXXXX).");
    return;
  }

    try {
      let userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await signInWithEmailAndPassword(auth, email, password);
      let db = getFirestore();
      let colRef = collection(db, "users");
      const docRef = doc(colRef, userCredentials.user.uid);
      await setDoc(docRef, {
        username: username,
        email: email,
        number: Number,
        firstName: Name,
        lastName: LastName,
      });
      router.push("/home/homescreen");
    } catch (e) {
      console.log(e);
      setError("An error occurred. Please try again.");
    }
  };

  const toggleForm = () => {
    router.push("/auth/Login");
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPass(passwordValue);

    const passwordLength = passwordValue.length;
    const specialCharacterCount =
      (passwordValue.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
    const passwordStrength = passwordLength + (specialCharacterCount > 2 ? 1 : 0);

    setPasswordStrength(passwordStrength);
  };

  const getPasswordSuggestions = () => {
    const passwordStyle = {
      fontFamily:
        "'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    };

    if (passwordStrength === 0) {
      return (
        <span style={{ ...passwordStyle, color: "gray" }}>
          Enter a password
        </span>
      );
    } else if (passwordStrength < 6) {
      return (
        <span style={{ ...passwordStyle, color: "red" }}>
          Password is weak
        </span>
      );
    } else if (passwordStrength < 10) {
      return (
        <span style={{ ...passwordStyle, color: "orange" }}>
          Password is moderate
        </span>
      );
    } else {
      return (
        <span style={{ ...passwordStyle, color: "green" }}>
          Password is strong
        </span>
      );
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="Login-Reg">
      <>
        <div className="LoginContainer">
          <AuthButtons />
          <Navbar />
        </div>
        <div className="LoginRegwrapper">
          <div className="auth-form-container">
            <form className="regform" onSubmit={handleSubmit}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> 
              <br />  
              <h2> Sign-Up </h2>

              <input
                className="Inputs"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="Name"
                placeholder="Name"
                id="Name"
                name="Name"
              />
              <input
                className="Inputs"
                value={LastName}
                onChange={(e) => setLastN(e.target.value)}
                type="LastName"
                placeholder="Last Name"
                id="Last Name"
                name="Last Name"
              />
              <input
                className="Inputs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="username"
                id="username"
                name="username"
              />

              <div className="password-container">
                <input
                  className="Inputs"
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                <div className="password-suggestion">
                  {getPasswordSuggestions()}
                </div>
              </div>

              <input
                className="Inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="mail@example.com"
                id="email"
                name="email"
              />
              <input
                className="Inputs"
                value={Number}
                onChange={(e) => setNum(e.target.value)}
                type="Number"
                placeholder="XXXXXXXX"
                id="Number"
                name="Number"
              />

              <div style={{ marginTop: "15px" }}>
                <ReCAPTCHA
                  sitekey="6LfkQdclAAAAANwmYDcPupslwLU3cvuadhc8oC9x"
                  onChange={handleRecaptchaChange}
                />
              </div>

              <button
                className="Submitbutton"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>

              <button className="togglebutton" onClick={() => toggleForm()}>
                Already have an account? Log in here.
              </button>

              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;