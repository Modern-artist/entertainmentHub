import {React, useEffect, useState} from 'react'
import './moviesSec.scss'
import Card from '../cards/Card';
import { useParams } from "react-router-dom";

const MoviesSec = ({ title = "popular" }) => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  console.log(title);

  }, [type]);

  const getData = () => {
    fetch(
      // `https://api.themoviedb.org/3/movie/${
      //   type ? type : "upcoming"
      // }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      `https://api.themoviedb.org/3/movie/${title}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="MoviesSec">
      <div className="secInfo">
        {/* <h1>{(type ? type : "POPULAR").toUpperCase()}</h1> */}
        <h1>{title.toUpperCase()}</h1>
        <span>View All</span>
      </div>
      <div className="allMovies">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSec