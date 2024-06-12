import React, { useState } from 'react'

const RandomColor = () => {
    const [hex, setHex] = useState(false);
    const [color , setColor] = useState( '#000000')

   function randomNumber (value){
    return Math.floor(Math.random() * value.length)
   }


    const switchColorType = ()  => {
        if(hex){
            const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let randomHex = '#';
        for(let i=0; i < 6; i++){
            randomHex += hexNumbers[randomNumber(hexNumbers)]

            setColor(randomHex)
        }
      console.log(randomHex)
        }
        else {
            const colors = ['red' , 'blue' , 'green' , 'yellow' , 'orange']

           let  normalColor = colors[randomNumber(colors)]
             setColor(normalColor)

            
        }
        

    }


  return (
    <div>
      <button onClick={() => setHex(!hex)}>{hex ? 'Hex Color' : 'Normal Color'}</button>
     
      <div className='w-96  h-96  border-blue-400 rounded-md text-black font-semibold'  style={{background : color}}>
        <button className='bg-white text-black font-bold text-sm position-center' onClick={switchColorType}>click to change</button>
        <h1 className='text-sm'>{color}</h1>
      </div>

    </div>
  )
}

export default RandomColor
