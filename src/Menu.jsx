import React from "react";
import {NavLink} from "react-router-dom";
const Menu=()=>{
    return(
        <>
            {/*<a href="/">AboutUs</a>
            <a href="/contact">Contact</a>
            */}
            <NavLink to="/">AboutUs</NavLink>
            <NavLink to="/contact">ContactUs</NavLink>
        </>
    );
};
export default Menu;