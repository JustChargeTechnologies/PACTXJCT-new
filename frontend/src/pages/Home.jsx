import React from 'react'
import Navbar from '../components/Navbar'
import Vision from '../components/Home/Vision'
import Slider2 from '../components/Home/Slider2'
import WhatWeDo from '../components/Home/WhatWeDo'
import CollaborativeApproach from '../components/Home/CollaborativeApproach'
import Donate from '../components/Home/Donate'
import OurProject from '../components/Home/OurProject'

const Home = () => {
  return (
    <div>
        
        <Slider2/>
        
        <Vision/>
        <WhatWeDo/>
        <CollaborativeApproach/>
         <OurProject/>
        <Donate/>
    </div>
  )
}

export default Home