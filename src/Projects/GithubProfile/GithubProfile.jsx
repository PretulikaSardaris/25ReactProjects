import React, { useEffect, useState } from 'react'

const GithubProfile = () => {
   const[username , setUserName]=  useState('PretulikaSardaris')
   const[loading , setLoading]=  useState(false)
   const[myData , setData]=  useState('')

   async function fetchData () {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    console.log(data)

    if(data){
        setData(data)
        setLoading(false)
    }
   }

  useEffect(() => {
   fetchData()
  } , [])

  function handleSubmit(){
fetchData()
  }


  if(loading){
     return <h1>Loading data ... please wait</h1>
  }

  return (
    <div className='flex flex-col bg-slate-600 w-full h-full'>
     <div className='flex flex-row bg-slate-800 text-white items-center justify-center'>
        <input
        value={username} onChange={(e) => {setUserName(e.target.value)}} type="text" className='w-full m-3 p-3 rounded-md' placeholder='Search Github username'/>
        <button onClick={handleSubmit}>Search</button>
     </div>
     {
        myData && (
            <div className='flex flex-col items-center justify-center m-5 p-5 '>
         <img className='rounded-full m-5 p-5' src={myData.avatar_url}  alt="" />
         <h2 className='m-5 p-5'>User Name : {myData.login}</h2>
         <p className='m-5 p-5'>Bio :  {myData.bio}</p>
         <p className='m-5 p-5'>{ myData.public_repos}</p>
         <p className='m-5 p-5'><span>Followers : {myData.followers} </span> <span>Following: </span></p></div>
        )
     }
     
    </div>
  )
}

export default GithubProfile
