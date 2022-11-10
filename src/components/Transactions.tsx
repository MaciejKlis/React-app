import React from "react";
import { hexShortcuter } from "../utils";

interface IProps {
    transactions: Array<string>
}

const Transactions = ( {transactions}:IProps ) => {

    const listItems = transactions.map((txn, idx) => {
        const georliExplorer = "https://goerli.etherscan.io/tx/" + txn;
        const txnShortcut = hexShortcuter(txn) 
        
        return(    
            <li key={idx}>
                <a href={georliExplorer} target="_blank">
                    {txnShortcut}
                </a>
            </li>
        )
    });

    return (
         transactions.length ? 
            <div className="txn-box">
                <h3>Transactions</h3>
                <ul>
                    {listItems}
                </ul>
            </div> : <div></div>
    ) 
}

export default Transactions;