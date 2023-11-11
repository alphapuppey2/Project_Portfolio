import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import Homepage from "./Page/Homepage";

function routesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login linkTo={"/"} />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="App border-box w-screen h-screen p-0 m-0">
      {routesPage()}
    </div>
  );
}

export default App;
