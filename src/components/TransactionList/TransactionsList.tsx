import React from "react";
import { hexShortcuter } from "../../utils/hexShortcuter";
import classes from "./TransactionsList.module.css";

import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';

interface IProps {
    transactions: Array<string>
}

const Transactions = ( ) => {
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
        <div className={`${classes.txnBox}`}>
            <h3>Transactions</h3>
            
            <ul>
                {state.map(txs => {
                    return <li> {linkItem(txs)} </li>
                })}
            </ul>
        </div>
    ) 
}

export default Transactions;