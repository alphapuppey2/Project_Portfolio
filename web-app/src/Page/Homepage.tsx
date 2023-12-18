import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import SideBar from "../component/SideBar";
import Calendar from "../component/Calendar";



function RouteLocs() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}>Route</Route>
                <Route path="/calendar" element={<Calendar />} >Route</Route>
            </Routes>
        </>
    )
};

export default function Homepage() {
    return (
        <div className="animation-ease-in w-full h-screen bg-green-400">
            <SideBar />
            <div className="absolute right-0 pt-5 pl-10 w-10/12 h-full flex flex-row justify-center bg-red-100">
                <RouteLocs />
            </div>

        </div>
    )
}