import React from "react";
import {NavLink} from "react-router-dom";
const Error=()=>{
    return(
        <>
        <div className="style_error_pg">
        <h1>404 Error Page</h1>
            <h1>Sorry,This page doesn't exist.</h1>
            <NavLink to="/">Go Back!!!</NavLink>
        </div>
        </>
    );
};
export default Error;