import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Home from './components/Home';
import BootstrapComponent from './components/TestAndOthers/bootstrapEx';
import Counter from './components/TestAndOthers/counter';
import ComponentA from './components/TestAndOthers/componentA';
import ComponentB from './components/TestAndOthers/componentB';
import ListExample from './components/DisplayData/listExample';
import Form from './components/Forms/form';

function App() {
  const [count, setCount] = useState(0);
  const [message] = useState('Home page Example with Props');
  const [darkMode, setDarkMode] = useState(true);
  const col_4Class = 'col-4 border shadow rounded';
  const mainContainer = "container m-0 p-2";
  return (
    <>
      <div className="bg-dark text-white">
        <div className={mainContainer}>
          <div className="row">
            <div className="col-8">
              <h1>Learning React Basics</h1>
            </div>
            <div className="col-4">
              <button onClick={() => setDarkMode(!darkMode)}>Change Style</button>
            </div>
          </div>
        </div>
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
              <ComponentA emoji="🚀" title="Space Adventure" />
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
      </div>
    </>
  );
}

export default App;
