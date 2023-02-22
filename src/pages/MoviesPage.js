import { MoviesList } from "../components/MoviesList/MoviesList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/reducers/movies/moviesSelectors";
import {fetchMovies} from "../store/reducers/movies/moviesActions";
import {Pagination} from '../components';
import {MoviesListCard} from "../components/MoviesListCard/MoviesListCard";
//import { fetchMovies } from "../store/reducers/movies/moviesActions";
//import { getMovies  } from '../store/reducers/movies/moviesSelectors';



const MoviesPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const movies = useSelector(getMovies );
    //onst [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(10);
    const [totalMovies, setTotalMovies] = useState(0);


    useEffect(() => {
        // виклик API та отримання списку фільмів
       // setMovies(movies);
        setTotalMovies(movies.length);
        setCurrentPage(1);
    }, []);





    const displayMovies = movies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);


    const paginationProps = {
        moviesPerPage: 16,
        totalMovies ,
        currentPage: 1,
        totalPages: 10,
        onPageChange: () => {},
    };




    return (
        // <Filter />
        <div>
         <Pagination {...paginationProps} />
            {displayMovies.map(movie => (
                <MoviesListCard key={movie.id} movie = {movie}/>
            ))}
        </div>
    );

}

export {MoviesPage};