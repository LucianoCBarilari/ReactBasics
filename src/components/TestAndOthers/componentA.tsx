import PropTypes from 'prop-types';

const ComponentA = ({emoji , titulo}) => {
    return (
        <>
        <h6>Ejemplo de Props</h6>
        <div className="container">
            <div className="">{emoji}</div>
            <div className="">{titulo}</div>
        </div>
        </>
    );
}
export default ComponentA;

ComponentA.propTypes = {
    emoji: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
};