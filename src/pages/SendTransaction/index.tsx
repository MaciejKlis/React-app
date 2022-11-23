import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../state/reducers';
import TransactionForm from './TansactionForm';
import TransactionList from './TransactionsList';
import Wallet from '../../types/Wallet';

const  SendTranscation = () => {
    const wallet:Wallet = useSelector((state: RootState) => state.wallet)

    return (
        <div className="absolute w-full h-full flex flex-row items-center justify-center">
            <div className="bg-primary rounded-md border-2 border-bor-primary border-solid p-10">            
                <h1 className="mb-4">Transaction on georli </h1>
                <TransactionForm isConnected={wallet.isConnected} chainId={wallet.chainId}/>
                <TransactionList />
            </div>   
        </div>
    )
}

export default SendTranscation