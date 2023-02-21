import { combineReducers } from 'redux';
import {genresReducer} from './genres/genresReducer';
import {moviesReducer} from './movies/moviesReducer';

const rootReducer = combineReducers({


    genres: genresReducer,
    movies: moviesReducer
});

export {rootReducer};