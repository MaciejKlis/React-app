import {ActionType} from "../action-types"

interface AddTransactionAction {
    type: ActionType.ADD_TRANSACTION
    txs: string
}

export type Action = AddTransactionAction