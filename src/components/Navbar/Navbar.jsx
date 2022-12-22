import { React, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [search, setSearch] = useState([]);
  return (
    <div className="navbar">
      <div className="navElement">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div className="logo">
            <h2>
              Entertainment{" "}
              <span style={{ color: "#CE1515", fontWeight: "bold" }}>HUB</span>
            </h2>
          </div>
        </Link>
        <div className="navOptions">
          {/* <input type="text"  /> */}
          {/* onSubmit={fetchMovies} */}
          <form className="form">
            <input
              className="searchBar"
              placeholder="search"
              type="text"
              id="search"
              // onChange={(event) => fetchMovies(event.target.value)}
            />
          </form>
          <div className="hamOptions">
            {/* <span>{search}</span> */}
            <RxHamburgerMenu size={"1.6rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
