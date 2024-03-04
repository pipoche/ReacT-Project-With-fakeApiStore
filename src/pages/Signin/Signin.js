import React, { useState } from 'react';
import { auth, signinInWithGoogle } from "../../components/firebase/firebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';

import "./signinstyle.css";
function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    console.log("you logged in successfully")
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Email or Phone" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className='login' type="button" onClick={signIn}>Log In</button>
        <div class="social">
          <button className="go" onClick={signinInWithGoogle} type="button"><i className="fab fa-google"></i> Google </button>

          <button type="button" className="fb"><i className="fab fa-facebook"></i>  Facebook</button>
        </div>
      </form>

    </div>
  )
}

export default Signin
