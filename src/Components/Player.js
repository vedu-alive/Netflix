import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import vdo from "./vdo/vdo.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/Player.css";
import YouTube from "react-youtube";

const Player = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const opts = {
    height: "755",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="player">
      <div className="back">
        <ArrowBackIcon onClick={() => navigate(-1)} className="player_btn" />
      </div>
      <YouTube videoId={id} opts={opts} />
    </div>
  );
};

export default Player;
