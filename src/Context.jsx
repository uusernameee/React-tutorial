import React,{createContext} from "react";
import CompA from "./CompA";
const Firstname=createContext();
const Lastname=createContext();
const Designation=createContext();
const Context=()=>{
    return(
        <Firstname.Provider value={"Vaishnavi"}>
        <Lastname.Provider value={"Gupta"}>
        <Designation.Provider value={", Developer"}>
        <CompA/>
        </Designation.Provider>
        </Lastname.Provider>
        </Firstname.Provider>
    );
};
export default Context;
export {Firstname,Lastname,Designation};
