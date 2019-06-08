import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './routes/HomePage';
import AddPatientPage from './routes/AddPatientPage';
import * as firebase from 'firebase'

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/add'} component={AddPatientPage} />
    </BrowserRouter>
  );
}

export default App;
