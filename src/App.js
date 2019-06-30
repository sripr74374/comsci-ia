import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './routes/HomePage';
import AddPatientPage from './routes/AddPatientPage';
import { withAuthContext, useAuthContext, secureAuth } from './auth';
import SearchPage from './routes/SearchPage';

function App() {
  const authState = useAuthContext()
  if (authState.isLoading) {
    return <div>
      Authenticating ...
    </div>
  }
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={secureAuth(HomePage, false)} />
      <Route exact path={'/search'} component={secureAuth(SearchPage, true)} />
      <Route exact path={'/add'} component={secureAuth(AddPatientPage, true)} />
    </BrowserRouter>
  );
}

export default withAuthContext(App);
