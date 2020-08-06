import React, { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import routeEnum from '../constants/RouteEnum';
import LoadingIndicator from './components/LoadingIndicator';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingIndicator isActive={true} />}>
        <HashRouter>
          <Route path={routeEnum.HOME} component={Home} />
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
