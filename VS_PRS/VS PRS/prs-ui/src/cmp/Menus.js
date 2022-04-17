import React from "react";
import {ListGroup} from "reactstrap";
import { Link, Router } from "react-router-dom";

const Menus = () => {
    return (
        
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/home" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/registration" action>Register</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/patientsList" action>List</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact_us" action>Contact Us</Link>
            </ListGroup>
        
    );
}

export default Menus;