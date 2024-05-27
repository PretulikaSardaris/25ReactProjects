import React, { useEffect, useState } from 'react'

const LoadMoreButton = () => {
 const [loading , setLoading] = useState(false);
 const [product, setProducts] = useState([]);const [count , setCount] = useState(0);

 async function fetchProducts(){
    try{
        setLoading(true)
  const res = await fetch (`https://dummyjson.com/products?limit=5&skip=${count === 0 ? 0 : count*5}`)
  const result = await res.json();
  if(result && result.products && result.products.length){
    setProducts(result.products)
    setLoading(false)

  }
  console.log(result)
    }
    

    catch(e){
console.log(e)
setLoading(false)

    }
 }
 
 useEffect(() => {
     fetchProducts()
 } , [])

 if(loading){
    return <div> Loading data plz wait </div>
 }

  return (
    <div>
     {
     product && product.length ? 
     product.map((item) => 
        <div key={item.id}> <img src={item.thumbnail} ></img>
        <p>{item.title}</p></div>
    ): null }
    </div>
  )
}

export default LoadMoreButton
