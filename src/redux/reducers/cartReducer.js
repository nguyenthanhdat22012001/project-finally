import typeCart from "../contains/typeCart";
//helper
import { getCartLocalStorage } from "helper/cart";

const localSorage_cart = getCartLocalStorage();
const initState = localSorage_cart ? {
    cart: localSorage_cart,
} : {
    cart: null,
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case typeCart.SET_CART:
            return {
                ...state,
                cart: action.payload,
            }
        default:
            return state
    }
}

export default cartReducer;