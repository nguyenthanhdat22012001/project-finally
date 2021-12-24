import typeTitle from "../contains/typeTitle";

const initState = {
    title: null,
}

const titleReducer = (state = initState, action) => {
    switch (action.type) {
        case typeTitle.SET_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case typeTitle.CLEAR_TITLE:
            return {
                ...state,
                title: null,
            }
        default:
            return state
    }
}

export default titleReducer;