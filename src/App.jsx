
import './App.css'
import Accordion from './Projects/AccordionProject/Accordion'
import Slider from './Projects/Image Slider/Slider'
import LoadMoreButton from './Projects/LoadMoreButton/LoadMoreButton'
import RandomColor from './Projects/Random color generator/RandomColor'
import StarRating from './Projects/Star Rating/StarRating'

function App() {
  

  return (
    <div className='flex flex-col gap-4'>
      {/* <h1>Project 5 -- Load More Button</h1>
      <LoadMoreButton /> */}
      <h1>Project 4 -- Image Slider</h1>
   <Slider />
<h1>Project 3 -- Star Rating</h1>
   <StarRating noOfStars={10} />
      <h1>Project 2 -- Random Color Generator</h1> 
   <RandomColor />
     <h1>Project 1 - Accordion</h1> 
   <Accordion />
   
   
   

    </div>
  )
}

export default App
