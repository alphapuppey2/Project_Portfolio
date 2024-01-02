import React, { Suspense, lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Page/Login";
import Homepage from "./Page/Homepage";
import Register from "./Page/Register";
import Dashboard from "./Page/Dashboard";
import Calendar from "./component/Calendar";
import RoundSpinner from "./component/Loading/CircleLoad";
import PageNotFound from "./Page/PageNotFound";
import Equipments from "./Page/Equipments";
import EmployeeSheds from "./Page/EmployeeSheds";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
      <Route path="/" element={<Homepage />}>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="employee" element={<EmployeeSheds/>}></Route>
        <Route path="equipment" element={<Equipments/>}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Route>
  )
)

function App() {



  return (
    <div className="App border-box w-screen h-screen flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
