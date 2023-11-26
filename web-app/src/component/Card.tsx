import React, { FC } from "react";


interface CardProps {
    children?: React.ReactNode,

}

const Card: FC<CardProps> = ({ children }) => {

    return (
        <div className="crd  w-full h-full rounded-xl shadow-lg shadow-slate-400 p-5">
            {children}
        </div>
    )

}

export const CardHeader: FC<CardProps> = ({ children }) => {
    return (
        <div className="font-semibold border-b-2 border-slate-500 w-full">{children}</div>
    )

}
export const CardBody: FC<CardProps> = ({ children }) => {
    return (
        <div className="relative p-10">
            {children}
        </div>
    )
}
export const CardFooter: FC<CardProps> = ({ children }) => {
    return (
        <div className="font-light border-t-2 border-slate-500 w-full">
            {children}
        </div>
    )
}



export default Card