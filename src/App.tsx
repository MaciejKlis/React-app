import { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm/TansactionForm';
import Navbar from './components/Navbar/Navbar';
import TransactionsList from './components/TransactionList/TransactionsList';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
  let ethereum: any;
  let web3: any;
}

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] = useState(Array<string>);
  const [currentAccount, setCurrentAccount] = useState("")

  const onLogin = async (provider:any) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to Metamask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0])
      setIsConnected(true);
    } 
  }

  const onLogout = ():void => {
    setIsConnected(false);
  }

  return (
    <div>
      <Navbar onLogin={onLogin} account={currentAccount}/>
      <div className="app">
        <h1>Transaction on georli </h1>
        <TransactionForm isConnected={isConnected} transactions={transactions} setTransactions={setTransactions}/>
        <TransactionsList transactions={transactions} />
      </div>
    </div>
  )
}

export default App
