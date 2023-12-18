import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import Login from "./Page/Login";
// import Homepage from "./Page/Homepage";

const Login = lazy(() => import('./Page/Login')); 
const Homepage = lazy(() => import('./Page/Homepage')); 


function routesPage() {
  return (

    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

function App() {
  // const redirect = useNavigate();
  return (
    <div className="App border-box w-screen h-screen flex justify-center items-center">
      {/* {routesPage()} */}
      <Suspense fallback={<Login />}>
        <Homepage />
      </Suspense>

    </div>
  );
}

export default App;
