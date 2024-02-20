import { SET_USER } from "./Type";

const initialState = {
    email: '',
    authenticate: false
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, ...action.payload
            }
        default:
            return {
                state
            }
    }
}