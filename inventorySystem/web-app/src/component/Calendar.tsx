import React, { FC, useEffect, useRef, useState } from "react";
import Button from "./Button";


interface CalendarProps {
    theme?: String,
}

const Calendar: FC<CalendarProps> = ({ theme }) => {
    const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const day = useRef(1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [monthNdx, setMonth] = useState(new Date().getMonth());
    const [firstDate, setFirstDate] = useState(new Date(year, monthNdx, 1).getDay());
    const [lastDate, setLastDate] = useState(new Date(year, monthNdx + 1, 0).getDate());
    const onLookPrevDate = useRef((new Date(year, monthNdx, 0).getDate()) - (firstDate));
    const onLookNextDate = useRef(1);

    useEffect(() => {
        setFirstDate(new Date(year, monthNdx, 1).getDay());
        setLastDate(new Date(year, monthNdx + 1, 0).getDate())

    }, [monthNdx, year])

    day.current = 1;
    onLookPrevDate.current = (new Date(year, monthNdx, 0).getDate()) - (firstDate - 1);
    onLookNextDate.current = 1;

    const prevMonth = () => {
        setMonth((prev) => prev - 1);

        if (monthNdx <= 0) {
            setMonth((prev) => prev = 11);
            setYear((prev) => prev - 1);
        }
    }
    const nextMonth = () => {
        setMonth((next) => next + 1);

        if (monthNdx >= 11) {
            setMonth((prev) => prev = 0);
            setYear((prev) => prev + 1);
        }
    }


    return (
        <>
            <div className="container bg-blue-400 p-2 w-fit h-fit">
                <div className="grid grid-cols-3 place-items-center w-[30rem] m-2">
                    <Button className="bg-transparent text-zinc-500 hover:bg-transparent hover:text-zinc-800" onClick={prevMonth}>{month[monthNdx - 1 === -1 ? 11 : monthNdx - 1]}</Button>
                    <span className="p-3 bg-blue-300 uppercase font-bold ">{month[monthNdx]}  {year}</span>
                    <Button className="bg-transparent text-zinc-500 hover:bg-transparent hover:text-zinc-800" onClick={nextMonth}>{month[monthNdx + 1 === 12 ? 0 : monthNdx + 1]}</Button>
                </div>
                <div>
                    <div className="week grid grid-cols-7 gap-1 w-full bg-blue-400">
                        {weeks.map((e, i) => {
                            return (
                                <span key={i} className="font-medium bg-white text-23">{e}</span>
                            )
                        })}
                        {[...Array(42),].map((e, i) => {

                            return (
                                <div key={i}>
                                    {i >= firstDate && day.current <= lastDate ?
                                        <Button key={i} className={`rounded-none w-full h-full hover:bg-zinc-200 text-black text-center ${i < firstDate || day.current > lastDate ? "bg-zinc-300" : "bg-white"}`}
                                        >
                                            <div className="w-full h-full">
                                                {i >= firstDate && day.current <= lastDate ? day.current++ : null}
                                            </div>
                                        </Button> :
                                        <Button key={i} className="rounded-none w-full bg-zinc-300 text-slate-400 text-center hover:bg-zinc-300" disabled>
                                            <div className="w-full h-full">
                                                {day.current < lastDate ? onLookPrevDate.current++ : onLookNextDate.current++}
                                            </div>
                                        </Button>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )




}

export default Calendar