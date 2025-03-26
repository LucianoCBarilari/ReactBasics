import PropTypes from 'prop-types';

const Button = () => {
    return (
        <button>"text"</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Button;
