import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from "react-router-dom";
import IconLinker from "./IconLinker";
import { RiDashboardLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

import Calendar from "./Calendar";
import Dashboard from "../Page/Dashboard";

//icons
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
//firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firebaseDB } from "../configFirebase/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import firebase from 'firebase/app'
import { unsubscribe } from "diagnostics_channel";
import { resolve } from "path";

type userNameType = {
    firstName : string,
    lastName : string,

}

const SideBar = () => {
    
    const navigate = useNavigate();
    const [userActive,setUser] = useState<string | null>(null);
    const [userLog,setLogging] = useState<userNameType>({firstName:"" , lastName:""})

    const Logout = async() =>{
        try{
            signOut(auth);
            navigate("/login");
        }catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
           const unsub =  auth.onAuthStateChanged((userAct)=>{
                if(userAct){
                    const userCollection = collection(firebaseDB, "users");
                    setUser(userAct.email);
                    const q = query(userCollection , where("email","==",userAct.email))
                    getDocs(q).then((activeUser)=>{
                        activeUser.docs.forEach((docu)=>{
                            setLogging((dataX)=>({...dataX, firstName:docu.data().firstName,lastName:docu.data().lastName}))
                        })

                    })
                }
                else{
                    navigate("/login")
                }
            })
            return () => {unsub()}
        
    },[userActive])

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
                <NavLink to={"employee"}>
                <div className="container flex  items-center p-2 hover:bg-red-200">
                        <FaCalendarAlt style={{width:"2rem",height:"2rem"}}/> 
                       <span className="text-md ml-2 uppercase font-semibold">
                       Schedule
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

                <div className="absolute bottom-4 left-5 right-5">

                <h1>hi {userLog.firstName}</h1>
                <Button className="bg-transparent text-black" onClick={Logout}>Log out</Button>
                </div>
            </div>
        </>
    )
}

export default SideBar