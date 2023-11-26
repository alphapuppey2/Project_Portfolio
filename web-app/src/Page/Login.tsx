import React, { useEffect, useRef, useState } from "react";
import InputComp from "../component/Input";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import LoginBox from "../component/LoginComp/LoginBox";
import SideContent from "../component/LoginComp/SideContent";


const Login = () => {
  const [user, changeUser] = useState("flex-row rounded-s-lg");

  const userRef = useRef("flex-row rounded-s-lg");

  console.log(user);
  return (
    <>
      <div
        className={`login ease-in-out duration-500`}>
        <LoginBox linkTo="/" />
      </div>
    </>
  );
}


export default Login