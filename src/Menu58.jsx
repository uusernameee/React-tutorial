import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
const Menu58=()=>{
    return(
        <>
        <div className="style_div">
            <NavLink exact activeClassName="active_class" to='/'>AboutUs</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'>ContactUs</NavLink>
            <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
            <NavLink exact activeClassName="active_class" to='/user/vaishnavi/gupta'>User</NavLink>
        </div>
        </>
    );
};
export default Menu58;