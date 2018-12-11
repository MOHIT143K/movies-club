import * as ActionTypes from './ActionTypes';

/*Default State for User Module*/
const initialAuthState = {
    username: '',
    password: '',
    user: null,
    error: null
};

export default function (state = initialAuthState, action) {
    switch (action.type) {

        case ActionTypes.ON_CHANGE_USERNAME:
            return Object.assign({}, state, {
                username: action.payload,
            })

        case ActionTypes.ON_CHANGE_PASSWORD:
            return Object.assign({}, state, {
                password: action.payload,
            })

        case ActionTypes.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload,
                error: null
            })

        case ActionTypes.USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                user: null,
                error: action.payload
            })
        default:
            return state;
    }
}
