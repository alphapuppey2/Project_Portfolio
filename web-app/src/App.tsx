import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import Homepage from "./Page/Homepage";
import Calendar from "./component/Calendar";


function routesPage() {
  return (

    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="App border-box w-screen h-screen flex justify-center items-center">
      {routesPage()}
    </div>
  );
}

export default App;
