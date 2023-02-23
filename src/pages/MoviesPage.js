//import { MoviesList } from "../components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from './MoviesPage.module.css';

import { getMovies, getTotalMovies } from "../store/reducers/movies/moviesSelectors";
import { fetchMovies, setTotalMovies } from "../store/reducers/movies/moviesActions";
import { MoviesPagination } from '../components';
import { MoviesListCard } from "../components/MoviesListCard/MoviesListCard";



const MoviesPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMovies );
    const totalMovies = useSelector(getTotalMovies );
    console.log('kkkk' +totalMovies);

    const [currentPage, setCurrentPage] = useState(1);
    //const [totalMovies, setTotalMovies] = useState(0);

    useEffect(() => {
        dispatch(fetchMovies(currentPage, totalMovies));
        console.log("*************");
        console.log(totalMovies);

        console.log(currentPage);
    }, [dispatch, currentPage, totalMovies]);

    // useEffect(() => {
    //     dispatch(fetchMovies(currentPage));
    // }, [dispatch, currentPage]);


console.log('fffffffffffffffff----------'+totalMovies);


    //const totalPages = useSelector(getTotalPages);

    //const [movies, setMovies] = useState([]);

    //const [moviesPerPage, setMoviesPerPage] = useState(4);

    // useEffect(() => {
    //
    //    // setMovies(movies);
    //     setTotalMovies(data.total_results);
    //     setCurrentPage(5);
    // }, []);


    const paginationProps = {
        moviesPerPage: 20,
        totalMovies: totalMovies,
        paginate: (pageNumber) => {setCurrentPage(pageNumber);},
        currentPage: 1
    };


    return (
        // <Filter />
        <div>
            <div> Загальна кількість фільмів у базі {totalMovies}</div>
         <MoviesPagination {...paginationProps} />
         {/*   {console.log(currentPage)}*/}
         {/*   {console.log('movies in div')}*/}
         {/*   {console.log(movies)}*/}
            <div className={css.moviesListBlock}>
                {movies.map(movie => (

                                     <MoviesListCard key = {movie.id} movie = {movie}/>
                ))}

            </div>
        </div>
    );

}

export {MoviesPage};