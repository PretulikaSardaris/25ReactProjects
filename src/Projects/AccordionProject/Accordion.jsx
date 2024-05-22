import React, { useState } from 'react'
import data from './data'

const Accordion = () => {
const [selected , setSelected] = useState([])
const [enabled , setEnbled] = useState(false)


const handleCLick = (id) => {
if(!enabled){
    setSelected((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((selectedId) => selectedId !== id)
          : [...prevSelected, id]
      );
      console.log(id)
}
else { 
    setSelected(id === selected ? [] : [id])
}

}

    
  return (

    <div className='flex flex-col gap-2'>
        <button className='bg-black text-yellow-100 ' onClick={() => setEnbled(prev => !prev)}>{enabled ? 'Single Selection' : 'Multi-Selection'} </button>
     { data && data.length > 0 ?
     data.map( dataItem => (
        <div className='bg-slate-500 font-bold text-white rounded-md p-5' onClick={() => handleCLick(dataItem.id)}>
        <div> {dataItem.Question} </div>
        { selected.includes(dataItem.id) &&
        <h3> {dataItem.Answer}</h3> }
        
        </div>
  ))  
    :
    <div> No data found </div>}
    </div>
  )
}

export default Accordion
