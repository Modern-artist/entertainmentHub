import "./App.scss";

import Home from "./pages/home/Home";
import FullpgMovie from "./pages/fullpgMovie/FullpgMovie";
import UnderDevelopment from "./pages/underDevelopment/UnderDevelopment";
import {BrowserRouter, Routes, Route } from "react-router-dom";

// import backGrounds from "../src/assets/gokuBg.jpeg";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/underDevelopment" element={<UnderDevelopment />} />
          <Route path="/underDevelopment" element={<UnderDevelopment />} />
          <Route path="/underDevelopment" element={<UnderDevelopment />} />
          <Route path="movie/:id" element={<FullpgMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
