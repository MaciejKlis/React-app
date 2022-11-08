import React, {useState} from "react";

const Form = () => {
    const [reciverAddress, setReciverAddress] = useState('')
    const [amount, setAmount] = useState(0)
    const [wethAmount, setWethAmount] = useState(0)

    const handleReciverAddress = (e) => {
        setReciverAddress(e.target.value)
    }

    const handleAmount = (e) => {
        const amount = e.target.value
        setAmount(amount);
        setWethAmount(amount * 10 ** 18);
    }

    const sendTransaction = () => {
        const params = [{
            to: reciverAddress,
            value: '0x' + (wethAmount).toString(16),
            from: ethereum.selectedAddress,
            chainId: '0x5',
        }]

        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    

    return (
        <div className="form-box">
            <label>Send to:</label>
            <input type="text" name="address" onChange={handleReciverAddress} placeholder="ex. 0x2fa1B5dF32e7EfE18f2924ad574f3A653c844e79"/>
            <label>Amount:</label>
            <input type="number" name="amount" onChange={handleAmount} placeholder="ex. 0.02"/>
            <button onClick={sendTransaction}> Send </button>
        </div>
    )
}

export default Form