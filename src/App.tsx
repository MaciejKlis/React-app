import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <h1>Transaction on georli </h1>
      <Form count={count} />
    </div>
  )
}

export default App
