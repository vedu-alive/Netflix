import React, { useState } from "react";
import vdo from "./vdo/vdo.mp4";

const PosterCard = ({
  handleClick,
  base_url,
  isLargeRow,
  poster_path,
  backdrop_path,
  name,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="row_posters">
      <img
        onMouseEnter={() => setIsHovered((prev) => !prev)}
        onMouseLeave={() => setIsHovered((prev) => !prev)}
        onClick={handleClick}
        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
        src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
        alt={name}
      />
      {isHovered && (
        <div className="row_video_container">
          <video src={vdo} autoPlay loop controls className="row_vdo"></video>
        </div>
      )}
    </div>
  );
};

export default PosterCard;
