import { useState } from 'react';
import { IoStar } from "react-icons/io5";

function StarRating({noOfStars = 5}) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);


    const handleClick = (index) => {
      setRating(index);
    }

    const handleMouseEnter = (index) => {
      setHover(index);
    }

    const handleMouseLeave = () => {
      setHover(rating);
    }

  return (
    <>
        <div className='flex flex-wrap text-center justify-center items-center gap-1'>
        <span className=' text-base basis-full text-gray-500'>Rate the movie:
        {
          rating==1?"😑":rating==2?"😄":rating==3?"😁":rating==4?"😃":rating==5?"🤩":" "
        }
        </span>
        
        {
          [...Array(noOfStars)].map((_,index)=>{
            index+=1;
            return(
              <IoStar
                key={index}
                className={` mb-2 ${index<=(hover||rating)?" text-yellow-400":"text-black"}`}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={22}
              />
            );
          })
      }
        </div>
    </>
  )
}

export default StarRating
