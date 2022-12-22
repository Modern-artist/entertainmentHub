import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./navDown.scss";

const NavDown = () => {
  return (
    <div className="NavDown">
      <Link className="navEle">
        <Link
          className="all"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          All
        </Link>
        <Link
          className="Movies"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          Movies
        </Link>
        <Link
          className="Web Series"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          Web Series
        </Link>
        <Link
          className="anime"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          Anime
        </Link>
        <div className="searchBar"
        >
          Search
          <BsSearch />
        </div>
      </Link>
    </div>
  );
}

export default NavDown