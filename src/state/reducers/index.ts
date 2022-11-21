import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import walletReducer from "./walletReducer"

const reducers = combineReducers({
    transactions: transactionReducer,
    wallet: walletReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>