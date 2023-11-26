import React from "react";
import Card, { CardBody, CardFooter, CardHeader } from "./Card";


const Dashboard = () => {

    return (
        <>
            <div>
                <Card>
                    <CardHeader>This is Header</CardHeader>
                    <CardBody>
                        This is Body
                    </CardBody>
                    <CardFooter>
                        This is Footer
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}

export default Dashboard