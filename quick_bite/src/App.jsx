import { useState } from 'react'
import CameraPanel from './most_component/CameraPanel'
CameraPanel

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CameraPanel/>
    </div>
  )
}

export default App
