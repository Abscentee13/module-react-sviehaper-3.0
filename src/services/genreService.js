import { useReducer, useEffect } from 'react';
import axios from 'axios';

//import {getGenres} from "../../services";
import {baseURL, urls} from "../configs/urls";
import {API_KEY} from "../configs/urls";


const initialState = {
    genres: [],
    selectedGenres: [],
};


function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_GENRES':
            return { ...state, genres: action.payload };
        case 'SELECT_GENRE':
            return { ...state, selectedGenres: [...state.selectedGenres, action.payload] };
        case 'DESELECT_GENRE':
            return { ...state, selectedGenres: state.selectedGenres.filter(genre => genre.id !== action.payload.id) };
        default:
            return state;
    }
}

const getGenres = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await axios.get(baseURL + urls.genres, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },
            });
            dispatch({ type: 'FETCH_GENRES', payload: response.data.genres });
        };
        fetchGenres();
    }, []);

    const handleSelectGenre = (genre) => {
        dispatch({ type: 'SELECT_GENRE', payload: genre });
    };

    const handleDeselectGenre = (genre) => {
        dispatch({ type: 'DESELECT_GENRE', payload: genre });
    };

    return (
        state.genres
    );
}

export {getGenres};