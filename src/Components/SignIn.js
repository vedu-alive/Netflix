import React, { useRef } from "react";
import "../CSS/SignIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const SignIn = ({ show }) => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredentials) => {
        navigate("/");
        console.log(userCredentials);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <form>
        <h1 className="signin_heading">Log In</h1>
        <input
          type={"email"}
          placeholder="Email"
          className="signin_input"
          ref={email}
        />
        <input
          type={"password"}
          placeholder="PassWord"
          className="signin_input"
          ref={password}
        />
        <button className="btn" onClick={handleSignin}>
          Log In
        </button>
        <div>
          <small className="signin_smalls">
            <div>
              <input type="checkbox" id="remember" />
              <label> Remember me</label>
            </div>
            <a href="https://www.netflix.com/in/LoginHelp">Need help?</a>
          </small>
        </div>
        <div className="p_cont">
          <p className="signin_p">
            New to Netflix? <span onClick={show}> Sign up now.</span>
          </p>
          <p className="signin_p">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span> </span>
            <a href="#">Learn more.</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
