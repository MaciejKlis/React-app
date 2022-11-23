import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

declare let ethereum: any;

interface IProps {
    isConnected: boolean,
    chainId: number,
}

const Form = (props:IProps) => {
    const [reciverAddress, setReciverAddress] = useState('')
    const [wethAmount, setWethAmount] = useState(0)
    const isGeroli = props.chainId === 5

    //Store inplementation
    const dispatch = useDispatch();
    const { addTransaction } = bindActionCreators(actionCreators, dispatch)

    const handleReciverAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReciverAddress(e.target.value)
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value);
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

        addTransaction(transactionRequest)
    }
 
    return (
        <div className="flex flex-col gap-4">
            {!props.isConnected && <h3>connect test wallet to send transaction</h3>}
            {props.isConnected && !isGeroli && <h3>switch network to georli</h3>}
            {props.isConnected && isGeroli && <h3>You can send transaction now</h3>}
            <label>Send to:</label>
            <input disabled={!(props.isConnected && isGeroli)} type="text" name="address" onChange={handleReciverAddress} placeholder="ex. 0x2fa1B5dF32e7EfE18f2924ad574f3A653c844e79"/>
            <label>Amount:</label>
            <input disabled={!(props.isConnected && isGeroli)} type="number" name="amount" min="0" step="0.0005" onChange={handleAmount} placeholder="ex. 0.0015"/>
            <button disabled={!(props.isConnected && isGeroli)} onClick={sendTransaction}> Send </button>
        </div>
    )
}

export default Form