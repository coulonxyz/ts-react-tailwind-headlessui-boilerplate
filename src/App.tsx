import "./App.css";

import React from "react";

import Options from "./components/options";
import logo from "./logo.svg";

export default function App() {
  return (
    <>
      <div className="absolute top-0 right-0 ">
        <Options />
      </div>
      <h1 className="bg-red-100 text-3xl font-bold text-center p-8">
        My React App
      </h1>
      <section>
        <img className="mx-auto p-24" src={logo} alt="logo" width="800" />
      </section>
    </>
  );
}
