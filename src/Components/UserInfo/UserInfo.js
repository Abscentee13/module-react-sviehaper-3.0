
import React from 'react';
import PropTypes from "prop-types";


const UserInfo = ({ name, email, avatarUrl, className, ...attrs }) => {

    return(
        <div>


        </div>

    );
};


UserInfo.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export {UserInfo};