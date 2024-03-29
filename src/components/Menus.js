import { ListGroup } from "reactstrap";
import React from "react";
import { ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
function menus()
{
   return(
    <ListGroup>
                <Link className="list-group-item list-group-item-action"  tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Add Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>


    </ListGroup>
   );
}
export default menus;