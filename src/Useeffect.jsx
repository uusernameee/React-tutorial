import React,{useState,useEffect} from "react";
const Useeffect=()=>{
    const [num,setnum]=useState(0);
    const run=()=>{
        setnum(num+1);
    };
    useEffect(()=>{
        alert("I am clicked!");
    },[]);
    return(
        <button onClick={run}>Click me! {num}</button>
    );
};
export default Useeffect;