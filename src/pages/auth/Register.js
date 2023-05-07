import React, { useState } from "react"
import { Login } from "./Login";
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { useRouter } from 'next/router';
import Navbar from "@/components/Navbar";

export const Register=(props)=>{
    const [username, setUsername]= useState(''); // for updating state (is initially empty)
    const [password, setPass]= useState(''); //for updating state (is initially empty)
    const [email, setEmail]= useState(''); // for updating state (is initially empty)
    const [Number, setNum]= useState(''); //for updating state (is initially empty)
    const [Name, setName]= useState(''); // for updating state (is initially empty)
    const [LastName, setLastN]= useState(''); //for updating state (is initially empty)
    const router = useRouter();


    const handleSubmit= async (e) => { //to capture the user input when submitted
        e.preventDefault(); //to prevent losing state when page reloaded

      try {
        let userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        await signInWithEmailAndPassword(auth, email, password)
        let db = getFirestore()
        let colRef = collection(db, "users")
        const docRef = doc(colRef, userCredentials.user.uid)
        await setDoc(docRef, {
          username: username,
          email: email,
          number: Number,
          firstName: Name,
          lastName: LastName
        })
        router.push('/home/homescreen')
      } catch (e) {
        console.log(e)
      }
    } 

    const toggleForm = () => {
      router.push('/auth/Login')
      };
    
    return(
        <div className="Login-Reg">
          <>
        <div className='LoginContainer'>
      <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
      </div>
      <Navbar/>
      </div>
        <div className= "LoginRegwrapper">
            <div className="auth-form-container">
            <form className="regform" onSubmit= {handleSubmit}>  
                <h2> Sign-Up </h2>

                    <input className="Inputs" value={Name} onChange={(e)=> setName(e.target.value)} type= 'Name' placeholder="Name" id="Name" name="Name"/>
                    <input className="Inputs" value={LastName} onChange={(e)=> setLastN(e.target.value)} type= 'LastName' placeholder="Last Name" id="Last Name" name="Last Name"/>
                    <input className="Inputs" value={username} onChange={(e)=> setUsername(e.target.value)} type= 'username' placeholder="username" id="username" name="username"/>
                    <input  className="Inputs" value={password} onChange={(e)=> setPass(e.target.value)} type= 'password' placeholder="Password" id="password" name="password"/>
                    <input className="Inputs" value={email} onChange={(e)=> setEmail(e.target.value)} type= 'email' placeholder="mail@example.com" id="email" name="email"/>
                    <input className="Inputs" value={Number} onChange={(e)=> setNum(e.target.value)} type= 'Number' placeholder="+961 " id="Number" name="Number"/>
                    
            
                </form>
                <button className="Submitbutton" type="submit" onClick={handleSubmit}>Sign Up</button>
            
            <button className="togglebutton" onClick={() => toggleForm()}>
            Already have an account? Log in here.
          </button>
        </div>
      </div>
      </>
  </div>
);
}
export default Register;