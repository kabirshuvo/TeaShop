import { useState } from 'react'
import './App.css'
import Teas from './components/Teas/Teas'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Teas name="SpecialiTea" location="SrimanGal"
    price="1200"
    currency="BDT" />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
    </div>
  )
}

export default App
