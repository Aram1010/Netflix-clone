// import React, { useState } from "react";
// import { useEffect } from "react";
// import axios from "./axios";
// import { base_url } from "./Row";
// import "./Banner.css";
// import { Link } from "react-router-dom";

// function Banner({ title, fetchINFO, state, _state }) {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchINFO);
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length - 1)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, []);

//   const elem = (state ?? [])[0];
//   const elem1 = (state ?? [])[3];
//   const elem2 = (state ?? [])[4];
//   const elem3 = (state ?? [])[1];
//   const elem4 = (state ?? [])[2];

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundImage: `url(
//                   "${base_url}${state != "" ? elem2 : movie?.backdrop_path}"
//               )`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="fading_banner_top"></div>
//       <div className="bannerContent">
//         <h2>{title}</h2>
//         <h1 className="bannerTitle">
//           {state != ""
//             ? elem || elem3 || elem4
//             : movie?.name || movie?.title || movie?.original_title}
//         </h1>
//         <div className="bannerButtons">
//           <button className="banner_button">
//             <Link to="/about" state={_state}>
//               About
//             </Link>
//           </button>
//         </div>

//         <h1 className="bannerDescription">
//           {truncate(state != "" ? elem1 : movie?.overview, 150)}
//         </h1>
//       </div>
//       <div className="fading_banner"></div>
//     </header>
//   ); //elem != "" ? state :
// }

// export default Banner;
