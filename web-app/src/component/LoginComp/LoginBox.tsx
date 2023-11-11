import React, { useEffect, useRef, useState } from "react";
import InputComp from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function LoginBox(props: { linkTo?: string }) {
  const [data, setData] = useState<{ username: String; password: String }>({
    username: "",
    password: "",
  });
  const linker = props?.linkTo;
  const next = useNavigate();
  const [validation, setValidation] = useState(false);
  const isValid = useRef(true);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (data.username && data.password !== "") {
      next("/");
    } else {
      setValidation(true);
      alert("Please Enter the field Provided");
    }
  };

  return (
    <>
      <div className="loginBox flex justify-center items-center h-full w-full bg-red-100">
        <div className="flex justify-center items-center w-full flex-col bg-white-800 overflow-hidden shadow-lg shadow-slate-700 rounded-2xl h-[60%] w-80 lg:max-lg:w-[80%]">
          <h1 className="text-xl p-[8px] uppercase font-bold font-poppins">
            Welcome
          </h1>
          <div
            className={`bg-red-300 absolute top-[50px] border-2 border-red-500 rounded-lg w-64 p-5 text-red-600 ${
              validation ? "block" : "hidden"
            }`}
          >
            Invalid Password or Username
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center transition ease-in-out duration-150">
            <div className="p-[8px] w-full gap-0">
              <div className="w-full">
                <InputComp
                  name="user"
                  type="text"
                  className={`tracking-widest border-b-2 border-sky-300 ${
                    validation
                      ? "border-b-2 border-red-500"
                      : "focus:border-b-2 focus:border-sky-900"
                  }`}
                  placeholder="Username"
                  onChange={(e) => {
                    setData((data) => ({ ...data, username: e.target.value }));
                  }}
                />
              </div>
            </div>
            {/* <input className="border-2 border-solid border-black p-1 rounded-xl w-[15rem] min-w-5" name="user" type="text" placeholder="Username" onChange={e =>{setData(data =>({...data,username:e.target.value}))}}/> */}
            <span className="p-[8px] w-full">
              <InputComp
                name="pass"
                type="password"
                className={`tracking-widest border-b-2 border-sky-300 ${
                  validation
                    ? "border-b-2 border-red-500"
                    : "focus:border-b-2 focus:border-sky-900"
                }`}
                placeholder="password"
                onChange={(e) => {
                  setData((data) => ({ ...data, password: e.target.value }));
                }}
              />
            </span>
            {/* <input className="border-2 border-solid border-black p-1 rounded-xl w-x" name="pass" type="password" placeholder="password" onChange={e =>{setData(data =>({...data,password:e.target.value}))}}/> */}
            <div className="flex w-full justify-center">
              <Button
                className="hover:bg-blue-500 transition ease-in-out duration-150"
                onClick={(e) => {
                  clickHandler(e);
                }}
              >
                Sign in
              </Button>
              {/* <button className="bg-sky-500 m-[10px] rounded-2xl w-fit p-2" onClick={clickHandler}>Sign in</button> */}
            </div>
            <div className="flex w-full flex-cols justify-around">
              <span>forget Password ?</span>
              <span> Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
