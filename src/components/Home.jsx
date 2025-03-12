import PropTypes from 'prop-types';

const Home = ({message})=>{

    return (
        <>
           <p>{message}</p>
        </>
    );
}
Home.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Home;