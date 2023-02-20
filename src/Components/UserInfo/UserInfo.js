
import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import css from './UserInfo.module.css';

import {AvatarImage} from '../../Components';
import {Typography} from "@mui/material";
import {ThemeContext} from "../../themes/theme-context";

const UserInfo = ({name, email, avatarUrl}) => {
    const {theme} = useContext(ThemeContext);


    return(
                <div className={css.userCard}>
                    <AvatarImage avatarUrl = {avatarUrl} />
                    <div className={css.userCardText}>
                        <Typography variant="h5" component={theme.components.MuiTypography.defaultProps.variantMapping.subtitle1} color={theme.palette.primary.contrastText}>
                            {name}
                            <br/>
                            {email}
                        </Typography>
                    </div>
                </div>
    );
};

// UserInfo.propTypes = {
//     name: PropTypes.string,
//     size: PropTypes.number,
//     onClick: PropTypes.func,
//     disabled: PropTypes.bool,
// };

export {UserInfo};