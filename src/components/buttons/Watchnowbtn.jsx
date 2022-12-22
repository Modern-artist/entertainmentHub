import React from "react";
import "./Watchnowbtn.scss";
import { BsFillPlayFill } from "react-icons/bs";
const Watchnowbtn = () => {
  return (
    <div className="Watchnowbtn">
      <BsFillPlayFill  size={40} color="grey"/>
      <span>Watch Now!</span>
    </div>
  );
};

export default Watchnowbtn;
