import React from "react";
import DisplayHeroes from "./DisplayHeroes";

import { Link } from "react-router-dom";

const Homepage = (props) => {
    return(
        <>
        <header>
            <h1>Find Me</h1>      
        </header>
        <main>
            <DisplayHeroes />
            <Link to="/game"><button onClick={props.onStart} >Start</button></Link>
        </main>
        </>
    )
}


export default Homepage