import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TagMainLayout from './TagComponents/MainLayout/TagMainLayout';
import { BackgroundColors } from "./Helpers/BackgroundColors";
import TagAppBar from './TagComponents/AppBar/TagAppBar';
import { TextColors } from './Helpers/TextColors';
import { Position } from './Helpers/Position';
import TagDrawer from './TagComponents/Drawer/TagDrawer';
import { OffcanvasPosition } from './TagComponents/Drawer/OffcanvasPosition';
import TagDrawerHeader from './TagComponents/Drawer/TagDrawerHeader';
import TagDrawerBody from './TagComponents/Drawer/TagDrawerBody';
import TagMainContainer from './TagComponents/Containers/TagMainContainer';
import Body from './TagComponents/Body';
import TagNavMenu from './TagComponents/Menu/TagNavMenu';
import TagNavLink from './TagComponents/Menu/TagNavLink';
import { Shadows } from './Helpers/Shadows';
function App() {  
    
  return (
    <>
    <TagMainLayout>
      <TagAppBar 
                color={TextColors.Black} 
                fixed={Position.FixedTop} 
                backgroundColor={BackgroundColors.Primary}
                shadow={Shadows.ShadowsSM}                
                _class='p-2'>                
                    <div className="row mt-2 text-black">
                        <div className="col-4 text-start">
                            <button className="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasNavbar" 
                                    aria-controls="offcanvasNavbar"                                    
                                    aria-label="Toggle navigation">
                                <i className="bi bi-list fs-2"/>
                            </button>
                        </div>
                        <div className="col-4 text-center">
                            <h3>Learning React Basics</h3>
                        </div>                           
                        <div className="col-4 text-end">
                            <button 
                                   className="navbar-toggler"
                                   type="button">
                                   <i className="bi bi-three-dots-vertical fs-2"></i>
                            </button>
                        </div>
                    </div>                     
      </TagAppBar>
            <TagDrawer 
                    offcanvasPosition={OffcanvasPosition.offcanvasStart}
                    backgroundColor={BackgroundColors.Secondary}
                    shadow={Shadows.ShadowsSM} >
                    <TagDrawerHeader> 
                        <h3>Menu</h3>
                    </TagDrawerHeader>
                    <TagDrawerBody >
                        <TagNavMenu
                           color={TextColors.Black}
                           backgroundColor={BackgroundColors.Secondary} >
                            <TagNavLink href="/" title="Home">Home</TagNavLink>
                            <TagNavLink href="/about" title="About">About</TagNavLink>
                        </TagNavMenu>
                    </TagDrawerBody >
            </TagDrawer>
            <TagMainContainer>
                  <Body/>
            </TagMainContainer>
    </TagMainLayout>
    </>
  );
}

export default App;
