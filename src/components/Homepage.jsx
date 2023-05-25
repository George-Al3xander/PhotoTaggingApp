import React from "react";
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.png"
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        <main>
            <div className="heroes-preview">
                <div><img src={hulk} alt="" />
                <h1>Red Hulk</h1></div>
                <div><img src={vision} alt="" /> <h1>Vision</h1></div>
                <div><img src={ironfist} alt="" /> <h1>Ironfist</h1></div>
            </div>
            <div><Link to="/game"><button>Start</button></Link></div>
        </main>
    )
}


export default Homepage