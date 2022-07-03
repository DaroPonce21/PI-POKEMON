import React from "react";
import { Link } from "react-router-dom";
import '../stylos/landing.css';


export const Landing = () => {

    return (
        <div className='landing'>
            <Link to="/home">
                <button className="btnred"></button>
                <button className="btngreen"></button>
                <button className="btnblue"></button>
            </Link>

        </div>
    )


}