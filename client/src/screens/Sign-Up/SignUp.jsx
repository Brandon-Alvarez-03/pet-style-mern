import React, { useState, useEffect } from 'react'
import "./SignUp.css"

function SignUp() {


const [popupStyle, showPopup] = useState("hide")

const popup = () => {
    showPopup("signup-popup")
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
        <h1>Sign Up!</h1>
        <input type="text" placeholder="Set Username" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />

        <div className="signup-btn" onClick={popup}>Confirm</div>


        <div className="alt-signup">
       
           
        </div>

        <div className={popupStyle}>
          <h3>Welcome, Member Name!</h3>
            <p>You will remain logged in the next time you visit!</p>
        </div>
        
      </div>
      </div>
)
}

export default SignUp