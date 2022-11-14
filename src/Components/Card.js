import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Card.css";
import "../CSS/Row.css";
import YouTube from "react-youtube";
import {
  Done,
  PlayCircleFilledOutlined,
  PlaylistAdd,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import axios from "axios";
import { API_KEY } from "../Requests";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDatabase,
  addToList,
  like,
  selectLikedMovies,
  selectListMovies,
  selectUser,
} from "../features/userSlice";

const Card = ({ title, movie, isLargeRow, base_url }) => {
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  const BASE_URL = "https://api.themoviedb.org/3/";

  const getListMovies = useSelector(selectListMovies);
  const user = useSelector(selectUser);
  const getLikedMovies = useSelector(selectLikedMovies);

  const getVideo = async (id) => {
    await axios
      .get(
        `${BASE_URL}${
          title === "Netflix Originals" ? "tv" : "movie"
        }/${id}?api_key=${API_KEY}&append_to_response=videos`
      )
      .then((data) => {
        setVideo(data.data.videos.results);
      })
      .catch((error) => error.message);
  };

  useEffect(() => {
    getVideo(movie.id);
  }, []);

  const opts = {
    height: isLargeRow ? "185" : "130",
    width: isLargeRow ? "167" : "265",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    navigate("/player", { state: { id: video[0]?.key } });
  };

  const handleLike = () => {
    setIsLike((e) => !e);
    dispatch(
      like({
        movie: movie,
        trailer: video,
      })
    );

    dispatch(
      addToDatabase({
        uid: user.uid,
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        like: getLikedMovies,
      })
    );
  };

  const addToMyList = () => {
    setAdd(true);
    dispatch(
      addToList({
        movie: movie,
        trailer: video,
      })
    );
    dispatch(
      addToDatabase({
        uid: user.uid,
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        list: getListMovies,
      })
    );
  };

  // console.log(getListMovies);
  // console.log(getLikedMovies);
  // console.log(user);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        key={movie.id}
        className={` ${isLargeRow ? "row_posterLarge" : "card_img"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie?.name}
      />

      {isHovered && (
        <div className="hover">
          <div
            className={
              isLargeRow ? "img_video_container_large" : "img_video_container"
            }
          >
            <YouTube
              videoId={video[1]?.key}
              opts={opts}
              className={isLargeRow ? "card_vdo_large" : "card_vdo"}
              onClick={handleClick}
            />
          </div>

          <div className="info_container">
            <small className="name" onClick={handleClick}>
              {" "}
              {movie?.name || movie?.title || movie?.original_title}{" "}
            </small>
            <div className="icons">
              <div className="controls">
                <PlayCircleFilledOutlined
                  title="play"
                  onClick={handleClick}
                  className="vdo_icons"
                />
                <ThumbUp
                  title="Like"
                  className={`${isLike && "like"}`}
                  onClick={handleLike}
                />
                <ThumbDown title="Dislike" />
                {add ? (
                  <Done title="Remove from list" />
                ) : (
                  <PlaylistAdd title="Add to my list" onClick={addToMyList} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
