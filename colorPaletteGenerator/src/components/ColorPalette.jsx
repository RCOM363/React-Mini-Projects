// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line react/prop-types
const ColorPalette = ({color,index,lockedStatus,toggle}) => {

  const isDark = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }

  const handleCopy = ()=>{
    window.navigator.clipboard.writeText(color);
    toast("Color copied to clipboard");
  };

  return (
    <div className={`w-[15em] h-[15em] ${isDark(color)?"text-white":"text-black"} flex justify-center items-center p-3`} style={{backgroundColor:color}}>
    {/* toastify container */}
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition: Bounce  
    />
    <div className=' flex items-center justify-center gap-1 relative'>
      <span className=' cursor-pointer font-semibold flex justify-center items-center gap-2' onClick={handleCopy}>
      {color}
        
      </span>
      <span className=' cursor-pointer  mb-2'    onClick={()=> toggle(index)}>
      {/* icons */}
          {
          lockedStatus?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
          </svg>
          }
        </span>
      </div>
    </div>
  )
}

export default ColorPalette
