import {Typography} from "@mui/material";

import css from './Header.module.css';

import {GenreList} from '../../components';
import {UserInfo} from "../../components";
import {useContext} from "react";
import {ThemeContext} from "../../themes/theme-context";

const Header = ({genreList}) =>{
    const {theme} = useContext(ThemeContext);

return(
        <div className={css.header}>
            <div className={css.headerLogo}>
            <Typography variant="h5" component="h2" color={theme.palette.primary.contrastText}>
                React module work
                for Okten Web School
            </Typography>
            </div>
            <div className={css.headerMenu}>
                <GenreList genreList = {genreList}/>
            </div>

            <div className={css.headerProfile}>
                <UserInfo avatarUrl ={'images/Sviehaper.jpg'} name ={'Sviehaper'} email ={'sss@sss.com'}/>
            </div>
    </div>
);
}

export {Header};