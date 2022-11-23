import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { hexShortcuter }  from '../utils/hexShortcuter';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import Wallet from '../types/Wallet';
import { RootState } from '../state/reducers';

//TODO: Figureout Types for Web3 support
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
  let ethereum: any;
  let web3: any;
}

const Login = () => {
  const [connecting, setConnecting] = useState(false);
  //Store handling
  const wallet:Wallet = useSelector((state:RootState) => state.wallet)
  const dispatch = useDispatch();
  const { connectWallet, updateChainId, updateWalletAddress, resetWallet, clearTransactions } = bindActionCreators(actionCreators, dispatch)

  //Web3
  const [provider, setProvider] = useState(window.ethereum);
  const [web3, setWeb3] = useState(new Web3())

  //Detect provider
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        console.warn("No Ethereum browser detected!");
    }
    return provider;
  }

  //Set provider
  useEffect(() => {
    setProvider(detectProvider());
  }, []);

  //Try to connect
  const onLoginHandler = async () => {
    setConnecting(true)
    await ethereum.request({ method: 'eth_requestAccounts' });
    setConnecting(false)
    onLogin();
  }

  const onLogin = async () => {
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();

    if (accounts.length === 0) {
      console.log("Please connect to Metamask!");
    } else if (accounts[0] !== wallet.walletAddress) {
      const setWallet:Wallet = {
        isConnected: true,
        walletAddress: accounts[0],
        chainId,
      }

      if(chainId !== 5) {
        switchToGeorliNetwork()
      }

      observeWalletChanges();
      connectWallet(setWallet);
    } 
  }

  //Handle changes on wallet
  const handleAccountsChanged = async () => {
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()
    
    if (accounts.length === 0) {
      onLogoutHandler();
    } else if (accounts[0] !== wallet.walletAddress) {
      updateWalletAddress(accounts[0])
    } 
  }

  const handleChainChanged = async () => {
    const web3 = new Web3(provider)
    const chainId = await web3.eth.getChainId()
    updateChainId(chainId)

    if(chainId !== 5) {
      switchToGeorliNetwork()
    }
  }
  
  const observeWalletChanges = () => {
    ethereum.on("accountsChanged", handleAccountsChanged);
    ethereum.on("chainChanged", handleChainChanged);
  }

  //Require to switch network to georli
  const switchToGeorliNetwork = async () => {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }],
    })
    updateChainId(5)
  }

  const onLogoutHandler = ():void => {
    resetWallet()
    clearTransactions()
  }

  return (
    <div>
      {wallet.isConnected ?
        <button onClick={onLogoutHandler}>{hexShortcuter(wallet.walletAddress)}</button>:
        <button onClick={onLoginHandler}>
          {connecting ? "Connecting..." : "Connect wallet"}
        </button>
      }
    </div>
  )
}

export default Login;