import React,{useContext} from "react";
import CompC from "./CompC";
import {Designation} from "./Context";
const CompB=()=>{
    const desig=useContext(Designation);
    return (
<>
<h1>My designation is {desig}.</h1>
<CompC/>
</>
    );
};
export default CompB;