import { useContext } from 'react';
import { DataContext } from '../Data/DataContext';

function ListProducts () {    
    //const { data } = useContext(DataContext);
    const limit = 4; // Número máximo de elementos a mostrar
    
    // Tomar solo los primeros 'limit' elementos
    //const limitedData = data.slice(0, limit);

    return (
        <>
        </>
    );
}

export default ListProducts;

/*
    return (
        <div>
            <h2>List of Products</h2>
            <div className="row">
                {limitedData && limitedData.length > 0 ? (
                    limitedData.map(producto => (
                        <div className="col-md-4" key={producto.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <p className="card-text">{producto.body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Cargando datos...</p>
                )}
            </div>
        </div>
    );
}
*/ 