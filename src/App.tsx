import { useState } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Button from './components/Button';
import Home from './components/Home';
import BootstrapComponent from './components/TestAndOthers/bootstrapEx';
import Counter from './components/TestAndOthers/counter';
import ComponentA from './components/TestAndOthers/componentA';
import ComponentB from './components/TestAndOthers/componentB';
import ListExample from './components/DisplayData/ListExample';
import Form from './components/Forms/form';
import DynamicList from './components/Dynamic Rendering/dynamicList';
import ListFromDataContext from './components/DisplayData/ListFromDataContext';
import TagAppBar from './components/AppBar/TagAppBar';

import { BackgroundColors } from "./Helpers/BackgroundColors";
import { Position } from "./Helpers/Position";
import { TextColors } from "./Helpers/TextColors";
import TagDrawer from './components/Drawer/TagDrawer';
import TagDrawerHeader from './components/Drawer/TagDrawerHeader';
import TagDrawerBody from './components/Drawer/TagDrawerBody';

function App() {
  const [count, setCount] = useState(0);
  const [message] = useState('Home page Example with Props');
  const [darkMode, setDarkMode] = useState(true);
  const col_4Class = 'col-4 border shadow rounded';
  const mainContainer = "container m-0 p-2";
  let openDrawer= true; 
  
  return (
    <>
     <div className="row">
        <TagAppBar 
            color={TextColors.White} 
            fixed={Position.FixedTop} 
            backgroundColor={BackgroundColors.Primary}>

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
                                   <button onClick={() => setDarkMode(!darkMode)}>Change Style</button>
                      </div>
                </div>
        </div>         
        </TagAppBar>
      </div>
      <div className="row t-10">
          {/**/}
          <TagDrawer open={openDrawer}>
               <TagDrawerHeader />
               <TagDrawerBody />
          </TagDrawer>  
      </div>
      
      
      <div className="bg-dark text-white">
        
       
        <div className={mainContainer}>
          <div className="row">
            <div className={col_4Class}>
              <h4>Independent Component Example</h4>
              <Button text='Button Name from Props' />
            </div>
            <div className={col_4Class}>
              <Home message={message} />
              <BootstrapComponent />
            </div>
            <div className={col_4Class}>
              <Counter />
            </div>
          </div>
        </div>
        <div className={mainContainer}>
          <div className="row">
            <div className={col_4Class}>
              <ComponentA emoji="🚀" titulo="Space Adventure" />
              <ComponentB buttonText="Button(reused component)" />
            </div>
            <div className={col_4Class}>
              <h4>Counter from App</h4>
              <button onClick={() => {
                setCount((count) => count + 1);
              }}>
                count is {count}
              </button>
            </div>
            <div className={col_4Class}></div>
          </div>
        </div>
        <div className={mainContainer}>
          <div className="row">
            <div className='col-6 border rounded'>
              <ListExample />
            </div>
            <div className='col-6 border rounded'>
              <Form />
            </div>
          </div>
        </div>
        <div className={mainContainer}>
          <div className="row">
            <div className='col-6 border rounded'>
              <DynamicList />
            </div>
            <div className='col-6 border rounded'>
              <ListFromDataContext />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
