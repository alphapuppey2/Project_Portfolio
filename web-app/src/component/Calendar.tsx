import React, { FC, useEffect, useRef, useState } from "react";
import Button from "./Button";


interface CalendarProps {
    theme?: String,
}

const Calendar: FC<CalendarProps> = ({ theme }) => {
    const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = useRef(1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [monthNdx, setMonth] = useState(new Date().getMonth());
    const [firstDate, setFirstDate] = useState(new Date(year, monthNdx, 1).getDay());
    const [lastDate, setLastDate] = useState(new Date(year, monthNdx + 1, 0).getDate());
    const onLookPrevDate = useRef((new Date(year, monthNdx, 0).getDate()) - (firstDate));
    const onLookNextDate = useRef(1);

    console.log(firstDate)

    useEffect(() => {
        setFirstDate(new Date(year, monthNdx, 1).getDay());
        setLastDate(new Date(year, monthNdx + 1, 0).getDate())

    }, [monthNdx, year])

    day.current = 1;
    onLookPrevDate.current = (new Date(year, monthNdx, 0).getDate()) - (firstDate - 1);
    onLookNextDate.current = 1;

    console.log(lastDate)

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
            <div className="container p-2 bg-blue-400">
                <div className="grid grid-cols-3 place-items-center m-2">
                    <Button className="bg-transparent text-zinc-500 hover:bg-transparent hover:text-zinc-800" onClick={prevMonth}>{month[monthNdx - 1 === -1 ? 11 : monthNdx - 1]}</Button>
                    <span className="h-fit w-fit p-3 bg-blue-300 md:w-64 sm:w-20 min-w-20 w-64 uppercase font-bold ">{month[monthNdx]}  {year}</span>
                    <Button className="bg-transparent text-zinc-500 hover:bg-transparent hover:text-zinc-800" onClick={nextMonth}>{month[monthNdx + 1 === 12 ? 0 : monthNdx + 1]}</Button>
                </div>
                <div>
                    <div className="week grid grid-cols-7 gap-1 bg-blue-400">
                        {weeks.map((e, i) => {
                            return (
                                <span key={i} className="font-medium bg-white">{e}</span>
                            )
                        })}
                        {[...Array(35),].map((e, i) => {
                            console.log(lastDate)
                            console.log(day.current > lastDate)
                            return (
                                <>
                                    {i >= firstDate && day.current <= lastDate ?
                                        <Button key={i} className={`rounded-none hover:bg-zinc-200 text-black h-20 text-left ${i < firstDate || day.current > lastDate ? "bg-zinc-300" : "bg-white"}`}
                                        >
                                            <div className="w-full h-full">
                                                {i >= firstDate && day.current <= lastDate ? day.current++ : null}
                                            </div>
                                        </Button> :
                                        <span className="bg-zinc-300 p-2 opacity-80 text-left w-full h-full" key={i}>
                                            {day.current < lastDate ? onLookPrevDate.current++ : onLookNextDate.current++}
                                            {/* {day.current > lastDate ? onLookNextDate.current++ : null} */}
                                        </span>
                                    }
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )




}

export default Calendar