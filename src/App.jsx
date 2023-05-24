import { useState } from 'react'
import background1 from "./assets/pic.jpg"
import hulk from "./assets/hero_1.png"
import vision from "./assets/hero_2.png"
import ironfist from "./assets/hero_3.png"
import DropdownMenu from './components/DropdownMenu.jsx'





function App() {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  const [menuStatus, setMenuStatus] = useState(false);  
  const [currentClickHero, setCurrentClickHero] = useState("");
  const [currentClickMenu, setCurrentClickMenu] = useState("");
  const[win, setWin] = useState(false);
  let width = window.innerWidth;
  let height = window.innerHeight;
  const heroesId = ["red_hulk","vision","ironfist"];
  const [clickedHeroes, setClickedHeroes] = useState([])


  function getCoords(e) {    
    let finX = ( ((e.clientX / width) * 100)).toFixed(1);
    let finY = (((e.clientY / height) * 100) - 8).toFixed(1);
    setCoordX(finX);
    setCoordY(finY);     
  }

  function menuClick(e) {
    let val = e.target.innerHTML.toLowerCase();
    val = val.replace(" ", "_")
    setCurrentClickMenu(val);    
    if(currentClickHero == val) {
      let tempArray = [...clickedHeroes]
      tempArray = tempArray.concat(val);
      setClickedHeroes(tempArray);
    }   
    setMenuStatus(false);
  }
  

  function handleClick(e) {
    if(menuStatus == false) {
      setMenuStatus(true);    
    }
    else {
      setMenuStatus(false);            
    }
    getCoords(e);
    setCurrentClickHero(e.target.id);
  }
  
  

  return (
    <div className='test'> 
      <nav><p>X: {coordX} ; Y: {coordY}</p>
     </nav>
    
      <div onClick={handleClick} className="divGame" >
      {menuStatus == true ?  <DropdownMenu menuClickFunc={menuClick} styleLeft={coordX} styleTop={coordY} />  : null} 
        <img  className="background-image" src={background1} alt="" />
        <img id={heroesId[0]} className="hero" src={hulk} alt="" />
        <img id={heroesId[1]}  className="hero" src={vision} alt="" />
        <img id={heroesId[2]}  className="hero" src={ironfist} alt="" />
        </div>
    </div>
  )
}

export default App
