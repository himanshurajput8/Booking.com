import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { HeaderComponent } from './Header'
import { CarouselComponent } from './Carosuel'
import { DestinationImage } from './Destination'
import { WeekendImage } from './Weekend'
import { DestinationList } from './destinationList'
import { FooterComponent } from './Footer'
import { NotFound } from './NotFound'

function App() {
 const[searchTerm, setSearchTerm] = useState('')
  
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={
          <>
              <HeaderComponent setSearchTerm={setSearchTerm}/>
              {!searchTerm && <CarouselComponent/>}
              {!searchTerm && <DestinationImage/>}
              <WeekendImage searchTerm={searchTerm}/> 
              {!searchTerm && <DestinationList/>}
              <FooterComponent/>
          </>
        }/>
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App 
