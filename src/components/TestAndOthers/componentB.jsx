import PropTypes from 'prop-types';

const ComponentB = ({ buttonText }) => {
    const handleClick = () => {
        alert('Button pressed');
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
    );
}
export default ComponentB;

ComponentB.propTypes = {
    buttonText: PropTypes.string.isRequired,
};