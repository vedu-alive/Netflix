import React, { useEffect } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./CSS/firebase.css";
import firebase from "firebase/compat/app";
import { auth } from "./Firebase";

const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: "/",
};

const FirebaseUI = ({ cancle }) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(".firebase_auth_ui", uiConfig);
  }, []);

  return (
    <div className="f">
      <div className="firebase_auth_ui custom"></div>
      <button className="cancle" onClick={cancle}>
        <HighlightOffIcon style={{ width: "100%", height: "100%" }} />
      </button>
    </div>
  );
};

export default FirebaseUI;
