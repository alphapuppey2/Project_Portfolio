import React, { Suspense } from "react";
import RoundSpinner from "../component/Loading/CircleLoad";


const Calendar = React.lazy(() => import("../component/Calendar"));
const Dashboard = React.lazy(() => import("../component/Dashboard"))

export default function Homepage() {
    return (
        <div className="animation-ease-in">
            <Suspense fallback={<RoundSpinner />}>
                {/* <Calendar /> */}
                <Dashboard />
            </Suspense>
        </div>
    )
}