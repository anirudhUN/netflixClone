import React from "react";
import requests from "../utils/api";
import Card from "../components/Card";

const TvShows = () => {
  return (
    <div>
      <Card fetchUrl={requests.fetchTvSeries} heading={"TV Series"} />
      <Card fetchUrl={requests.fetchDocumentaries} heading={"Documentaries"} />
      <Card fetchUrl={requests.fetchTvPopular} heading={"Popular"} />
      <Card fetchUrl={requests.fetchTvAiringToday} heading={"Airing Today"} />
    </div>
  );
};

export default TvShows;
