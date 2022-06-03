import React, { useContext } from 'react';
import './App.css';
import AppChild from './component/AppChild';
import { Context } from './context/dataContext';


function App() {
      const { increaseDataHandler, decreaseDataHandler } = useContext(Context);

      return (
            <div className="App">
                  <h1>Welcome</h1> 
                  <p>Click to change state of context</p>

                  <span className='app__button-container'>
                        <button onClick={increaseDataHandler}>Increase value</button>
                        <button onClick={decreaseDataHandler}>Decrease value</button>
                  </span>
                  
                  <AppChild/>
            </div>
      )
}

export default App