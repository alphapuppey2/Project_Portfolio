import React, { useEffect, useRef, useState } from "react";
import LoginBox from "../component/LoginComp/LoginBox";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";


const Login = () => {
  const [user, changeUser] = useState("flex-row rounded-s-lg");

  console.log(user);
  return (
    <>
      <div
        className={`login ease-in-out duration-500`}>
        <LoginBox />
      </div>
    </>
  );
}


export default Login