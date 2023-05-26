import React from "react";
import hulk from "../assets/hero_1.png"
import vision from "../assets/hero_2.png"
import ironfist from "../assets/hero_3.webp"
const DisplayHeroes = () => {
    return(
        <div className="heroes-preview block-heroes">
            <div className="hero1"><img src={hulk} alt="" />
            <p>Red Hulk</p></div>
            <div className="hero2"><img src={vision} alt="" /> <p>Vision</p></div>
            <div className="hero3"><img src={ironfist} alt="" /><p>Ironfist</p></div>
        </div>
    )
}


export default DisplayHeroes