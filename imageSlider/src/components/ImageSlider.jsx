import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function ImageSlider({url,page,limit}) {

    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [loading,setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState(null);
    
    // fetch images 
    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImages(data);
                setLoading(false);
            }
        } catch(e){
            setErrorMsg(e);
        }
    }

    const handlePrevious = () => {
      setCurrentSlide(currentSlide===0?images.length-1:currentSlide-1);
    }

    const handleNext = () => {
      setCurrentSlide(currentSlide===images.length-1?0:currentSlide+1);
    }

    useEffect(()=>{
      if(url!==" ") fetchImages(url);
    },[]);

  
    useEffect(()=>{
      // automatic sliding
      const interval = setInterval(()=>{
        handleNext();
      },3000);

      return ()=>{
        clearInterval(interval);
        // Clean up the interval when the component unmounts, to prevent multiple intervals running concurrently
      }
    },[currentSlide]);

    if(loading){
      return <div className=' text-3xl mx-auto my-10 text-center font-semibold'>Loading Images please wait...</div>
    }

    if(errorMsg!==null){
      return <div>Error occured:${errorMsg}</div>
    }

  return (
    <div className=' w-[60vw] mt-5 mx-auto relative rounded-2xl overflow-hidden'>
      <IoIosArrowBack size={50} className=' absolute left-8 bottom-[18em] text-white'
        onClick={handlePrevious}
      />
      {/*images */}
      {
        images && images.length?
        images.map((image,index)=>(
            <img key={image.id} src={image.download_url} alt={image.download_url} 
              className={`${currentSlide === index? "block":"hidden"}`}
            />
        ))
        :null
      }
      {/*slide indicators */}
      <span className=' w-[25em] absolute left-0 right-0 bottom-5 mx-auto flex justify-evenly items-center p-1 '>
        {
          images && images.length ?
          images.map((_,index)=>(
            <button key={index} onClick={()=>setCurrentSlide(index)}
              className={`  h-[0.8em] ${currentSlide === index? " bg-white w-[2em]  rounded-lg":" bg-gray-400 w-[0.8em]  rounded-full"} transition-all duration-300`}
            ></button>
          ))
          :null
        }
      </span>
      <IoIosArrowForward size={50} className=' absolute right-8 bottom-[18em] text-white'
        onClick={handleNext}
      />
    </div>
  )
}

export default ImageSlider
