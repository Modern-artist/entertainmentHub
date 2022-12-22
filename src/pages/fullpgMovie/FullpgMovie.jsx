import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./fullpgMovie.scss";
import Watchnowbtn from "../../components/buttons/Watchnowbtn";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import MoviesSec from "../../components/moviesSec/MoviesSec";

const FullpgMovie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  const title = id + "/similar";
  const recom = id + "/recommendations";
  const lists = id + "/credits";

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <>
      <Navbar />
      <div className="FullpgMovie">
        <div className="FPMhead">
          <h1>{currentMovieDetail ? currentMovieDetail.original_title : ""}</h1>
          <h3>{currentMovieDetail ? currentMovieDetail.tagline : ""}</h3>
          <div className="someInfo">
            <AiFillStar color="gold" size={20} />
            <span>
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}
            </span>
            <span>
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </span>
            <span className="allGenres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </span>
          </div>
          <p>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
          <div className="playAddBtns">
            <div className="watchbtn">
              <AiFillPlayCircle size={48} />
              {/* <span>Watch now</span> */}
              {currentMovieDetail && currentMovieDetail.homepage && (
                <a
                  href={currentMovieDetail.homepage}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span className="movie__homeButton movie__Button">
                      Watch now{" "}
                      {/* <i className="newTab fas fa-external-link-alt"></i> */}
                    </span>
                  </p>
                </a>
              )}
            </div>
            <button className="laterbtn">
              {/* <AiFillPlayCircle size={48} /> */}
              <IoIosAddCircleOutline size={56} />
              <span>Watch Later</span>
            </button>
          </div>
        </div>
        <div className="FPMabout">
          <span>
            <b>Director :</b> Christopfer Nolan
          </span>
          <span>
            <b>Stars :</b> Christian bale, Heath ledger, Aaron Eckhart.
          </span>
          <span>
            <b>Prequial :</b> Batman: The Beginning.
          </span>
          <span>
            <b>Sequial :</b> The Dark Night Rises.
          </span>
        </div>
        <div className="backImg">
          <div className="grad"></div>
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
          />
        </div>
      </div>
      {/* <MoviesSec title={lists} /> */}
      <MoviesSec title={recom} />
      <MoviesSec title={title} />
    </>
  );
};

export default FullpgMovie;
