import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  useManagerInit, useStateManager } from './store/managers/manager';

import { textManager, yearManager} from './store/managers';

import './App.css';

import routes from './config/routes';

import Home from './containers/home/Home';
import Login from './containers/login/Login';

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
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.login} component={Login} />
      </Router>
    </div>
  );
}

export default App;
