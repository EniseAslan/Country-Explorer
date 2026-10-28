import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gray-50 p-6">
   
        <h1 className="text-2xl font-bold">Country Explorer</h1>
      </div>
    </>
  )
}

export default App
