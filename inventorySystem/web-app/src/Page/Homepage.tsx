import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
import SideBar from "../component/SideBar";

import Calendar from "../component/Calendar";
import Button from "../component/Button";
import { signOut } from "firebase/auth";

import { auth } from '../configFirebase/firebase';



export default function Homepage() {
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
        <div className="animation-ease-in w-full h-full p-0 bg-green-200">
            <SideBar />
            <div className="min-h-full w-full flex flex-row pl-[15rem] pt-10 bg-red-100">
                <Outlet />
            </div>

        </div>
    )
}