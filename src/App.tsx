import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  useManagerInit, useStateManager } from 'use-state-manager';

import { textManager, yearManager} from './store/managers';

import './App.css';

import routes from './config/routes';

import Home from './containers/home/Home';

/**
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since v1.0.0
 * @version v1.0.0
 * @param props
 */
const App: React.FC = () => {
  
  useManagerInit(textManager);
  useManagerInit(yearManager);

  const [year, setYear] = useStateManager(yearManager);

  return (
    <div className="app">
      {year}
      <input value={year} onChange={({ target }) => setYear(target.value)} />
      <Router>
        <Route path={routes.home} component={Home} />
      </Router>
    </div>
  );
}

export default App;
