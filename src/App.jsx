import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen bg-blue-300 text-xl font-bold'>
      Demo App Home Page (V2)
    </div>
    </>
  )
}

export default App
