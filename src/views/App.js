import React, { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<div>Loading</div>}></Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
