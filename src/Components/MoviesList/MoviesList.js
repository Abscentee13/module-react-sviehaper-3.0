import css from './MoviesList.module.css';
import {Button} from "../Button/Button";
import {Icon} from "../Icon/Icon";
import {Badge} from "../Badge/Badge";
import {useDispatch, useSelector} from 'react-redux';
import { getMovies  } from '../../store/reducers/movies/moviesSelectors';
import {useEffect} from "react";
import {fetchMovies} from "../../store/reducers/movies/moviesActions";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";



const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMovies );
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);


    return (
            <div className={css.moviesListBlock}>

                {movies.map(movie => (

                    <MoviesListCard key={movie.id} movie = {movie}/>

                ))}
            </div>
    );
}

export {MoviesList};