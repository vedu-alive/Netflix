import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../CSS/Banner.css";
import requests, { API_KEY } from "../Requests";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToList, selectListMovies } from "../features/userSlice";

function Banner() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState("");
  const BASE_URL = "https://api.themoviedb.org/3/";
  const dispatch = useDispatch();
  const myList = useSelector(selectListMovies);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  const vdo = async (id) => {
    const res = await axios
      .get(`${BASE_URL}tv/${id}?api_key=${API_KEY}&append_to_response=videos`)
      .then((data) => setVideo(data.data.videos.results[0].key))
      .catch((error) => error.message);
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n) + " . . ." : string;
  };

  const add = () => {
    dispatch(
      addToList({
        movie: movie,
        trailer: video,
      })
    );
  };

  // console.log(movie);
  vdo(movie?.id);

  // console.log(myList);

  return (
    <header
      className="banner"
      style={{
        background: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <div className="banner_buttons">
          <button
            className="banner_button"
            onClick={() => navigate("/player", { state: { id: video } })}
          >
            Play
          </button>
          <button className="banner_button left" onClick={add}>
            List
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 100)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
