import React, { FC } from "react";


interface CardProps {
    children?: React.ReactNode,
    orientation?: "vertical" | "horizontal"

}

const Card: FC<CardProps> = ({ children, orientation }) => {

    const variantOrent = orientation === "vertical" ? "flex-col" : "flex-row";


    return (
        <div className={`crd w-[10rem] w-max-[20rem] h-max rounded-xl flex ${variantOrent} shadow-lg shadow-slate-400 p-2 m-5`}>
            {children}
        </div>
    )

}

const CardHeader: FC<CardProps> = ({ children }) => {

    return (
        <div className="font-semibold border-b-2 border-slate-500 w-full">{children}</div>
    )

}
const CardBody: FC<CardProps> = ({ children }) => {
    return (
        <div className="relative p-10">
            {children}
        </div>
    )
}
const CardFooter: FC<CardProps> = ({ children }) => {
    return (
        <div className="font-light border-t-2 border-slate-500 w-full">
            {children}
        </div>
    )
}


export { CardFooter, CardBody, CardHeader }
export default Card