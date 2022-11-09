import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Nav' 
function App() {
  const [isConnected, setIsConnected] = useState(false);
  

  return (
    <div>
      <Navbar setIsConnected={setIsConnected}/>
      <div className="app">
        <h1>Transaction on georli </h1>
        <Form isConnected={isConnected}/>
      </div>
    </div>
  )
}

export default App
