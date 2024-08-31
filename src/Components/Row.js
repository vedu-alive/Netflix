import React, { useEffect, useState } from "react";
import "../CSS/Row.css";
import axios from "../axios";

import Card from "./Card";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <h2 className="row_title">{title}</h2>
      <div className="row">
        {movies.map(
          (movie, index) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <Card
                title={title}
                id={movie.id}
                movie={movie}
                base_url={base_url}
                isLargeRow={isLargeRow}
                index={index}
                key={movie.id}
              />
            )
        )}
      </div>
    </>
  );
};

export default Row;
