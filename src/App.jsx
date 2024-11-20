import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/header/header.component';
import Homepage from '../src/pages/homepage/homepage.component';

import './App.css';
import ErrorPage from './pages/errorpage/errorpage.component';

function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/error' component={ErrorPage}/>
        </Switch>
      </div>
  );
}

export default App;
