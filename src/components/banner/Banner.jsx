import { React, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./banner.scss";
import Watchnowbtn from "../buttons/Watchnowbtn";
import { BsFillPlayFill } from "react-icons/bs";
import Watchlater from "../buttons/Watchlater";
import imdbLogo from "../../assets/imdblogo.png";

const Banner = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);

  return (
    <div>
      {/* <div className="posterImage">
        <div className="grad"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`}
        />
      </div>
      <div className="posterImage__overlay">
        <div className="posterImage__title">
          {movie ? movie.original_title : ""}
        </div>
        <div className="posterImage__runtime">
          {movie ? movie.release_date : ""}
          <span className="posterImage__rating">
            {movie ? movie.vote_average : ""}
            <i className="fas fa-star" />{" "}
          </span>
        </div>
        <div className="posterImage__description">
          {movie ? movie.overview : ""}
        </div>
      </div> */}
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popular.map((movie) => (
          <div className="bannerHolder">
            <div className="banner">
              <div className="aboutBannerMovie">
                <h1>{movie ? movie.original_title : ""}</h1>
                <p>{movie ? movie.overview : ""}</p>
                <div className="bannerRating">
                  <img src={imdbLogo} alt="" />
                  <span>{movie ? movie.vote_average : ""}</span>
                </div>
                <div className="bannerBtns">
                  <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              ><div className="Watchnowbtn">
                    <BsFillPlayFill size={40} color="grey" />
                    <span>Watch Now!</span>
                  </div>
                  </Link>
                  
                  <Watchlater />
                </div>
              </div>
              <div className="imgBannerMovie">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
            </div>
            {/* <div className="bannerGradiant"></div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
