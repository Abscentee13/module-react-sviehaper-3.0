import {css} from './Avatar.module.css';


const Avatar = ({avatarUrl}) => {

    return (
    <img src={avatarUrl} alt="Avatar" className={css.avatarI}/>
    );

};

export {Avatar};