import React from "react";
import DisplayTime from "./DisplayTime";

const Leaderboard = (props) => {
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>time</th>
            </tr>

            {props.array.map((player) => {
                return <tr>
                    <td>{player.name}</td>
                    <td>{<DisplayTime time={player.time}/>}</td>
                </tr>
            })}
        </table>
    )
}

export default Leaderboard