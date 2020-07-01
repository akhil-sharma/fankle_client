import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import Header from '../src/components/header/header.component';
import Homepage from '../src/pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <ToastProvider>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/error' component={Homepage}/>
        </Switch>
      </div>
    </ToastProvider>
  );
}

export default App;
