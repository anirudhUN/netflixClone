import React from "react";
import Banner from "../components/Banner";
import "../styles/App.css";
import Card from "../components/Card";
import requests from "../utils/api";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner fetchUrl={requests.fetchTopRated} />
      </div>
      <Card fetchUrl={requests.fetchTrending} heading={"Trending Now"} />
      <Card
        fetchUrl={requests.fetchNetflixOriginals}
        heading={"Netflix Originals"}
      />
      <Card fetchUrl={requests.fetchActionMovies} heading={"Action Movies"} />
      <Card fetchUrl={requests.fetchComedyMovies} heading={"Comedy Movies"} />
      <Card fetchUrl={requests.fetchDocumentaries} heading={"Documentaries"} />
      <Card fetchUrl={requests.fetchHorrorMovies} heading={"Horror Movies"} />
    </div>
  );
};

export default Home;
