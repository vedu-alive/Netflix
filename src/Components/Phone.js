import React, { useRef, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { auth } from "../Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "../CSS/Phone.css";
import { useNavigate } from "react-router-dom";

auth.useDeviceLanguage();
const generateCaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha_verifier",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved; allow signInWithPhoneNumber;
        // console.log("captcha varified!");
      },
    },
    auth
  );
};

const Phone = ({ canclePhone }) => {
  const phoneRef = useRef(null);
  const otpRef = useRef(null);
  const countryCode = "+91";
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);

  const requestOtp = (e) => {
    e.preventDefault();

    if (phoneRef.current.value.length === 10) {
      setExpand((prev) => !prev);
      generateCaptcha();
      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = countryCode + phoneRef.current.value;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          alert("OTP Sent");
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    // console.log("otp verify");
    if (otpRef.current.value.length === 6) {
      setExpand((prev) => !prev);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otpRef.current.value)
        .then((result) => {
          const user = result.user;
          navigate("/");
          // console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="phone">
      <form>
        <h1 className="signin_heading">Sign In</h1>
        <input
          type={"tel"}
          placeholder="+91"
          className="signin_input"
          ref={phoneRef}
        />
        {expand && (
          <input
            type={"number"}
            placeholder="OTP"
            className="signin_input"
            ref={otpRef}
          />
        )}
        {!expand && (
          <button className="btn" onClick={requestOtp}>
            Request OTP
          </button>
        )}
        {expand && (
          <button className="btn" onClick={verifyOtp} id="submit">
            Submit OTP
          </button>
        )}

        <div id="recaptcha_verifier"></div>
      </form>
      <button onClick={canclePhone} className="cancle cross">
        <HighlightOffIcon style={{ width: "100%", height: "100%" }} />
      </button>
    </div>
  );
};

export default Phone;
