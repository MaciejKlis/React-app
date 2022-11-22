import {ActionType} from "../action-types"

interface AddTransactionAction {
    type: ActionType.ADD_TRANSACTION
    txs: string
}

interface ClearTransactions {
    type: ActionType.CLEAR_TRANSACTIONS
}

interface ConnectWalletAction {
    type: ActionType.CONNECT_WALLET
    wallet: {
        isConnected: boolean,
        chainId: number,
        walletAddress: string,
    }
}

interface UpdateChainId {
    type: ActionType.UPDATE_CHAIN_ID,
    chainId: number
}

interface UpdateWalletAddress {
    type: ActionType.UPDATE_WALLET_ADDRESS,
    walletAddress: string
}

interface ResetWallet {
    type: ActionType.RESET_WALLET
}

export type Action = AddTransactionAction | ClearTransactions | ConnectWalletAction | UpdateChainId | UpdateWalletAddress | ResetWallet