import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';
import Wallet from '../../types/Wallet';

export const addTransaction = (txs: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TRANSACTION,
            txs,
        });
    }
}

export const clearTransactions = () => {
    return (dispach: Dispatch<Action>) => {
        dispach({
            type: ActionType.CLEAR_TRANSACTIONS
        });
    }
}

export const connectWallet = (wallet:Wallet) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CONNECT_WALLET,
            wallet
        });
    }
}

export const updateChainId = (chainId: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_CHAIN_ID,
            chainId
        });
    }
}

export const updateWalletAddress = (walletAddress: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_WALLET_ADDRESS,
            walletAddress
        });
    }
}

export const resetWallet = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET_WALLET,
        });
    }
}