import React from "react";
import {Switch,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
const Switchs=()=>{
    return(
        <>
        <Menu/>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
};
export default Switchs; 