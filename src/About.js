import React, { useEffect, useState } from "react";
import Row, { base_url } from "./Row";
import { useLocation } from "react-router-dom";
import "./About.css";
import starImage from "./assets/star.png";
import requests from "./Request";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import YouTube from "react-youtube";
import axios from "axios";

function About() {
  const location = useLocation();
  const movie = location.state;

  const [trailer_KEY, setTrailerKey] = useState("");
  const [isPlayed, setIsPlayed] = useState(false);

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "79a6a34938acdc64b96e101deb960a43";

  const requestMovies = [
    requests.fetchTrending,
    requests.fetchTopRated,
    requests.fetchActionMovies,
    requests.fetchComedyMovies,
    requests.fetchHorrorMovies,
    requests.fetchDocumantaries,
  ];

  const opts = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  const renderTrailer = async () => {
    let videoData = await axios
      .get(
        `${API_URL}/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`
      )
      .catch((error) => console.log(error));

    let finalTrailer = videoData.data.videos.results.find(
      (trailer_name) => trailer_name.name === "Official Trailer"
    );

    {
      isPlayed ? setIsPlayed(false) : setIsPlayed(true);
    }
    setTrailerKey(finalTrailer.key);
  };

  useEffect(() => {
    const navigation = document.querySelector(".navigation");
    navigation.style.background = "transparent";
    navigation.style.boxShadow = "none";
  }, []);

  return (
    <div className="aboutParent">
      <div
        className="about"
        style={{
          backgroundImage: `url(${base_url}${movie.backdrop_path}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="youtubeTrailer">
          {isPlayed ? (
            <YouTube videoId={trailer_KEY} opts={opts} />
          ) : (
            console.log("false")
          )}
        </div>
        <div className="aboutDescription">
          <div className="aboutOverview">
            <h2>{movie?.name || movie?.title || movie?.original_title}</h2>
            <p className="release">
              {movie.first_air_date || movie.release_date}
            </p>
            <div className="reviewStar">
              <img src={starImage} alt="" />
              <p>{movie.vote_average}</p>
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
          <button
            className="playButton"
            style={isPlayed ? { bottom: "5rem" } : { bottom: "0" }}
            onClick={() => renderTrailer()}
          >
            {isPlayed ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <PlayArrowIcon fontSize="medium" />
            )}
          </button>
        </div>
        <div className="fading_banner"></div>
      </div>
      <div className="row_about" onClick={() => setIsPlayed(false)}>
        <Row
          fetchUrl={
            requestMovies[Math.floor(Math.random() * requestMovies.length)]
          }
          title="Recommended"
        />
      </div>
    </div>
  );
}

export default About;
