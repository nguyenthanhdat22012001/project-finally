
const initState = {
    user: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isSigned: action.payload.isSigned,
            }
        case "PROFILE":
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state
    }
}

export default authReducer;