import {useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./MoviesPage.module.css";

import { getMovies, getTotalMovies, getTotalPages } from "../store/reducers/movies/moviesSelectors";
import { fetchMovies } from "../store/reducers/movies/moviesActions";
import { Filter } from "../components";
import { MoviesPagination } from "../components";
import { MoviesListCard } from "../components/MoviesListCard/MoviesListCard";
import {ThemeContext} from "../themes/theme-context";
import {LanguageContext} from "../language/language-context";




const MoviesPage = (page) => {

    const {theme} = useContext(ThemeContext);


    const dispatch = useDispatch();
    const movies = useSelector(getMovies );
    const totalMovies = useSelector(getTotalMovies );
    const totalPages = useSelector(getTotalPages );

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState('All Genres');

    const language = useContext(LanguageContext);

    useEffect(() => {
        dispatch(fetchMovies(currentPage, totalMovies, totalPages, selectedGenres, language.language));
    }, [dispatch, currentPage, totalMovies, totalPages, selectedGenres, language]);


    const paginationProps = {
        moviesPerPage: 20,
        totalMovies: totalMovies,
        paginate: (pageNumber) => {setCurrentPage(pageNumber);},
        currentPage: 1
    };

    const handleFilterChange = (genres, rating) => {
        setSelectedGenres(genres);
        //setCurrentPage(1);
    };


    return (

        <div className={css.moviesListPage}>
            <div className={css.filterRow} >
                <div>
                    Загальна кількість фільмів у базі {totalMovies}
                </div>
                <div>
                    <Filter onFilterChange={handleFilterChange} selectedGenres={''}/>
                </div>


            </div>
            <div className={css.paginationRow}>
                <MoviesPagination {...paginationProps} />
            </div>
            <div className={css.moviesListBlock}>
                {movies.map(movie => (
                                     <MoviesListCard key = {movie.id} movie = {movie}/>
                ))}

            </div>
        </div>
    );

}

export {MoviesPage};