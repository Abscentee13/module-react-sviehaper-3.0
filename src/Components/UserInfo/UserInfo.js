
import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import css from './UserInfo.module.css';

import {AvatarImage} from '../../Components';

const UserInfo = ({ name, email, avatarUrl, ...attrs }) => {

    return(
                <div className={css.userCard}>
                    <AvatarImage avatarUrl = {avatarUrl} />
                    <div className={css.userCardText}>
                        {name}
                        <br/>
                        {email}
                    </div>
                </div>
    );
};


UserInfo.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export {UserInfo};