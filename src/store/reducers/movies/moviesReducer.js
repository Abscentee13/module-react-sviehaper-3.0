import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SET_FILTER, SET_TOTAL_MOVIES } from './moviesTypes';

const initialState = {
    loading: false,
    movies: [],
    error: '',
    filter: {},
    totalMovies: 0,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.movies,
                totalMovies: action.totalMovies,
                error: '',
            };
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
            };

        case SET_FILTER:

            return {
                ...state,
                filter: action.payload,
            };

        // case SET_TOTAL_MOVIES:
        //     return {
        //         ...state,
        //         totalMovies: action.payload,
        //     };

        default:
            return state;
    }
};

export {movieReducer};