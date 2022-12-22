// import "./Routes.scss";

import Home from "./pages/home/Home";
import FullpgMovie from "./pages/fullpgMovie/FullpgMovie";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import backGrounds from "../src/assets/gokuBg.jpeg";

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutmovie" element={<FullpgMovie />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllRoutes;
