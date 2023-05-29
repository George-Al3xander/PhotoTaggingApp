import React, {useState, useEffect} from "react";
import DisplayTime from "./DisplayTime";
import sortTime from "./sortTime";
import { getDocs} from "firebase/firestore"
import { usersCollectionRef } from '../firebase-config';
import { Link } from "react-router-dom";
const Leaderboard = () => {
    const [users, setUsers] = useState([]);
  

    useEffect(()=> {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);         
          setUsers(sortTime(data.docs.map((doc) => ({...doc.data(), id: doc.id}))));
        }    
    
        getUsers();
      });

    return(
        <>
        <div className="header" >
            <h2>Leaderboard</h2><Link to="/"><svg className="leader" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg></Link>
        </div>
        <div className="leaderboard block-main">
        <table >
            <thead>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => {
                    return <tr key={user.id}>
                        <td>{users.indexOf(user) + 1}</td>
                        <td>{user.name}</td>
                        <td>{<DisplayTime time={user.time}/>}</td>
                    </tr>
                 })}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Leaderboard