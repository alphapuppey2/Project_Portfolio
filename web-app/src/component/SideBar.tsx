import React from "react";
import IconLinker from "./IconLinker";
import { RiDashboardLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";





const SideBar = () => {
    return (
        <>
            <div className="fixed z-50 left-0 top-0 h-full  w-[15rem]">
                <IconLinker to={"/dashboard"} Icon={RiDashboardLine}>Dashboard</IconLinker>
                <IconLinker to={"/calendar"} Icon={FaCalendarAlt}>calendar</IconLinker>
            </div>
        </>
    )
}

export default SideBar