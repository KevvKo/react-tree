import React from 'react';
import './App.css';
import data from './assets/mock.data.json';
import { Tree } from './library';

function App() {

  return (
    <>
      <div className="App">
        <Tree data={ data } />  
      </div>
    </>
  );
}

export default App;
