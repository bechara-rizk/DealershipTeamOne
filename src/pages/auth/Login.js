import React, { useState } from "react";


export default function Login (props){
    const [username, setUsername]= useState(''); // for updating state (is initially empty)
    const [password, setPass]= useState(''); //for updating state (is initially empty)
    const handleSubmit=(e) => { //to capture the user input when submitted
       
        e.preventDefault(); //to prevent losing state when page reloaded
        console.log(username);
    } 
    
    return(
        //to associate the form with the handleSubmit button use onSubmit 
        <div className= "wrapper">
            <div className= "auth-form-container">
                <h2> Login </h2> 

                <form className="loginform" onSubmit= {handleSubmit}>    
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} type= 'username' placeholder="username" id="username" name="username"/>
                    <input value={password} onChange={(e)=> setPass(e.target.value)} type= 'password' placeholder="Password" id="password" name="password"/>
                 
                    <button1 type="log in">Login</button1>
        
                </form>
         
            <button onClick={()=>props.onFormSwitch('register')}> Don't have an account? Sign up here.</button>
    
            </div>
            </div>
    ) }
