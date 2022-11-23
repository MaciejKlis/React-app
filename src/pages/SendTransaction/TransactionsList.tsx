import React from "react";
import { hexShortcuter } from "../../utils/hexShortcuter";
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';

const Transactions = () => {
    const transactions = useSelector((state: RootState) => state.transactions)

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
        <div className="mt-5 h-20 ">
            <h2 className="mt-10">Transactions</h2>
            
            { transactions.length === 0 && <p>Can't find any transactions</p> }

            <ul>
                {transactions.map(txs => {
                    return <li key={txs}> {linkItem(txs)} </li>
                })}
            </ul>
        </div>
    ) 
}

export default Transactions;