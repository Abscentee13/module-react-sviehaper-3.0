import css from './Header.module.css';
import {ThemeSelection} from "../ThemeSelection/ThemeSelection";


const Header = ({theme}) =>{

return(
    <div className={css.header}>
        <ThemeSelection theme = {theme}/>
    </div>
);
}

export {Header};