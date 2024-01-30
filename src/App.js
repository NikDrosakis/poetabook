import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Freepost from "./pages/Freepost";
import PostR from "./pages/PostR";
import PostL from "./pages/PostL";
import Archive from "./pages/Archive";
const App=()=> {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/freepost" element={<Freepost />} />
      <Route path="/portr" element={<PostR />} />
      <Route path="/postl" element={<PostL />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}

export default App;