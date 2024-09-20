import { useState } from 'react'
import './App.css'
import { HeaderComponent } from './Header'
import { CarouselComponent } from './Carosuel'
import { DestinationImage } from './Destination'
import { PropertyImage } from './Property'
import { WeekendImage } from './Weekend'

function App() {
 

  return (
    <>
      <HeaderComponent/>
      <CarouselComponent/>
      <DestinationImage/>
      <PropertyImage/>
      <WeekendImage/> 
    </>
  )
}

export default App 
