import { MoviesList } from "../components/MoviesList/MoviesList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './MoviesPage.module.css';


import {getMovies, getTotalMovies} from "../store/reducers/movies/moviesSelectors";
import {fetchMovies, setTotalMovies } from "../store/reducers/movies/moviesActions";
//import { setTotalMovies } from '../actions/movieActions';
import {Badge, Button, Icon, MoviesPagination} from '../components';
import {MoviesListCard} from "../components/MoviesListCard/MoviesListCard";
//import {MoviesListCard} from "../components/MoviesListCard/MoviesListCard";
//import { fetchMovies } from "../store/reducers/movies/moviesActions";
//import { getMovies  } from '../store/reducers/movies/moviesSelectors';



const MoviesPage = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(currentPage));
    }, [dispatch, currentPage]);

    // useEffect(() => {
    //     dispatch(fetchMovies(currentPage));
    // }, [dispatch]);



    useEffect(() => {
        dispatch(fetchMovies(currentPage));
    }, [dispatch]);

    const [totalMovies, setTotalMovies] = useState(0);





    const movies = useSelector(getMovies );
    const total = useSelector(getTotalMovies );

    //const [movies, setMovies] = useState([]);

    //const [moviesPerPage, setMoviesPerPage] = useState(4);
    console.log('mmm ' );
    console.log(total);

    // useEffect(() => {
    //
    //    // setMovies(movies);
    //     setTotalMovies(data.total_results);
    //     setCurrentPage(5);
    // }, []);








    //const displayMovies = movies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);



 // console.log('ttttttt' + setTotalMovies);
    const paginationProps = {
        moviesPerPage: 20,
        totalMovies: 100,
        paginate: (pageNumber) => {setCurrentPage(pageNumber);},
        currentPage: 1
    };




    return (
        // <Filter />
        <div>
         <MoviesPagination {...paginationProps} />
            {console.log(currentPage)}
            {console.log(movies)}
            <div className={css.moviesListBlock}>
                {movies.map(movie => ( //console.log(movie)))}

                                     <MoviesListCard key = {movie.id} movie = {movie}/>
                ))}

            </div>
        </div>
    );

}

export {MoviesPage};