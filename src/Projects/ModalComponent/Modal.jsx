import React, { useState } from 'react'

const Modal = () => {

    const[modal , setModal] = useState(false)

    function openModal(){
     setModal(!modal)
    }

    
  return (
    <div className='w-96 h-96 bg-pink-50 flex items-center justify-center rounded-lg'>
       {modal && <button onClick={()=> openModal()}>Click to open Modal</button>}
      {
        !modal && <div className='bg-purple-300 w-64 h-64 text-black rounded-lg flex flex-col gap-5 items-center'>
        <h1 className='text-3xl'>This is a modal component</h1>
        <p>Click on the button to close Modal</p>
        <button className='text-white w-1/2  ' onClick={()=> openModal()}>Close</button>
      </div>
      }
    </div>
  )
}

export default Modal
