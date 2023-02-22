import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));





const MoviesPagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {

    //const [currentPage, setCurrentPage] = useState(1);
    //const [moviesPerPage, setMoviesPerPage] = useState(10);
   // const [totalMovies, setTotalMovies] = useState(movies.length);
    const classes = useStyles();
    const [page, setPage] = useState(currentPage);

    const handleChange = (event, value) => {
        setPage(value);
        paginate(value);
    };



    return (
        <div className={classes.root}>
            <Pagination count={Math.ceil(totalMovies / moviesPerPage)} page={page} onChange={handleChange} />
        </div>
    );
};

export {MoviesPagination};