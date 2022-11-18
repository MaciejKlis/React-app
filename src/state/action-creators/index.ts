import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const addTransaction = (txs: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TRANSACTION,
            txs,
        })
    }
}