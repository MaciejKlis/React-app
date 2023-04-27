import Web3 from 'web3';
import MintNFTABI from '../../../abi/MintNFT.json';
import { useState } from 'react';

const MintNFT = () => {
    const contractAddress = '0x079B999220cE77a99541c69205d266d6cfBc0629';

    const [amount, setAmount] = useState(1)

    async function mint() {
        const web3 = new Web3(window.ethereum);
        const myContract = new web3.eth.Contract(MintNFTABI, contractAddress);

        const result = await myContract.methods.mint(amount).send({ 
            from: window.ethereum.selectedAddress,
            value: '0x' + ((amount * 0.05) * (10 ** 18)).toString(16) 
        });

        
        // Get the connected wallet's address
        const address = window.ethereum.selectedAddress;

        // Get the number of NFTs owned by the address
        const tokenCount = await myContract.methods.balanceOf(address).call();

        // Loop through the tokens owned by the address
        for (let i = 0; i < tokenCount; i++) {
            // Get the token ID
            const tokenId = await myContract.methods.tokenOfOwnerByIndex(address, i).call();

            // Do something with the token ID, such as display it in the UI
            console.log(`Token ID: ${tokenId}`);
        }
    }



    return (
        <div className="py-10">

            <input 
                type="number" 
                min="1" 
                max="3"
                onChange={(e)=> setAmount(e.target.value)}
                value={amount}
            />

            <button onClick={mint}>
                Mint NFT
            </button>

            <h2 className="mt-10">Your NFT</h2>

            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default MintNFT;
