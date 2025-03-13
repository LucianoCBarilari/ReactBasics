import { createContext, useEffect,useState } from "react";
import PropTypes from 'prop-types';


const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos de la API:", data);
            setData(data);
        })
        .catch(error => console.log(error));
    }   ,[]);
return (
    <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
)
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Exporta de manera consistente
export { DataContext, DataProvider };