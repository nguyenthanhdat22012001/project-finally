import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import titleReducer from "./titleReducer";


const RootReducer = combineReducers({
    auth: authReducer,
    shopping: cartReducer,
    titlePage: titleReducer,
})

export default RootReducer;