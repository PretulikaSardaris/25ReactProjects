
import './App.css'
import Accordion from './Projects/AccordionProject/Accordion'
import LightNDarkMode from './Projects/Change theme/LightNDarkMode'
import CustomTab from './Projects/Custom tab/CustomTab'
import Slider from './Projects/Image Slider/Slider'
import ListView from './Projects/ListView/ListView'
import LoadMoreButton from './Projects/LoadMoreButton/LoadMoreButton'
import QrCodeGenerator from './Projects/QrCodeGenerator'
import RandomColor from './Projects/Random color generator/RandomColor'

import Scroll from './Projects/Scroll-Indicator/Scroll'

import StarRating from './Projects/Star Rating/StarRating'

function App() {
  

  return (
    <div className='flex flex-col gap-5 border-spacing-2'>

<h1 className='mt-0'>Project 10 -- Custom Tab</h1>
   <CustomTab />

<h1 className='mt-0'>Project 9 -- Scroll Indicator</h1>
   <Scroll />

 <h1>Project 8 -- Change theme </h1>
   <LightNDarkMode />


      <h1>Project 7 -- Qr Code Generator </h1>
      <QrCodeGenerator />

 <h1>Project 6 -- List/Menu View </h1>
      <ListView /> 
      
       <h1>Project 5 -- Load More Button</h1>
      <LoadMoreButton />


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
