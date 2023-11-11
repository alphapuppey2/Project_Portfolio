import React, { useEffect, useRef, useState } from "react";
import InputComp from "../component/Input";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import LoginBox from "../component/LoginComp/LoginBox";
import SideContent from "../component/LoginComp/SideContent";

export default function Login(props: { linkTo?: string }) {
  return (
    <>
      <div className="login container transition ease-in-out duration-100 grid gap-0 grid-cols-[minmax(0,2fr)_minmax(0,1fr)] w-full h-full">
        <SideContent />
        <LoginBox linkTo="/" />
      </div>
    </>
  );
}
