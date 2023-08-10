import React, { useState, useEffect } from "react";
import requests from "../utils/api";

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(requests.fetchTrending)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log("Error fetching data:", error));
    };
    getData();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h4 style={{ marginLeft: "20px", color: "white" }}>RECENTLY ADDED</h4>
      <div
        className="card-container"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies?.map((movie) => (
          <div className="cards-wrapper">
            <div
              className="card"
              key={movie.id}
              style={{ width: "10rem", borderRadius: "0px", border: "none" }}
            >
              <img
                src={`${base_url}${movie.poster_path}`}
                alt="Card cap"
                style={{ borderRadius: "0px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
