import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import Homepage from "./Page/Homepage";
import Register from "./Page/Register";

// const Login = lazy(() => import('./Page/Login')); 
// const Homepage = lazy(() => import('./Page/Homepage'));
// const Register = lazy(() => import('./Page/Register'));


function routesPage() {
  return (

    <Router>
      <Routes>
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

function App() {
  // const redirect = useNavigate();
  return (
    <div className="App border-box w-screen h-screen flex justify-center items-center">
      {routesPage()}
    </div>
  );
}

export default App;
