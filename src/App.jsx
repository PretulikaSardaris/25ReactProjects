
import './App.css'
import Accordion from './Projects/AccordionProject/Accordion'
import RandomColor from './Projects/Random color generator/RandomColor'

function App() {
  

  return (
    <div className='flex flex-col gap-4'>
     <h1>Project 1 - Accordion</h1> 
   <Accordion />
   <h1>Project 2 -- Random Color Generator</h1> 
   <RandomColor />
    </div>
  )
}

export default App
