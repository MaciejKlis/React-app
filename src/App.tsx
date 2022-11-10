import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Nav' 
import Transactions from './components/Transactions'

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] = useState(Array<string>);

  return (
    <div>
      <Navbar setIsConnected={setIsConnected}/>
      <div className="app">
        <h1>Transaction on georli </h1>
        <Form isConnected={isConnected} transactions={transactions} setTransactions={setTransactions}/>
        <Transactions transactions={transactions} />
      </div>
    </div>
  )
}

export default App
