import { useCallback, useEffect, useState } from "react";
import ColorPalette from "./components/ColorPalette";


function App() {

  const [colors,setColors] = useState([]);
  const [paletteSize,setPaletteSize] = useState(5);
  const [lockedStatus,setLockedStatus] = useState(Array.from({length:paletteSize},()=>{return false}));

  // func to generate color
  const generateColor = useCallback(() => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for(let i=0;i<6;i++){
      hexColor+=hex[Math.floor(Math.random()*hex.length)];
    }
    return hexColor;
  },[]);

  // toggling lock/unlock
  const toggleLock = (index) => {
    setLockedStatus((prevLockedStatus) => {
      const newLockedStatus = [...prevLockedStatus];
      newLockedStatus[index] = !prevLockedStatus[index];
      return newLockedStatus;
    });
  }

  // func to generate color palette
  const generateColorPalette = () => {
    let newColors = [];
    for (let i=0;i<paletteSize;i++){
      if(lockedStatus[i]){
        newColors[i] = colors[i];
      } else {
        newColors[i] = generateColor();
      }
    }
    setColors(newColors);
  };

  // generating color palette using spacebar
  document.body.onkeyup = (e) => {
    if (e.key === "Space" || e.key === " "){
      e.preventDefault();
      generateColorPalette();
    }
  }

  useEffect(()=>{
    generateColorPalette();
  },[paletteSize]);

  return (
    <>
      <div className="bg-white w-[77em] mx-auto flex flex-col justify-center p-5">
        <h1 className="text-center text-3xl font-semibold">Color Palette Generator</h1>
        <label>Palette size : <span className="font-semibold">{paletteSize}</span></label>
        <input className=" w-[10em] accent-black" type="range" min={2} max={10} value={paletteSize} onChange={(e)=> setPaletteSize(e.target.value)}/>
        <h3 className="text-center my-3 text-xl">Hit Spacebar to generate colors</h3>
        <div className="grid grid-cols-5">
        {
          colors && colors.length>0 &&
          colors.map((color,index)=>(
            <ColorPalette key={index} color={color} index={index} lockedStatus={lockedStatus[index]} toggle={toggleLock}/>
          ))
        }
        </div>
      </div>
    </>
  );
}

export default App
