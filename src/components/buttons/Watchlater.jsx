import React from "react";
import "./Watchnowbtn.scss";
import { BiMessageSquareAdd } from "react-icons/bi";


const Watchlater = () => {
  return (
    <div className="Watchlater">
      <BiMessageSquareAdd size={30} color="grey"/>
      <span>Watch List</span>
    </div>
  );
};

export default Watchlater;
