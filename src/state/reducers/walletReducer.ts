import { ActionType } from '../action-types/index';
import { Action } from '../actions';
import Wallet from '../../types/Wallet';

const initialState:Wallet = {
    isConnected: false,
    chainId: 10000000000,
    walletAddress: '',
};

const reducer = (state:Wallet = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.CONNECT_WALLET:
            return {
                ...state,
                isConnected: action.wallet.isConnected,
                chainId: action.wallet.chainId,
                walletAddress: action.wallet.walletAddress,
            }
        case ActionType.UPDATE_CHAIN_ID:
            return {
                ...state,
                chainId: action.chainId
            }
        case ActionType.UPDATE_WALLET_ADDRESS:
            return {
                ...state,
                walletAddress: action.walletAddress
            }
        case ActionType.RESET_WALLET:
            return {
                ...state,
                isConnected: initialState.isConnected,
                chainId: initialState.chainId,
                walletAddress: initialState.walletAddress,
            }
        default:
            return state
    }
}

export default reducer