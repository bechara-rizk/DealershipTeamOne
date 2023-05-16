// import React, { useState } from "react"
// import { auth } from '../../../firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
// import { useRouter } from 'next/router';
// import Navbar from "@/components/Navbar";

// export const Register=(props)=>{
//     const [username, setUsername]= useState(''); // for updating state (is initially empty)
//     const [password, setPass]= useState(''); //for updating state (is initially empty)
//     const [email, setEmail]= useState(''); // for updating state (is initially empty)
//     const [Number, setNum]= useState(''); //for updating state (is initially empty)
//     const [Name, setName]= useState(''); // for updating state (is initially empty)
//     const [LastName, setLastN]= useState(''); //for updating state (is initially empty)
//     const router = useRouter();


//     const handleSubmit= async (e) => { //to capture the user input when submitted
//         e.preventDefault(); //to prevent losing state when page reloaded

//       try {
//         let userCredentials = await createUserWithEmailAndPassword(auth, email, password)
//         await signInWithEmailAndPassword(auth, email, password)
//         let db = getFirestore()
//         let colRef = collection(db, "users")
//         const docRef = doc(colRef, userCredentials.user.uid)
//         await setDoc(docRef, {
//           username: username,
//           email: email,
//           number: Number,
//           firstName: Name,
//           lastName: LastName
//         })
//         router.push('/home/homescreen')
//       } catch (e) {
//         console.log(e)
//       }
//     } 

//     const toggleForm = () => {
//       router.push('/auth/Login')
//       };
    
//     return(
//         <div className="Login-Reg">
//           <>
//         <div className='LoginContainer'>
//       <div className='authButtons'>
//         <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
//       </div>
//       <Navbar/>
//       </div>
//         <div className= "LoginRegwrapper">
//             <div className="auth-form-container">
//             <form className="regform" onSubmit= {handleSubmit}>  
//                 <h2> Sign-Up </h2>

//                     <input className="Inputs" value={Name} onChange={(e)=> setName(e.target.value)} type= 'Name' placeholder="Name" id="Name" name="Name"/>
//                     <input className="Inputs" value={LastName} onChange={(e)=> setLastN(e.target.value)} type= 'LastName' placeholder="Last Name" id="Last Name" name="Last Name"/>
//                     <input className="Inputs" value={username} onChange={(e)=> setUsername(e.target.value)} type= 'username' placeholder="username" id="username" name="username"/>
//                     <input  className="Inputs" value={password} onChange={(e)=> setPass(e.target.value)} type= 'password' placeholder="Password" id="password" name="password"/>
//                     <input className="Inputs" value={email} onChange={(e)=> setEmail(e.target.value)} type= 'email' placeholder="mail@example.com" id="email" name="email"/>
//                     <input className="Inputs" value={Number} onChange={(e)=> setNum(e.target.value)} type= 'Number' placeholder="+961 " id="Number" name="Number"/>
                    
            
//                 </form>
//                 <button className="Submitbutton" type="submit" onClick={handleSubmit}>Sign Up</button>
            
//             <button className="togglebutton" onClick={() => toggleForm()}>
//             Already have an account? Log in here.
//           </button>
//         </div>
//       </div>
//       </>
//   </div>
// );
// }
// export default Register;

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

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [Number, setNum] = useState("");
  const [Name, setName] = useState("");
  const [LastName, setLastN] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // Password strength value
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }
  };

  const toggleForm = () => {
    router.push("/auth/Login");
  };
//to check for length anddd special characters
// Calculate the password strength based on length and special characters
const handlePasswordChange = (e) => {
  const passwordValue = e.target.value;
  setPass(passwordValue);

  const passwordLength = passwordValue.length;
  const specialCharacterCount = (passwordValue.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
  const passwordStrength = passwordLength + (specialCharacterCount > 2 ? 1 : 0);

  setPasswordStrength(passwordStrength);
};

// Password suggestion based on strength
const getPasswordSuggestions = () => {
  const passwordStyle = {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  };

  const regex = /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  //implement password regex

  if (passwordStrength === 0) {
    return <span style={{ ...passwordStyle, color: "gray" }}>Enter a password</span>;
  } else if (passwordStrength < 6) {
    return <span style={{ ...passwordStyle, color: "red" }}>Password is weak</span>;
  } else if (passwordStrength < 10) {
    return <span style={{ ...passwordStyle, color: "orange" }}>Password is moderate</span>;
  } else {
    return <span style={{ ...passwordStyle, color: "green" }}>Password is strong</span>;
  }
};


  return (
    <div className="Login-Reg">
      <>
        <div className="LoginContainer">
        <div className="authButtons" >
          <img src="/images/logo.jpg" alt="logo" className="homepageLogo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
        </div>
          <Navbar />
        </div>
        <div className="LoginRegwrapper">
  <div className="auth-form-container">
    <form className="regform" onSubmit={handleSubmit}>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2> Sign-Up </h2>

      <input className="Inputs" value={Name} onChange={(e) => setName(e.target.value)} type='Name' placeholder="Name" id="Name" name="Name" />
      <input className="Inputs" value={LastName} onChange={(e) => setLastN(e.target.value)} type='LastName' placeholder="Last Name" id="Last Name" name="Last Name" />
      <input className="Inputs" value={username} onChange={(e) => setUsername(e.target.value)} type='username' placeholder="username" id="username" name="username" />
      
      <div className="password-container">
        <input className="Inputs" value={password} onChange={handlePasswordChange} type='password' placeholder="Password" id="password" name="password" />
        <div className="password-suggestion">
          {getPasswordSuggestions()}
        </div>
      </div>
      
      <input className="Inputs" value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="mail@example.com" id="email" name="email" />
      <input className="Inputs" value={Number} onChange={(e) => setNum(e.target.value)} type='Number' placeholder="+961 " id="Number" name="Number" />
    
      <button className="Submitbutton" type="submit" onClick={handleSubmit}>Sign Up</button>
      <button className="togglebutton" onClick={() => toggleForm()}>
        Already have an account? Log in here.
      </button>
    </form>
  </div>
</div>
       </>
   </div>
 );
 }
 export default Register;