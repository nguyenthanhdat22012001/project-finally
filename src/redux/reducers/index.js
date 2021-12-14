import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";


const RootReducer = combineReducers({
    auth: authReducer,
    shopping: cartReducer,
})

export default RootReducer;