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
            return action.wallet
        case ActionType.UPDATE_CHAIN_ID:
            state.chainId = action.chainId
            return state
        case ActionType.UPDATE_WALLET_ADDRESS:
            state.walletAddress = action.walletAddress
            return state
        default:
            return state
    }
}

export default reducer