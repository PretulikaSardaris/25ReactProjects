
import './App.css'
import Accordion from './Projects/AccordionProject/Accordion'
import Slider from './Projects/Image Slider/Slider'
import RandomColor from './Projects/Random color generator/RandomColor'
import StarRating from './Projects/Star Rating/StarRating'

function App() {
  

  return (
    <div className='flex flex-col gap-4'>
     <h1>Project 1 - Accordion</h1> 
   <Accordion />
   <h1>Project 2 -- Random Color Generator</h1> 
   <RandomColor />
   <h1>Project 3 -- Star Rating</h1>
   <StarRating noOfStars={10} />
   <h1>Project 4 -- Image Slider</h1>
   <Slider />
    </div>
  )
}

export default App
