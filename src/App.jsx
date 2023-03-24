import { useState } from 'react'
import './App.css'
import SmartWatch from './components/SmartWatch/SmartWatch'
import Teas from './components/Teas/Teas'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Teas name="SpecialiTea" location="SrimanGal" price="1200" currency="BDT" />
    {/* <Teas name="RaptenTea" location="India" price="700" currency="BDT" /> */}
    <Teas name="ShukhTea" location="Nepal" price="1600" currency="BDT" />
    <SmartWatch/>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
    </div>
  )
}

export default App
