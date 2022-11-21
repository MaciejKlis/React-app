import {ActionType} from "../action-types"

interface AddTransactionAction {
    type: ActionType.ADD_TRANSACTION
    txs: string
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

export type Action = AddTransactionAction | ConnectWalletAction | UpdateChainId | UpdateWalletAddress