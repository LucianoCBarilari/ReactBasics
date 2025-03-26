import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TagMainLayout from './components/MainLayout/TagMainLayout';
import { BackgroundColors } from "./Helpers/BackgroundColors";
import TagAppBar from './components/AppBar/TagAppBar';
import { TextColors } from './Helpers/TextColors';
import { Position } from './Helpers/Position';
import TagDrawer from './components/Drawer/TagDrawer';
import { OffcanvasPosition } from './components/Drawer/OffcanvasPosition';
import TagDrawerHeader from './components/Drawer/TagDrawerHeader';
import TagDrawerBody from './components/Drawer/TagDrawerBody';
import TagMainContainer from './components/Containers/TagMainContainer';
import Body from './components/Body';
import TagNavMenu from './components/Menu/TagNavMenu';

function App() {  
  const mainContainer = "container m-0 p-2";


  return (
    <>
    <TagMainLayout>
      <TagAppBar 
                color={TextColors.Black} 
                fixed={Position.FixedTop} 
                backgroundColor={BackgroundColors.Dark}
                _style={{padding: "200px"}}>                
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
            </TagAppBar>
            <TagDrawer 
                    offcanvasPosition={OffcanvasPosition.offcanvasStart}
                    backgroundColor={BackgroundColors.Primary}>
                    <TagDrawerHeader />
                    <TagDrawerBody >
                        <TagNavMenu />
                    </TagDrawerBody >
            </TagDrawer>
            <TagMainContainer  _style={{minHeight:"600px", backgroundColor: "#333333" }}>
                  <Body/>
            </TagMainContainer>
    </TagMainLayout>
    </>
  );
}

export default App;
