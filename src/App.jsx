import { useState } from 'react'
import background1 from "./assets/pic.jpg"


function WinDisplay() {
  return <h1>You won!</h1>
}

function LossDisplay() {
  return <h1>You lost!</h1>
}



function App() {

 //>= 16 <= 9 
  const testPerson = [[0, 2.8],[60,68]]

  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  const[win, setWin] = useState(false);
  let width = window.innerWidth;
  let height = window.innerHeight;
  

  function checkCoord(coords, number) {
    if(number >= coords[0] && number <=coords[1]) {
      return true;
    } else {
      return false;
    }
  }

  function checkCoords(coords, clickX, clickY) {
    let stateX = checkCoord(coords[0],clickX);
    let stateY = checkCoord(coords[1],clickY);
    console.log("X: " + stateX);
    console.log("Y: " + stateY);
    console.log("-------------")
    if(stateX == true && stateY == true) {
      setWin(true);
      return true;
    } else {
      setWin(false);

      return false;
    }
  }

  function checkClick(coords) {
    let x = coords[0];
    let y = coords[1];

  }

  function getCoords(e) {    
    let finX =  ((e.clientX / width) * 100).toFixed(1);
    let finY = ((e.clientY / height) * 100).toFixed(1);
    setCoordX(finX);
    setCoordY(finY);  
    checkCoords(testPerson, finX, finY);
  }
  document.addEventListener("click", getCoords);
  

  return (
    <div className='test'> 
      <nav><p>X: {coordX}%; Y: {coordY}%</p>
      <div>You {win == true ?  <WinDisplay /> : <LossDisplay />}</div>

<h1>Click here +</h1></nav>
      <div className="divImage" >
        {/* <img src={background1} alt="" /> */}
        </div>
    </div>
  )
}

export default App
