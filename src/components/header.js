import React from "react";
import { Card,CardBody } from "reactstrap/es";

function Header()
{
    return(
        <div className="text-center my-3 ">
            <Card className="my-2 bg-warning">
                <CardBody>
                <h1>Wel come to Course Application</h1>
                </CardBody>
            </Card>
        </div>
    )

}

export default Header;