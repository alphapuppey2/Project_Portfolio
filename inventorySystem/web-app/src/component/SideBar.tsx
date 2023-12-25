import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IconLinker from "./IconLinker";
import { RiDashboardLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = lazy(()=>import('../Page/Dashboard'));
const Calendar = lazy(()=> import('./Calendar'));



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



const SideBar = () => {
    return (
        <>
            {RouteLocs}
            <div className="fixed z-50 left-0 top-0 h-full  w-[15rem]">
                <IconLinker to={"/dashboard"} Icon={RiDashboardLine}>Dashboard</IconLinker>
                <IconLinker to={"/calendar"} Icon={FaCalendarAlt}>calendar</IconLinker>
            </div>
        </>
    )
}

export default SideBar