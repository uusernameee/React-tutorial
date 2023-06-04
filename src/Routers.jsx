import React from "react";
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
{/*
v6

import {Route,Routes} from "react-router-dom";
const Routers=()=>{
    return(
        <>
        <Menu/>
        <Routes>
        {/* 
        <Route path='/' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        Now , ab hum react component method use krke #58 without har baar senetence likhke props pass krayege
        <Route path='/about' element={()=><About name="About"/>}/>
        <Route path='/contact' element={()=><Contact name='Contact'/>}/>
        </Routes>
        </>
    );
};*/}

{/* version 5 */}


const Routers=()=>{
    return(
        <>
            <Switch>
                <Route path='/' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </>
    );
};
export default Routers;
