import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../state/reducers';
import TransactionForm from './TransactionForm/TansactionForm';
import TransactionList from './TransactionList/TransactionsList';
import Wallet from '../../types/Wallet';

const  SendTranscation = () => {
    const wallet:Wallet = useSelector((state: RootState) => state.wallet)

    return (
        <div style={{maxWidth: '700px', margin: '0 auto'}}>            
            <h1>Transaction on georli </h1>
            <TransactionForm isConnected={wallet.isConnected} chainId={wallet.chainId}/>
            <TransactionList />
        </div>
    )
}

export default SendTranscation