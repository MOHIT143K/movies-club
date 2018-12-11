import * as ActionTypes from './ActionTypes';
import axios from 'axios';

// Function used to set top rated movies in reducer.
export const setTopRatedMovies = (payload) => {
    return {
        type: ActionTypes.SET_TOP_RATED_MOVIES,
        payload
    };
};

// Action used to get top rated movies.
export const getTopRatedMovies = (page) => {

    return dispatch => {
        return axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key: 'dae159752cc7527caca457378c8d1fd6',
                page
            }
        })
        .then(function (response) {
            dispatch(setTopRatedMovies(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    };
};

// Function used to set recently release movies in reducer.
export const setRecentlyReleasedMovies = (payload) => {
    return {
        type: ActionTypes.SET_RECENTLY_RELEASED_MOVIES,
        payload
    };
};

// Action used to get recently released movies.
export const getRecentlyReleasedMovies = (page) => {

    return dispatch => {
        return axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: {
                api_key: 'dae159752cc7527caca457378c8d1fd6',
                page
            }
        })
        .then(function (response) {
            dispatch(setRecentlyReleasedMovies(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    };
};

// Function used to set searched movies in reducer.
export const setSearchedMovies = (payload) => {
    return {
        type: ActionTypes.SET_SEARCHED_MOVIES,
        payload
    };
};

// Action to get result against search value.
export const performSearch = (searchTerm, page) => {
    return dispatch => {
        return axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: 'dae159752cc7527caca457378c8d1fd6',
                query: searchTerm,
                page
            }
        })
        .then(function (response) {
            dispatch(setSearchedMovies(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    };
};

// Fucntion used to update search value
export const onChangeSearch = (payload) => {
    return {
        type: ActionTypes.ON_CHANGE_SEARCH,
        payload
    }
};

