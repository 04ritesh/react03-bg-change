import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
     <div  style={{height:'100vh',width:'100vw',background:color}}>
     <button onClick={()=>setColor("red")} className='h-20 w-32'>Red</button>
     <button onClick={()=>setColor("green")} className='h-20 w-32'>Green</button>
     <button onClick={()=>setColor("yellow")} className='h-20 w-32'>Yellow</button>
     </div>
  )
}

export default App
//className='bg-gray-400 flex gap-4'