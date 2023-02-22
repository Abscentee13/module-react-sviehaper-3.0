import { Link } from 'react-router-dom';

import css from './Pagination.module.css';

const Pagination = ({ currentPage, moviesPerPage, totalMovies, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={css.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={css.paginationButton}>
                        <Link to={`/?page=${number}`} onClick={() => onPageChange(number)} className={currentPage === number ? 'page-link active' : 'page-link'}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export {Pagination};