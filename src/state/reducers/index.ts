import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";

const reducers = combineReducers({
    transactions: transactionReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>