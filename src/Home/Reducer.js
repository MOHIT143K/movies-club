import * as ActionTypes from './ActionTypes';

// Default State for Home Module
const initialState = {
    topRated: {
        page: 0,
        results: [],
        totalPages: 0
    },
    recentlyReleased: {
        page: 0,
        results: [],
        totalPages: 0
    },
    searchedMovies: {
        page: 0,
        results: [],
        totalPages: 0
    },
    searchTerm: '',
    topRatedCurrentPage: 0,
    recentlyReleasedCurrentPage: 0,
    searchedCurrentPage: 0,
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRated: {
                    page: action.payload.page,
                    results: [...state.topRated.results, ...action.payload.results],
                    totalPages: action.payload.total_pages,
                }
            }

        case ActionTypes.SET_RECENTLY_RELEASED_MOVIES:
            return {
                ...state,
                recentlyReleased: {
                    page: action.payload.page,
                    results: [...state.recentlyReleased.results, ...action.payload.results],
                    totalPages: action.payload.total_pages,
                }
            }

        case ActionTypes.SET_SEARCHED_MOVIES:
            return {
                ...state,
                searchedMovies: {
                    page: action.payload.page,
                    results: [...state.searchedMovies.results, ...action.payload.results],
                    totalPages: action.payload.total_pages,
                }
            }

        case ActionTypes.ON_CHANGE_SEARCH:
            return Object.assign({}, state, {
                searchedMovies: {
                    page: 0,
                    results: [],
                    totalPages: 0
                },
                searchTerm: action.payload
            });

        default:
            return state;
    }
}
