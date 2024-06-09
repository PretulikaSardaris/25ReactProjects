import { useEffect, useState } from 'react'

function useLocalStorage (key ,defaultValue){
const [value, setValue] = useState(() => {

    let currentValue;
    console.log(currentValue)
try{
 currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
 console.log(currentValue)
    }
    catch(err){
        console.log(err);
        currentValue = defaultValue
    }
    return currentValue;
})
useEffect(() => {
    localStorage.setItem(key , JSON.stringify(value))
} , [key, value])
console.log(value)
  return [value, setValue]
}

export default useLocalStorage
