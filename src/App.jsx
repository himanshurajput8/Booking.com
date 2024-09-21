import { useState } from 'react'
import './App.css'
import { HeaderComponent } from './Header'
import { CarouselComponent } from './Carosuel'
import { DestinationImage } from './Destination'
import { PropertyImage } from './Property'
import { WeekendImage } from './Weekend'
import { DestinationList } from './destinationList'
import { FooterComponent } from './Footer'

function App() {
 const[searchTerm, setSearchTerm] = useState('')
  
  return (
    <>
      <HeaderComponent setSearchTerm={setSearchTerm}/>
      <CarouselComponent/>
      <DestinationImage/>
      <PropertyImage/>
      <WeekendImage searchTerm={searchTerm}/> 
      <DestinationList/>
      <FooterComponent/>
    </>
  )
}

export default App 
