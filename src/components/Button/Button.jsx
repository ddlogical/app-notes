import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleClick, text, className, ...attrs }) {
    return (
        <button className={className} onClick={handleClick} {...attrs}>
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    className: PropTypes.string,
};

Button.defaultProps = {
    handleClick: () => {},
    text: '',
    className: '',
};