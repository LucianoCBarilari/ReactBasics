import { useState } from "react";
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { Position } from "../../Helpers/Position";
import { TextColors } from "../../Helpers/TextColors";
import TagAppBar from "../AppBar/TagAppBar";
import { OffcanvasPosition } from "../Drawer/OffcanvasPosition";
import TagDrawer from "../Drawer/TagDrawer";
import TagDrawerBody from "../Drawer/TagDrawerBody";
import TagDrawerHeader from "../Drawer/TagDrawerHeader";

const TagMainLayout = () => {  

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    const mainContainer = "container m-0 p-2";

    return (
        <div>
            <TagAppBar 
                color={TextColors.White} 
                fixed={Position.FixedTop} 
                backgroundColor={BackgroundColors.Primary}
            >
                <div className={mainContainer}>
                    <div className="row">
                        <div className="col-4">
                            <button className="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasNavbar" 
                                    aria-controls="offcanvasNavbar"                                    
                                    aria-label="Toggle navigation">
                                <span className="bi bi-columns-gap"/>
                            </button>
                        </div>
                        <div className="col-4">
                            <h5>Learning React Basics</h5>
                        </div>                           
                        <div className="col-4">
                            <button>Change Style</button>
                        </div>
                    </div>
                </div>         
            </TagAppBar>
            
            <div className="row" style={{ marginTop: '75px' }}>
                <TagDrawer 
                    open={openDrawer}
                    offcanvasPosition={OffcanvasPosition.offcanvasStart}
                    backgroundColor={BackgroundColors.Primary}
                >
                    <TagDrawerHeader />
                    <TagDrawerBody />
                </TagDrawer>
            </div>

            <div className="row" style={{ marginTop: '20px' }}>
                {/* Contenido del cuerpo */}
                <div className={mainContainer}>
                    <h2>Contenido Principal</h2>
                    <p>Aquí va el contenido principal de la aplicación.</p>
                </div>
            </div>
        </div>
    );
}

export default TagMainLayout;