import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState:Array<string> = [];

const reducer = (state: Array<string> = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return [
                ...state,
                action.txs
            ]
        case ActionType.CLEAR_TRANSACTIONS:
            return state.filter(() => false)
        default:
            return state
    }
}

export default reducer