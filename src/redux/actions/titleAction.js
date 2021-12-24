
import typeTitle from "../contains/typeTitle";

export const setTitlePageAction = (title) => async (dispatch) => {
    dispatch({ type: typeTitle.SET_TITLE, payload: title });
}