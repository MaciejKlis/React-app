import { useState, useEffect } from "react";
import { hexShortcuter } from "../../utils/hexShortcuter";
import classes from "./Navbar.module.css";

interface IProps {
    onLogin: (provider:any) => void;
    account: string;
}

const Nav = ({onLogin, account}:IProps) => {    
    const [isConnecting, setIsConnectiong] = useState(false);
    const [provider, setProvider] = useState(window.ethereum);
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

    useEffect(() => {
        setProvider(detectProvider());
    }, []);

    useEffect(() => {
        if(provider) {
            if (provider !== window.ethereum) {
                console.error("Do you have multiple wallets installed ?");
            }
            setIsMetaMaskInstalled(true);
        }
    }, [provider]);

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

    const onLoginHandler = async () => {
        setIsConnectiong(true);
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnectiong(false);
        onLogin(provider);
    }

    return (
        <nav className={`${classes.navbar}`}>
            {isMetaMaskInstalled &&
                (<button onClick={onLoginHandler}>
                    { !account && !isConnecting && "Connect wallet" }
                    { isConnecting && "Loading ..."} 
                    { account && !isConnecting && hexShortcuter(account) }
                </button>
            )}
            {!isMetaMaskInstalled && (
                <button>
                    <a href="https://metamask.io/download/">Download MetaMask</a>
                </button>
            )}
        </nav>
    )
}

export default Nav
