import React, { FC, InputHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Custom Properties go here
  disabled?: boolean;
}

const InputComp: FC<InputProps> = ({ className, disabled, ...props }) => {
  return (
    <input
      disabled={disabled}
      className={cn(
        "bg-transparent border-b-2 border-blue-300 w-auto transition ease-in-out duration-300 placeholder:text-sky-900 focus:border-b-2 focus:outline-none p-2 ",
        className
      )}
      {...props}
    />
  );
};

export default InputComp;
