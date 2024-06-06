import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
  const[qrCode , setQrCode] =useState('')
  const[input , setInput] =useState('')



  function handleClick(){
     setQrCode(input)
     setInput('')
  }
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-2 m-2'>
      <h1>QR Code Generator</h1>
      <div className='flex p-2 m-2 rounded-md'>
        <input className='p-4 rounded-lg m-2 ' type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter Your Value' />
        <button
        disabled={ input && input.trim() !== ' ' ? false : true}
        onClick={handleClick}>Generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value' value= {qrCode}  size={400} className='bg-white'  />
      </div>
    </div>
  )
}

export default QrCodeGenerator
