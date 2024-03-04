import React, { useState } from 'react';
import { auth, signinInWithGoogle } from "../../components/firebase/firebase.js";
import { createUserWithEmailAndPassword } from 'firebase/auth';

import "./signupstyle.css";
function SignUP() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUPwithEmailPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("USER CREATED successfully");
      console.log(auth)
    } catch (error) {
      console.error("Error creating user:", error.message);
      
    }
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>sign up Here</h3>


        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='button' className='login'onClick={signUPwithEmailPassword} >Sign UP</button>
        <div className="social">
          <button type="button" className="go" onClick={signinInWithGoogle} >Google </button>

          <button type="button" className="fb">Facebook</button>
        </div> 
      </form>

    </div>
  )
}
export default SignUP;
