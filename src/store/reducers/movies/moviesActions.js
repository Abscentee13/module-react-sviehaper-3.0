import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}
//     https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}



import {baseURL, urls} from "../../../configs/urls";
import {API_KEY} from "../../../configs/urls";

import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SET_FILTER, SET_TOTAL_MOVIES } from './moviesTypes';
import {useEffect, useState} from "react";

//////////////


// const urls = {
//     nowPlaying: '/movie/now_playing',
//     popular: '/movie/popular',
//     topRated: '/movie/top_rated',
//     upcoming: '/movie/upcoming',
// };

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    };
};

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies,
    };
};

export const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
    };
};

export const fetchMovies = (page) => {

    return (dispatch) => {
        dispatch(fetchMoviesRequest());

        axios
            .get(baseURL + urls.movies /*'https://api.themoviedb.org/3/discover/movie?api_key=c4afbfa3afc24cd4799e5c009de0e848'*/, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                    page: page,
                },
            })
            .then((response) => {
                const movies = response.data.results;
                console.log(response.data.total_results);
                dispatch(setTotalMovies(response.data.total_results));
                dispatch(fetchMoviesSuccess(movies));

            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchMoviesFailure(errorMsg));
            });


    };
};

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter,
    };
};


export const setTotalMovies = (total) => {
    return {
        type: SET_TOTAL_MOVIES,
        payload: total,
    }
}



