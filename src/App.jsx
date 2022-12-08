import React, { useState } from 'react';
import {StateComponent1} from './useState';
import {ContextComponent1} from './useContext';
import './App.css';

function App() {
  const [isComponentOneDisplayed, setIsComponentOneDisplayed] = useState(true);

  return (
    <div className="app">
      <div className="button-container">  
        <button onClick={() => setIsComponentOneDisplayed(!isComponentOneDisplayed)}>
          Toggle Component
        </button>
      </div>
        <p>{isComponentOneDisplayed ? 'useState is active' : 'useContext is activie'}</p>
      <div className="component-container">
        {isComponentOneDisplayed ? <StateComponent1 /> : <ContextComponent1 />}
      </div>
    </div>
  );
}

export default App;