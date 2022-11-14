import React from "react";
import "../CSS/SignupCard.css";

const SignupCard = ({ title, content, img, vdo, type }) => {
  return (
    <div className="signupcard">
      <div className="title_content_container">
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
      </div>

      <div className="img_vdo_container">
        <img className="signupcard_img" src={img} alt="img" />
        {type === "TV" && (
          <video autoPlay loop muted className="signupcard_video">
            <source src={vdo} type="video/mp4" />
          </video>
        )}
        {type === "Watch" && (
          <video autoPlay loop muted className="signupcard_watch_video">
            <source src={vdo} type="video/mp4" />
          </video>
        )}
        {type === "download" && (
          <div className="download_gif">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              className="starnger_poster"
              alt="img"
            />
            <p>
              Stranger Things
              <span
                style={{
                  display: "block",
                  paddingLeft: "1rem",
                  color: "blue",
                }}
              >
                Downloading . . .
              </span>
            </p>
            <img src={vdo} alt="gif" className="download_img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupCard;
