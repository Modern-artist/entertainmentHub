import React, {useEffect, useState} from "react"
import './cards.scss'
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({movie}) => {
      const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 10)
    }, []) 
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
      // onClick={() => window.location.reload()}
    >
      <div className="movieCards">
        <img
          className="movieCardsImg"
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
          alt=""
        />
        <div className="overGradInfo">
          <div className="cardRatingInfo">
            <div className="topCardInfo">
              <AiFillStar color="gold" size={20} />
              <span>{movie ? movie.vote_average : ""}</span>
            </div>
            <div className="bottomCardInfo">
              <h3>{movie ? movie.original_title : ""}</h3>
              <span>{movie ? movie.release_date : ""}</span>
              <div className="cardBtns">
                <div className="play">
                  <BsFillPlayFill size={24} color="grey" />
                  <span>Watch</span>
                </div>
                <div className="later">
                  <BiMessageSquareAdd size={24} color="grey" />
                  {/* <span>List</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card