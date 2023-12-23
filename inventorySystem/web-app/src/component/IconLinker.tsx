import React, { AnchorHTMLAttributes, FC } from "react";
import { Link } from "react-router-dom";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


interface IconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    Icon?: React.ElementType,
    children?: any,
    to?: string,
}
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const IconLinker: FC<IconProps> = ({ Icon, children, to, className }) => {
    return (
        <>
            <Link className={cn("flex flex-row justify center items-center capitalize ", className)} to={{ pathname: to }}>
                <span>{Icon && <Icon />}</span>
                <span>{children}</span>
            </Link>
        </>
    )
}

export default IconLinker