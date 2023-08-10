import React from "react";
import requests from "../utils/api";
import Card from "../components/Card";

const Movies = () => {
  return (
    <div>
      <Card fetchUrl={requests.fetchTrending} heading={"Trending Now"} />
      <Card fetchUrl={requests.fetchActionMovies} heading={"Action Movies"} />
      <Card fetchUrl={requests.fetchComedyMovies} heading={"Comedy Movies"} />
      <Card fetchUrl={requests.fetchHorrorMovies} heading={"Horror Movies"} />
    </div>
  );
};

export default Movies;
