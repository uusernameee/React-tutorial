import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Menu58 from "./Menu58";
import About58 from "./About58";
import Contact58 from "./Contact58";
import Error from "./Error";
import User from "./User";
import "./index.css";
import Search from "./Search";
const Switchs58=()=>{
    return(
        <>
        <Menu58/>
            <Switch>
                <Route exact path="/" component={()=><About58 name="About"/>}/>
                <Route path="/contact" render={()=><Contact58 name="Contact"/>}/>
                <Route path="/search" component={Search}/>
                {/* useParam */}
                <Route path="/user/:fname/:lname" component={User}/>
              {/* <Route component={Error}/>*/}
              <Redirect to="/"/>
            </Switch>
        </>
    );
};
export default Switchs58;