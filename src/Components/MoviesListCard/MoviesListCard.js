import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import css from './MoviesListCard.module.css';

import {GenreBadge, StarsRating} from '../../components';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: '15%',
        width: '20%',

        height: '30vw',
        margin: 10
    },
    media: {
        maxWidth: '96%',
        height: '20vw',

    },
});


const MoviesListCard = ({ movie }) => {

    const classes = useStyles();

    const rating = movie.vote_average;
    const genreArray = movie.genre_ids;
console.log(genreArray);

    return (
        <Card className={classes.root} >
            <CardActionArea>

                <div className={css.movieTitle}>
                    <div >
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.title}
                        </Typography>
                    </div>
                    <div >
                        <StarsRating rating = {rating} /></div>
                    <div >
                        <GenreBadge genres = {genreArray}/>
                    </div>
                </div>


                <div className={css.movieMainContent}>
                    <div >
                        <CardMedia
                            className={classes.media + ' ' + css.zoom}
                            image={'https://image.tmdb.org/t/p/w500' + movie['poster_path']}
                            title={movie.title}
                        />
                    </div>
                    <div>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {movie.overview}
                            </Typography>
                        </CardContent>
                    </div>
                </div>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}





export {MoviesListCard};

