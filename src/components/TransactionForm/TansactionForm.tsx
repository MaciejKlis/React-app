import React, {useState} from "react";
import classes from "./TransactionForm.module.css"

declare let ethereum: any;

interface IProps {
    isConnected: boolean,
    transactions: Array<string>,
    setTransactions: (value: Array<string>) => void,
    currentNetwork: number
}

const Form = (props:IProps) => {
    const [reciverAddress, setReciverAddress] = useState('')
    const [amount, setAmount] = useState(0)
    const [wethAmount, setWethAmount] = useState(0)

    const handleReciverAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReciverAddress(e.target.value)
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value);
        setAmount(amount);
        setWethAmount(amount * 10 ** 18);
    }

    const sendTransaction = async () => {
        const params = [{
            to: reciverAddress,
            value: '0x' + (wethAmount).toString(16),
            from: ethereum.selectedAddress,
            chainId: '0x5',
        }]

        const transactionRequest = await ethereum.request({
            method: 'eth_sendTransaction',
            params,
        })

        const transactions = props.transactions;
        const newTransactions = [
            transactionRequest,
            ...transactions
        ]
        props.setTransactions(newTransactions);
    }
 
    return (
        <div className={`${classes.formBox}`}>
            {!props.isConnected ? <h3>connect test wallet to send transaction</h3> : <h3>Current network: {props.currentNetwork}</h3>}
            <label>Send to:</label>
            <input disabled={!props.isConnected} type="text" name="address" onChange={handleReciverAddress} placeholder="ex. 0x2fa1B5dF32e7EfE18f2924ad574f3A653c844e79"/>
            <label>Amount:</label>
            <input disabled={!props.isConnected} type="number" name="amount" min="0" step="0.0005" onChange={handleAmount} placeholder="ex. 0.0015"/>
            <button disabled={!props.isConnected} onClick={sendTransaction}> Send </button>
        </div>
    )
}

export default Form