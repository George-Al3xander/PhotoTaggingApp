import React from "react";
import DisplayTime from "./DisplayTime";
import sortTime from "./sortTime";
import { Link } from "react-router-dom";
const Leaderboard = (props) => {
    let players = sortTime(props.array);    
    return(
        <>
        <div className="header">
            <h1>Leaderboard</h1><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg></Link>
        </div>
        <div className="leaderboard block-main">
        <table >
            <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Time</th>
            </tr>

            {players.map((player) => {

                return <tr key={player.name}>
                    <td>{players.indexOf(player) + 1}</td>
                    <td>{player.name}</td>
                    <td>{<DisplayTime time={player.time}/>}</td>
                </tr>
            })}
        </table>
        </div>
        </>
    )
}

export default Leaderboard