import { combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { userReducer } from "./userReducer"



const rootReducer = combineReducers({
    userReducer: userReducer,
    shoppingReducer: shoppingReducer
})

//export type ApplicationState = ReturnType<typeof rootReducer>

export {rootReducer }