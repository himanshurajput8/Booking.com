import { useState } from 'react'
import './App.css'
import { HeaderComponent } from './Header'
import { CarouselComponent } from './Carosuel'
import { DestinationImage } from './Destination'
import { PropertyImage } from './Property'

function App() {
 

  return (
    <>
      <HeaderComponent/>
      <CarouselComponent/>
      <DestinationImage/>
      <PropertyImage/>
    </>
  )
}

export default App 
