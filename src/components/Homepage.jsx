import React from "react";
import DisplayHeroes from "./DisplayHeroes";

import { Link } from "react-router-dom";

const Homepage = (props) => {
    return(
        <>
        <header>
            <Link to="/"><h1>Find Me</h1></Link>     
            <Link to="/leaderboard"><h1 className="leader">Leaderboard</h1></Link>     
        </header>
        <main>
            <DisplayHeroes />
            <Link to="/game"><button onClick={props.onStart} >Start</button></Link>
        </main>
        </>
    )
}


export default Homepage