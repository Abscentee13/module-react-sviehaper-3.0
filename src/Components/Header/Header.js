import {Typography} from "@mui/material";

import css from './Header.module.css';
//import {ThemeSelection} from "../../Components";

import {Badge} from "../../Components";
import {Button} from '../../Components';
import {Icon} from '../../Components';
import {UserInfo} from "../../Components";

const Header = () =>{

return(
    <div className={css.header}>
        <Typography variant="h5" component="h2" color="pink.light">
            React module work
            for OktenWeb
        </Typography>
        <div className={css.headerMenu}>
             <Button style={{ marginRight: '20px' }}>
                <Icon name="inbox" />
                <Badge circle alert value={1} />
            </Button>
        </div>

        <div className={css.headerProfile}>
            <UserInfo avatarUrl ={'images/Sviehaper.jpg'} name ={'Sviehaper'} email ={'sss@sss.com'}/>
            {/*<ThemeSelection />*/}
        </div>
    </div>
);
}

export {Header};