import * as ActionTypes from './ActionTypes';
import { redirectTo } from '../Home/Helper';

// Hard coded users to login 
let users = [
    {
        "email": "innov@ccer.com",
        "password": "Inn@123"
    },
    {
        "email": "m@k.com",
        "password": "mohit@123"
    }
];

// Function to update username value.
export const onChangeUsername = (event) => {
    return {
        type: ActionTypes.ON_CHANGE_USERNAME,
        payload: event.target.value
    }
};

// Function to update password value.
export const onChangePassword = (event) => {
    return {
        type: ActionTypes.ON_CHANGE_PASSWORD,
        payload: event.target.value
    }
};

// Action to validate user and add it to localStorage.
export const loginUser = (username, password) => {
    return (dispatch) => {
        let isUserFound = false;
        for (let count = 0; count < users.length; count++) {
            if (username === users[count].email && password === users[count].password) {
                isUserFound = true;
            }
        }

        if (isUserFound) {
            dispatch(loginUserSuccess({ username, password }));
            let userInfoString = localStorage.getItem('userInfo');
            let userInfo = [];
            let userAlreadyPresent = false;
            if (userInfoString && userInfoString !== 'null') {
                userInfo = JSON.parse(userInfoString);
                userInfo.map(user => {
                    if (user.username === username) {
                        userAlreadyPresent = true;
                    }
                })
            }
            if (!userAlreadyPresent) {
                userInfo.push({
                    username,
                    watchList: []
                });
            }
            localStorage.setItem('currentUser', username);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            redirectTo('home');
        } else {
            dispatch(loginUserFailure('Email and password is not correct!'));
        }
    };
};

// Fucntion to update user after successfull login.
export function loginUserSuccess(user) {
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload: user
    };
};

// Fucntion to update error after failure login.
export function loginUserFailure(error) {
    return {
        type: ActionTypes.USER_LOGIN_FAILURE,
        payload: error
    };
};


