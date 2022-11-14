import React from "react";
import requests from "../Requests";
import Row from "./Row";

const CardSlider = () => {
  return (
    <div>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Netflix Documentries"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default CardSlider;
