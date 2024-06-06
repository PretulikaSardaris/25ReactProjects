import React, { useEffect, useState } from 'react'

const LoadMoreButton = () => {
 const [loading , setLoading] = useState(false);
 const [product, setProducts] = useState([]);const 
 [count , setCount] = useState(0);

 async function fetchProducts(){
    try{
        setLoading(true)
  const res = 
  await fetch (`https://dummyjson.com/products?limit=5&skip=${count === 0 ? 0 : count*5}`)
  const result = await res.json();
  if(result && result.products && result.products.length){
    setProducts(result.products)
    setLoading(false)
}} catch(e){
console.log(e)
setLoading(false)
 }
 }
 
 useEffect(() => {
     fetchProducts()
 } , [count])

 if(loading){
    return <div> Loading data plz wait </div>
 }

  return (
    <div className= 'gap-20 border-red'>
<div className='flex flex-row gap-3'>
     {
     product && product.length ? 
     product.map((item) => 
      
        <div key={item.id} className='bg-slate-200 border-emerald-600
         text-black font-bold rounded-md p-5 m-5 w-fit h-fit'>
           <img className='w-40 h-40' src={item.thumbnail}></img> 
        <p>{item.title}</p>
        </div> ): null }
</div>
    <div className='buttonContainer'>
    <button onClick={() => {setCount(prevCount => prevCount + 1)}}>load More button</button>
    </div>
    </div>
  )
}

export default LoadMoreButton
