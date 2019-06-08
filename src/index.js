import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBEwJUV2FwAXl9rJ3WYJJI6BmMoLYQsun0",
    authDomain: "comsci-ia.firebaseapp.com",
    databaseURL: "https://comsci-ia.firebaseio.com",
    projectId: "comsci-ia",
    storageBucket: "comsci-ia.appspot.com",
    messagingSenderId: "5440866100",
    appId: "1:5440866100:web:91f3b5e98fff441d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
