import React, { useState } from "react";
import { hexShortcuter } from "../utils"

declare let ethereum: any;

interface IProps {
    setIsConnected: (value: boolean) => void
}

const Nav = ({setIsConnected}:IProps) => {    
    const [walletAddr, setWalletAddr] = useState("");

    const connectWallet = async () => {
        if(window.ethereum) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            setWalletAddr(account);
            setIsConnected(true);
        } else {
            alert('Install metamask !');
        }
    }

    return (
        <nav className="nav">
            <button onClick={connectWallet}> { walletAddr ? hexShortcuter(walletAddr) : 'Connect wallet'} </button>
        </nav>
    )
}

export default Nav
