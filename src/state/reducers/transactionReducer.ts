import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState:Array<string> = [];

const reducer = (state: Array<string> = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            state.push(action.txs)
            return state
        default:
            return state
    }
}

export default reducer