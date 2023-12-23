import React, { FC, HtmlHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContentSide extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const SideContent: FC<ContentSide> = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "bg-sky-700 animation-ease-in duration-1000 text-slate-300 rounded-s-lg h-full w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default SideContent;
