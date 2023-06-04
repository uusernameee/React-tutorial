import React from "react";
import {useParams,useLocation,useHistory} from "react-router-dom";
 {/*1st way
const User=({match})=>{
    return(
        <h1>User {match.params.fname} {match.params.lname} page. </h1>
    );
};*/}
const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return(
        <>
<h1>User {fname} {lname} page!</h1>
<h1>My current location is {location.pathname}</h1>
{/* TASK */}
{location.pathname==="/user/vaishnavi/gupta"?<button onClick={()=>history.push('/')}>Click me!</button>:null}
        </>
    );
};
export default User;