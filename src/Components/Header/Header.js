import css from './Header.module.css';
import {ThemeSelection} from "../ThemeSelection/ThemeSelection";


const Header = () =>{

return(
    <div className={css.header}>
        <div className={css.headerLogo}>

        </div>
        <div className={css.headerMenu}>

        </div>

        <div className={css.headerProfile}>
            <ThemeSelection />
        </div>
    </div>
);
}

export {Header};