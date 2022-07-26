import React, { useCallback } from "react";
import { useState, useEffect, createContext } from "react";
import axios from "./axios";
import "./Row.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import About from "./About";

export const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ fetchUrl, title, isNetflix }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* row posters */}
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`${isNetflix ? "row_parent_netflix" : "row_parent"}`}
          >
            <Link to="/about" state={movie}>
              <img
                className={`${isNetflix ? "row_poster_netflix" : "row_poster"}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            </Link>
            <p>{movie?.title || movie?.name || movie?.original_title}</p>
            <p className="vote">{movie.vote_average.toFixed(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
