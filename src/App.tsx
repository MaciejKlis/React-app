import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Nav' 
function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Navbar/>
        <div className="app">
          <h1>Transaction on georli </h1>
          <Form />
        </div>
    </div>
  )
}

export default App
