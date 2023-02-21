import css from './GenreList.module.css';
import {Button} from "../Button/Button";
import {Icon} from "../Icon/Icon";
import {Badge} from "../Badge/Badge";
import {useDispatch, useSelector} from 'react-redux';
import { getGenres  } from '../../store/reducers/genres/genresSelectors';
import {useEffect} from "react";
import {fetchGenres} from "../../store/reducers/genres/genresActions";



const GenreList = () => {
    const dispatch = useDispatch();
    const genres = useSelector(getGenres );
    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);


    return (
        <div>
            <h2>Genres</h2>

            <div className={css.genreListBlock}>

                {genres.map(genre => (
                    <Button key={genre.id} style={{ marginRight: '20px' }}>
                        <Icon name="inbox" />
                        {genre.name}
                        <Badge circle alert value={genre.id} />
                    </Button>
                ))}
            </div>

        </div>
    );
}

export {GenreList};