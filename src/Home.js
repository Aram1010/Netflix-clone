import React, { useEffect } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Request";

function Home() {
  useEffect(() => {
    const navigation = document.querySelector(".navigation");
    navigation.style.background = "#191932";
    navigation.style.boxShadow =
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";
  }, []);

  return (
    <div className="home">
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title=""
        isNetflix={true}
      />
      <Row fetchUrl={requests.fetchTrending} title="Trending Now" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchDocumantaries} title="Documantaries" />
    </div>
  );
}

export default Home;
