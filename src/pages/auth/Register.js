import React, { useState } from "react"

export default function Register (props){
    const [username, setUsername]= useState(''); // for updating state (is initially empty)
    const [password, setPass]= useState(''); //for updating state (is initially empty)
    const [email, setEmail]= useState(''); // for updating state (is initially empty)
    const [Number, setNum]= useState(''); //for updating state (is initially empty)
    const [Name, setName]= useState(''); // for updating state (is initially empty)
    const [LastName, setLastN]= useState(''); //for updating state (is initially empty)
    const handleSubmit= (e) => { //to capture the user input when submitted
       
        e.preventDefault(); //to prevent losing state when page reloaded
        console.log(username);
    } 
    
    return(
        <div className= "wrapper">
            <div className="auth-form-container">
            <form className="regform" onSubmit= {handleSubmit}>  
                <h2> Sign-Up </h2>

                    <input value={Name} onChange={(e)=> setName(e.target.value)} type= 'Name' placeholder="Name" id="Name" name="Name"/>
                    <input value={LastName} onChange={(e)=> setLastN(e.target.value)} type= 'LastName' placeholder="Last Name" id="Last Name" name="Last Name"/>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} type= 'username' placeholder="username" id="username" name="username"/>
                    <input value={password} onChange={(e)=> setPass(e.target.value)} type= 'password' placeholder="Password" id="password" name="password"/>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type= 'email' placeholder="mail@example.com" id="email" name="email"/>
                    <input value={Number} onChange={(e)=> setNum(e.target.value)} type= 'Number' placeholder="+961 " id="Number" name="Number"/>
                    

                    
            
                </form>
                <button1 type="submit">Sign Up</button1>
                <button onClick= {() => props.onFormSwitch('login')}> Already have an account? Log in here.</button>
            </div>
            </div>
    )
}