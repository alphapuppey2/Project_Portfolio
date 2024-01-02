import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";


import RoundSpinner from "../component/Loading/CircleLoad";



const SideBar = lazy(()=> import("../component/SideBar"));



export default function Homepage() {


    return (
        <div className="animation-ease-in w-full h-full p-0 bg-green-200">
           <Suspense fallback ={<RoundSpinner />}>
           <SideBar />
           </Suspense>
            <div className="min-h-full w-full flex flex-row pl-[11rem] pt-10 pr-2 bg-red-100">
                <Outlet />
            </div>

        </div>
    )
}