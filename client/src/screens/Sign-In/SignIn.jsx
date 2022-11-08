import React, { useState, useEffect } from 'react'
import "./SignIn.css"

function SignIn() {


const [popupStyle, showPopup] = useState("hide")

const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
}

const onSuccess = e => {
    alert("User signed in")
    console.log(e)
}

const onFailure = e => {
    alert("User sign in Failed")
    console.log(e)
}


  return (
    <div className='page'>
    <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <div className="login-btn" onClick={popup}>Login</div>


        <div className="alt-login">
       
           
        </div>

        <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
        </div>
        
      </div>
      </div>
)
}

export default SignIn