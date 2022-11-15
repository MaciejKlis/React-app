import { useState, useEffect } from 'react';
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
  const [isConnectedToGeorli, setIsConnectedtoGeorli] = useState(false);
  const [transactions, setTransactions] = useState(Array<string>);
  const [currentAccount, setCurrentAccount] = useState("");
  const [chainId, setChainId] = useState(0);
  const [provider, setProvider] = useState(window.ethereum);
  const [web3, setWeb3] = useState(new Web3())

  const onLogin = async (provider:any) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    if (accounts.length === 0) {
      console.log("Please connect to Metamask!");
    } else if (accounts[0] !== currentAccount) {
      setProvider(provider);
      setWeb3(web3);
      setCurrentAccount(accounts[0]);
      setChainId(chainId);
      setIsConnected(true);
      if(chainId !== 5) {
        switchToGeorliNetwork()
      } else {
        setIsConnectedtoGeorli(true)
      }
    } 
  }

  const switchToGeorliNetwork = async () => {
    setIsConnectedtoGeorli(false)
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }],
    })
    setIsConnectedtoGeorli(true)
  }


  useEffect(() => {
    const handleAccountsChanged = async (accounts:any) => {
      await web3.eth.getAccounts()
      if (accounts.length === 0) {
        onLogout();
      } else if (accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
      } 
    }

    const handleChainChanged = async (chainId:any) => {
      const web3ChainId = await web3.eth.getChainId()
      if(web3ChainId !== 5) {
        switchToGeorliNetwork()
      } else {
        setIsConnectedtoGeorli(true)
      }
    }
    
    if(isConnected) {
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
    }

    return () => {
      if (isConnected) {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("chainChanged", handleChainChanged);
      }
    }
  }, [isConnected])

  const onLogout = ():void => {
    setIsConnected(false);
    setCurrentAccount("")
  }

  return (
    <div>
      <Navbar onLogin={onLogin} account={currentAccount}/>
      <div className="app">
        <h1>Transaction on georli </h1>
        <TransactionForm isConnected={isConnected} isGeorli={isConnectedToGeorli} transactions={transactions} setTransactions={setTransactions} currentNetwork={chainId} />
        <TransactionsList transactions={transactions} />
      </div>
    </div>
  )
}

export default App
