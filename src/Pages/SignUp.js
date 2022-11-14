import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Phone from "../Components/Phone";
import SignIn from "../Components/SignIn";
import SignupFooter from "../Components/SignupFooter";
import SignupRemaining from "../Components/SignupRemaining";
import "../CSS/SignUp.css";
import FirebaseUI from "../FirebaseUI";

const SignUp = () => {
  const [signIn, setSignIn] = useState(false);
  const [getStart, setGetStart] = useState(false);
  const [phone, setPhone] = useState(false);

  const cancle = () => {
    setGetStart((prev) => !prev);
  };

  const canclePhone = () => {
    // console.log("canclePhone Clicked");
    setPhone((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#333" }}>
      <div className="signup">
        <header className="signup_header">
          <NavLink to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="netflix-logo"
              className="header_logo"
            />
          </NavLink>
          {!phone && !getStart && !signIn && (
            <button
              className="signup_btn"
              onClick={() => setSignIn((prev) => !prev)}
            >
              Log In
            </button>
          )}
        </header>
        <div className="fade-gradient">
          {signIn && (
            <SignIn
              show={() => {
                setSignIn((prev) => !prev);
              }}
            />
          )}
          {!signIn && !getStart && !phone && (
            <div className={`signup_description ${!getStart && "hide"}`}>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="signup_startedContainer">
                <button
                  className="signup_search"
                  onClick={() => setPhone((prev) => !prev)}
                >
                  Phone
                </button>
                <button
                  className="signup_search"
                  onClick={() => setGetStart((prev) => !prev)}
                >
                  {"Email"}
                </button>
              </div>
            </div>
          )}

          {getStart && <FirebaseUI cancle={cancle} />}
          {phone && <Phone canclePhone={canclePhone} />}
        </div>
      </div>
      <SignupRemaining />
      <SignupFooter />
    </div>
  );
};

export default SignUp;
