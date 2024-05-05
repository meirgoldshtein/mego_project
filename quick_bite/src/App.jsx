import { useState } from 'react'
import CameraPanel from './most_component/CameraPanel'
import TopeCard from './pages/TopeCard'
import rest from './pages/images_meir/IMG_18.jpg'
import SingleRestaurant from './pages/SingleRestaurant'

function App() {
  return (
    <div style={{border:'1px, solid black'}}>
      <CameraPanel/>
      <SingleRestaurant/>
    </div>
  )
}

export default App
