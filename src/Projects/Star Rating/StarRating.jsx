import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";


const StarRating = ({noOfStars = 5}) => {
const [rating , setRating] = useState(0);
const [hover , setHover] = useState(0);


const handleClick = (index) => {
setRating(index)

}
const handleMouseEnter = (index) => {
    setHover(index)
        }
const handleMouseLeave = () => {
setHover(rating)
}
   
  return (
    <div className='flex'>
      {
        [...Array(noOfStars)].map((_,index)=> {
            index +=1

            return <FaStar className= {`cursor-pointer ${index <= (hover || rating) ? 'text-yellow-400' : 'text-slate-50'}`}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={()=> handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}/>
        })
      }
      
    </div>
  )
}

export default StarRating
