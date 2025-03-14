import { DataProvider } from "../Data/DataContext";
import ListProducts from "./ListProducts"; 

const ListFromDataContext = () => {
    return (
        <>
            <DataProvider>
                <ListProducts/>
            </DataProvider>
        </>
    );
}

export default ListFromDataContext;