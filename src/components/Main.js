// Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Posts from "./Posts";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/posts" element={<Posts />}>
        </Route>
      </Routes>
    </>
  );
}

export default Main;
