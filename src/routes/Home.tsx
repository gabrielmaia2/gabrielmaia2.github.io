import React from "react";
import Navbar from "../components/Navbar";
import useTitleCustom from "../hooks/useTitleCustom";
import About from "./About";

export default function Home() {
  useTitleCustom("Home");

  return (
    <div className="">
      <Navbar />
      <h1 className="m-4 text-center">My portfolio</h1>
      <About />
    </div>
  );
}
