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
      <div className="App">
        <Tree data={ data } selectParents={true} selectChildren={false}/>  
      </div>
      <div className="App">
        <Tree data={ data } selectParents={false} selectChildren={true}/>  
      </div>
    </>
  );
}

export default App;
