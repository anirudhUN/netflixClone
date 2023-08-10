import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Card from "../components/Card";
import requests from "../utils/api";
import "../styles/moviePLayer.css";

const MoviePlayer = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState();
  const [playerUrl, setPlayerUrl] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=243e4c829c03af820debe020b717349b`
      )
        .then((response) => response.json())
        .then((data) => setTrailer(data))
        .catch((error) => console.log("Error fetching data:", error));
    };
    getData();
  }, [id]);

  // useEffect(() => {
  const handleUrl = () => {
    if (trailer) {
      const movieName =
        trailer?.title || trailer?.name || trailer?.original_name;
      console.log(trailer);
      movieTrailer(movieName || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setPlayerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  handleUrl();
  // }, [trailer]);

  const opts = {
    height: "448px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayClick = () => {
    setShowPlayer(true);
  };
  const handleBackClick = () => {
    setShowPlayer(false);
  };

  return (
    <div>
      {showPlayer ? (
        <div className="youtube-player">
          <YouTube videoId={playerUrl} opts={opts} />
          <button onClick={handleBackClick} className="banner_button">
            Back
          </button>
        </div>
      ) : (
        <div
          className="ban"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${trailer?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="ban_contents">
            <strong>
              <h1 className="ban_title">
                {trailer?.title || trailer?.name || trailer?.original_name}
              </h1>
            </strong>
            <div className="banner_buttons">
              <button className="banner_button" onClick={handlePlayClick}>
                Play
              </button>
            </div>
            <h1 className="banner_description">{trailer?.overview}</h1>
          </div>
          <div className="banner_footer"></div>
        </div>
      )}

      <Card fetchUrl={requests.fetchTrending} heading={"Recommended For You"} />
    </div>
  );
};

export default MoviePlayer;
