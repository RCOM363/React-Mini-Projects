import { useCallback, useEffect, useState } from "react";
import ColorPalette from "./components/ColorPalette";

function App() {

  const [colors,setColors] = useState([]);
  const [paletteSize,setPaletteSize] = useState(5);
  const [lockedStatus,setLockedStatus] = useState(Array.from({length:paletteSize},()=>{return false}));

  const generateColor = useCallback(() => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for(let i=0;i<6;i++){
      hexColor+=hex[Math.floor(Math.random()*hex.length)];
    }
    return hexColor;
  },[]);

  const toggleLock = (index) => {
    setLockedStatus((prevLockedStatus) => {
      const newLockedStatus = [...prevLockedStatus];
      newLockedStatus[index] = !prevLockedStatus[index];
      return newLockedStatus;
    });
  }

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
      <div className="w-[50em] border-black border-[3px] mx-auto p-3">
        <input type="range" min={2} max={10} value={paletteSize} onChange={(e)=> setPaletteSize(e.target.value)}/>
        <div className="grid grid-cols-5">
        {
          colors && colors.length>0 &&
          colors.map((color,index)=>(
            <ColorPalette key={index} color={color} index={index} lockedStatus={lockedStatus[index]} toggle={toggleLock}/>
          ))
        }
        </div>
        <h3>Hit Spacebar to generate color</h3>
      </div>
    </>
  );
}

export default App
