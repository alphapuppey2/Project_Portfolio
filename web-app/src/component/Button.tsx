import React, { ButtonHTMLAttributes, FC } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disable?: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "p-2 font-semibold rounded-xl text-white bg-cyan-500 hover:bg-cyan-500/75 animation-ease-in-out duration-150 uppercase",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
