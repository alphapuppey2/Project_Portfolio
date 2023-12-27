import React, { FormEvent, FormEventHandler, Suspense, useEffect, useRef, useState } from "react";
import LoginBox from "../component/LoginComp/LoginBox";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../configFirebase/firebase';
import RoundSpinner from "../component/Loading/CircleLoad";
import { FormProps, Link, redirect, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import InputComp from "../component/Input";


const Login = () => {

  const [data, setData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const next = useNavigate();
  const [validation, setValidation] = useState(false);


  //Signing In
  const clickHandler = (e:any) => {
    e.preventDefault();
    if (data.username && data.password !== "") {

           signInWithEmailAndPassword(auth,data.username , data.password).then(() =>{
            next('/')
           }).catch((err) =>{
            setValidation(true);
           });
      
  

      

    } else {
      setValidation(true);
      alert("Please Enter the field Provided");
    }
  };

  return (
    <>
      <div
        className={`login ease-in-out duration-500`}>
        <div className="loginBox relative flex justify-center items-center p-4 h-[90vh] w-full ">
        <div className="flex justify-center items-center flex-col bg-white-800 overflow-hidden shadow-lg shadow-slate-700 rounded-2xl h-[60%] w-80 transition ease-in-out duration-1000 hover:ease-in ">
          <h1 className="text-xl p-[8px] uppercase font-bold font-poppins">
            login
          </h1>
          <div
            className={`bg-red-300 absolute top-[50px] border-2 border-red-500 rounded-lg w-64 p-5 text-red-600 ${validation ? "block" : "hidden"
              }`}
          >
            Invalid Password or Username
          </div>
          <form onSubmit={clickHandler} className="w-full h-full flex flex-col justify-center items-center transition ease-in-out duration-300">
            <div className="p-[8px] w-full gap-0">
              <div className="w-full">
                <InputComp
                  name="user"
                  id="email"
                  type="email"
                  className={`tracking-widest border-b-2 border-sky-300 ${validation
                    ? "border-b-2 border-red-500"
                    : "focus:border-b-2 focus:border-sky-900"
                    }`}
                  placeholder="Username"
                  onChange={(e) => {
                    setData((data) => ({ ...data, username: e.target.value }));
                  }}
                  autoComplete="false"
                />
              </div>
            </div>
            {/* <input className="border-2 border-solid border-black p-1 rounded-xl w-[15rem] min-w-5" name="user" type="text" placeholder="Username" onChange={e =>{setData(data =>({...data,username:e.target.value}))}}/> */}
            <div className="p-[8px] w-full">
              <InputComp
                name="pass"
                id="pass"
                type="password"
                className={`tracking-widest border-b-2 border-sky-300 ${validation
                  ? "border-b-2 border-red-500"
                  : "focus:placeholder-sky-900 focus:border-sky-900"
                  }`}
                placeholder="Password"
                onChange={(e) => {
                  setData((data) => ({ ...data, password: e.target.value }));
                }}
                autoComplete="false"
              />
            </div>
            <div className="flex w-full justify-center">
              <Button type="submit"
                className="hover:bg-blue-500 bg-sky-500 rounded-2xl transition ease-in-out duration-150"
              >
                Sign in
              </Button>
              {/* <button className="bg-sky-500 m-[10px] rounded-2xl w-fit p-2" onClick={clickHandler}>Sign in</button> */}
            </div>
            <div className="flex w-full flex-cols m-3 justify-around">
              <Suspense fallback={<RoundSpinner />}>
                <Link to={"/register"}>forget Password ?</Link>
              </Suspense>
              {/* <span className="hover:text-sky-800 text-sm">
                forget Password ?
              </span> */}
              <span className="hover:text-sky-800 text-sm"> Sign Up</span>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}


export default Login