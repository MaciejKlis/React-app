import React from "react";
import { hexShortcuter } from "../../../utils/hexShortcuter";
import classes from "./TransactionsList.module.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';

const Transactions = () => {
    const state = useSelector((state: RootState) => state.transactions)

    const linkItem = (txn:string) => {
        const georliExplorer = "https://goerli.etherscan.io/tx/" + txn;
        const txnShortcut = hexShortcuter(txn) 
        
        return(
            <a href={georliExplorer} target="_blank">
                {txnShortcut}
            </a>
        )
    }

    return (
        (state.length > 0 ? <div className={`${classes.txnBox}`}>
            <h3>Transactions</h3>
            
            <ul>
                {state.map(txs => {
                    return <li key={txs}> {linkItem(txs)} </li>
                })}
            </ul>
        </div> : <div></div>)
    ) 
}

export default Transactions;