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
        "bg-sky-500 m-[10px] rounded-2xl w-1/2 p-2 font-semibold uppercase",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
