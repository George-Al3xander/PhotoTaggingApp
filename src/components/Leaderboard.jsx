import React from "react";
import DisplayTime from "./DisplayTime";
import sortTime from "./sortTime";

const Leaderboard = (props) => {
    let players = sortTime(props.array);    
    return(
        <>
        <header>
            <h1>Leaderboard</h1>
        </header>
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