
const initState = {
    user: {},
    isSigned: false
};

const  categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "GET_ALL_CATEGORY":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "GET_ONE_CATEGORY":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "UPDATE_CATEGORY":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }
        case "DELETE_CATEGORY":
           return{
               ...state,
               user: action.payload.user,
               isSigned: action.payload.isSigned,
           }

        default:
            return state
    }
}

export default categoryReducer;