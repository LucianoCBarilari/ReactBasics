

interface ComponentBProps {
    buttonText: string;
}

const ComponentB = ({ buttonText }: ComponentBProps) => {
    const handleClick = () => {
        alert('Button pressed');
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
    );
}
export default ComponentB;