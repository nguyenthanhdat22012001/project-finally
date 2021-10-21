
const initState = {
    user: {},
    isSigned: false
};

const  authReducer = (state = initState, action) => {
    switch (action.type) {
        case "REGISTER":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "LOGIN":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "LOGIN_GOOGLE":
            return state;
        default:
            return state
    }
}

export default authReducer;