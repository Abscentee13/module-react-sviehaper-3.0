import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import css from './MoviesList.module.css';
import { fetchMovies } from "../../store/reducers/movies/moviesActions";
import { getMovies  } from '../../store/reducers/movies/moviesSelectors';
import { MoviesListCard } from "../MoviesListCard/MoviesListCard";



const MoviesList = (movies) => {
                // const dispatch = useDispatch();
                // const movies = useSelector(getMovies );
                // useEffect(() => {
                //     dispatch(fetchMovies());
                // }, [dispatch]);


    return (
            <div className={css.moviesListPage}>
                <div className={css.moviesListBlock}>
                    console.log('movies v liastcard')
                    {console.log(movies)}
                    {movies.map (movie => (
                        <MoviesListCard key={movies.id} movie = {movie}/>
                    ))}
                </div>
            </div>
    );
}

export {MoviesList};