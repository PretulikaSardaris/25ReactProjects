import React, { useEffect, useState } from 'react'

const Scroll = () => {
    const[data , setData]=useState([]);
    const[loading , setLoading]=useState(false);
   const [scrollPercentage , setScrollPercentage] = useState(0);



//    fetch data 
    async function fetchProducts(){
        try{
setLoading(true)
const res = await fetch('https://dummyjson.com/products');

const result = await res.json()

setData(result.products)
setLoading(false)

        }
        catch(e){
console.log(e)
        }
    }

    useEffect(() => {
  fetchProducts()
    } , [])

//  scrollPercentage 


    function handScrollPercentage(){

const percentageScrolled = document.body.scrollTop || document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

setScrollPercentage((percentageScrolled / height) * 100)

    }

  useEffect(() => {
    window.addEventListener('scroll' , handScrollPercentage)

    return() => {
        window.removeEventListener('scroll' , ()=> {})
    }
  }, [])
  console.log(scrollPercentage)


  return (
    <div className='flex flex-col gap-3 bg-slate-500 rounded-md'>
        <div className='fixed mt-0 z-1 text-center bg-black '>
        <h1 className='text-white'>
        Scroll Indicator Scroll-Bar
      </h1>
      <div className='h-3 bg-pink-800 '>
        <div className='h-3 bg-blue-500'
        style={{ width: `${scrollPercentage}%` }}>

        </div>
      </div>
        </div>
      
      <div className='flex flex-col gap-2 mt-20'>
      {loading && <p>Loading...</p>}
        {
         !loading && data && data.length > 0 ? 
data.map((item) => <p className='text-3xl' key={item.id}>{item.title}</p>)
            : null
        }
      </div>
    </div>
  )
}

export default Scroll
