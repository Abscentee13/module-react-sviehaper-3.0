import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}
//     https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}



import {baseURL, urls} from "../../../configs/urls";
import {API_KEY} from "../../../configs/urls";

import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './moviesTypes';

const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(baseURL + urls.movies, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        })
            .then((response) => {
                const genres = response.data.movies;

                dispatch(fetchMoviesSuccess(genres));
            })
            .

            catch((error) => {
                dispatch(fetchMoviesFailure(error.message));
            });
    };
};

export const fetchGenresRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    };
};

export const fetchGenresSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,

        payload: movies,
    };
};



export const fetchGenresFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,

        payload: error,
    };
};

export {fetchMovies};