import React, { useState } from "react";
import { render } from "react-dom";

declare let ethereum: any;

const Nav = () => {    
    const [walletAddr, setWalletAddr] = useState("");

    const connectWallet = async () => {
        if(window.ethereum) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 
            const account = accounts[0];
            setWalletAddr(account);
        } else {
            alert('Install metamask !');
        }
    }

    return (
        <nav className="nav">
            <button onClick={connectWallet}> {walletAddr || 'Connect wallet'} </button>
        </nav>
    )
}

export default Nav
