import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from "react-router-dom";
import IconLinker from "./IconLinker";
import { RiDashboardLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

import Calendar from "./Calendar";
import Dashboard from "../Page/Dashboard";

//icons
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
import { signOut } from "firebase/auth";
import { auth } from "../configFirebase/firebase";



const SideBar = () => {
    const navigate = useNavigate();
    const Logout = async() =>{
        try{
            signOut(auth);
            navigate("/login");
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <div className="fixed z-50 left-0 top-0 h-full bg-blue-300 w-fit">
                <NavLink to={"dashboard"}>
                    <div className="container flex items-center p-3 pr-5 hover:bg-red-200">
                        <RiDashboardLine style={{width:"2rem",height:"2rem"}}/> 
                       <span className="text-md ml-2 uppercase font-semibold">
                        Dashboard
                       </span>
                    </div>
                </NavLink>
                <NavLink to={"calendar"}>
                <div className="container flex  items-center p-2 hover:bg-red-200">
                        <FaCalendarAlt style={{width:"2rem",height:"2rem"}}/> 
                       <span className="text-md ml-2 uppercase font-semibold">
                       Calendar
                       </span>
                    </div>
                </NavLink>
                <NavLink to={"equipment"}>
                <div className="container flex  items-center p-2 hover:bg-red-200">
                        <HiDocumentMagnifyingGlass style={{width:"2rem",height:"2rem"}}/> 
                       <span className="text-md ml-2 uppercase font-semibold">
                       Equipment
                       </span>
                    </div>
                </NavLink>

                <Button className="absolute bottom-4 left-5 right-5 bg-transparent text-black" onClick={Logout}>Log out</Button>
            </div>
        </>
    )
}

export default SideBar