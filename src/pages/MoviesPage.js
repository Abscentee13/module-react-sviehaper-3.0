import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./MoviesPage.module.css";

import { getMovies, getTotalMovies, getTotalPages } from "../store/reducers/movies/moviesSelectors";
import { fetchMovies } from "../store/reducers/movies/moviesActions";
import { Filter } from "../components";
import { MoviesPagination } from "../components";
import { MoviesListCard } from "../components/MoviesListCard/MoviesListCard";




const MoviesPage = (page) => {
    const dispatch = useDispatch();
    const movies = useSelector(getMovies );
    const totalMovies = useSelector(getTotalMovies );
    const totalPages = useSelector(getTotalPages );

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState('All Genres');

    useEffect(() => {
        dispatch(fetchMovies(currentPage, totalMovies, totalPages, selectedGenres));
    }, [dispatch, currentPage, totalMovies, totalPages, selectedGenres]);


    const paginationProps = {
        moviesPerPage: 20,
        totalMovies: totalMovies,
        paginate: (pageNumber) => {setCurrentPage(pageNumber);},
        currentPage: 1
    };
//////



    const handleFilterChange = (genres, rating) => {
        setSelectedGenres(genres);
        console.log('sdfsdfsdf' + genres);

        setCurrentPage(1);
    };

    // const filterProps = {
    //     selectedGenres: '',
    //     onFilterChange: {handleFilterChange},
    // };


    return (

        <div>
            <div className={css.filterRow}>
                <div>
                    Загальна кількість фільмів у базі {totalMovies}
                </div>
                <div>
                    <Filter onFilterChange={handleFilterChange} selectedGenres={selectedGenres}/>
                </div>


            </div>
         <MoviesPagination {...paginationProps} />
            <div className={css.moviesListBlock}>
                {movies.map(movie => (
                                     <MoviesListCard key = {movie.id} movie = {movie}/>
                ))}

            </div>
        </div>
    );

}

export {MoviesPage};