import React, { Suspense, useState } from "react";
import SideBar from "../component/SideBar";
import RoundSpinner from "../component/Loading/CircleLoad";
import Button from "../component/Button";
import Calendar from "../component/Calendar";
import Card, { CardBody, CardHeader } from "../component/Card";


const Dashboard = () => {
    const [viewCalendar, setCalendar] = useState(false);
    const [item, setItem] = useState([{ count: 5, name: "item 1" }, { count: 10, name: "item 2" }, { count: 15, name: "item 3" }, { count: 20, name: "item 4" }])

    return (
        <>
            <div className="flex flex-row">
                <Card orientation={"vertical"}>
                    <CardHeader>{item[0].name}</CardHeader>
                    <CardBody>{item[0].count}</CardBody>
                </Card>
                <Card orientation={"vertical"}>
                    <CardHeader>{item[1].name}</CardHeader>
                    <CardBody>{item[1].count}</CardBody>
                </Card>
                <Card orientation={"vertical"}>
                    <CardHeader>{item[2].name}</CardHeader>
                    <CardBody>{item[2].count}</CardBody>
                </Card>
                <Card orientation={"vertical"}>
                    <CardHeader>{item[3].name}</CardHeader>
                    <CardBody>{item[3].count}</CardBody>
                </Card>
            </div>
        </>
    )
}

export default Dashboard