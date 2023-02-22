import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import css from './MoviesList.module.css';
import { fetchMovies } from "../../store/reducers/movies/moviesActions";
import { getMovies  } from '../../store/reducers/movies/moviesSelectors';
import { MoviesListCard } from "../MoviesListCard/MoviesListCard";



const MoviesList = () => {
                // const dispatch = useDispatch();
                // const movies = useSelector(getMovies );
                // useEffect(() => {
                //     dispatch(fetchMovies());
                // }, [dispatch]);


    return (
            <div className={css.moviesListPage}>
                <div className={css.moviesListBlock}>

                    {movies.map (movie => (
                        <MoviesListCard key={movie.id} movie = {movie}/>
                    ))}
                </div>
            </div>
    );
}

export {MoviesList};